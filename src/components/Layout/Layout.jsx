import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark border border-red-500">
      <div className="flex h-screen overflow-hidden ">
        <div
          className={`border border-red-500 relative ${
            sidebarOpen ? "w-full lg:w-[15%]" : "5%"
          }`}
        >
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
