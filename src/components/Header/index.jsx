import DarkModeSwitcher from "./DarkModeSwitcher";
import { FaMoneyCheckAlt, FaShareAlt, FaKey } from "react-icons/fa";

const Header = (props) => {
  console.log("🚀 ~ Header ~ props:", props)
  const { sidebarOpen, setSidebarOpen } = props;

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white dark:bg-boxdark ">
      <div className="flex flex-grow items-center justify-between px-6 py-4 ">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className={` ${
              sidebarOpen ? "hidden" : "z-99999"
            }  block rounded-sm  bg-white p-1.5  dark:bg-boxdark`}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
          <h3 className="font-bold text-black dark:text-white text-xl">
            Welcome Back, Alex!
          </h3>
        </div>{" "}
        <DarkModeSwitcher />
        <div className="flex gap-4">
          {/* Request Payout Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2C63D3] text-white rounded shadow hover:bg-blue-600">
            <FaMoneyCheckAlt size={20} />
            Request Payout
          </button>

          {/* Share Metrics Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-[#EBF1FF] text-[#2C63D3] rounded shadow hover:opacity-70">
            <FaShareAlt size={20} />
            Share Metrics
          </button>

          {/* Key Icon Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-[#EBF1FF] text-[#2C63D3] rounded shadow hover:opacity-70">
            <FaKey size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
