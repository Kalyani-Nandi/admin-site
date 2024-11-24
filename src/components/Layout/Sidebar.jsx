import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaAtom, FaGreaterThan, FaTimes } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // Close if the ESC key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const menuItems = [
    {
      header: "Menu",
      items: [
        { id: 1, name: "Accounts Overview", link: "/" },
        { id: 2, name: "Payouts", link: "/payouts" },
        { id: 3, name: "Certificates", link: "/certificates" },
        { id: 4, name: "Leaderboard", link: "/leaderboard" },
        { id: 5, name: "Order List", link: "/order-list" },
      ],
    },
    {
      header: "Apps",
      items: [
        { id: 6, name: "News Feeds", link: "/news-feeds" },
        { id: 7, name: "Economic Calendar", link: "/economic-calendar" },
        { id: 8, name: "WebTrader Platform", link: "/webtrader-platform" },
        { id: 9, name: "Margin Calculator", link: "/margin-calculator" },
        { id: 10, name: "Profit Calculator", link: "/profit-calculator" },
      ],
    },
  ];

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-full flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-black ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 mt-2 py-5.5">
        <NavLink to="/">
          <div className="flex items-center gap-x-4">
            <FaAtom fill="blue" size={22} />
            <h2 className="dark:text-white font-bold text-2xl">Trading</h2>
          </div>
        </NavLink>

        {/* Close Button */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="text-gray-800 dark:text-white hover:text-red-600"
          aria-label="Close Sidebar"
        >
          <FaGreaterThan size={20} />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4">
          {menuItems.map((menu) => (
            <div key={menu.header}>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2 uppercase">
                {menu.header}
              </h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                {menu.items.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-gray-800 dark:text-white duration-300 ease-in-out hover:bg-blue-900 hover:text-white ${
                          isActive
                            ? "bg-blue-900 dark:bg-meta-4 text-white"
                            : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
