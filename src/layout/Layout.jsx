import React, { useState, ReactNode } from "react";
import Header from "../components/Header/index";
import Sidebar from "../components/Sidebar/index";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark ">
      <div className="flex h-screen overflow-hidden ">
        <div className={`relative ${sidebarOpen ? "w-full lg:w-[15%]" : "5%"}`}>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden no-scrollbar">
          <main>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="mx-auto px-6">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
