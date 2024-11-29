"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/AdminPanel/Sidebar/Sidebar";
import Navbar from "@/components/AdminPanel/Navbar/Navbar";
import Footer from "@/components/AdminPanel/Footer/Footer";

function Layout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  return (
    <div className="flex bg-white">
      {!isLoginPage && <Sidebar />}
      <div className="flex flex-col w-full">
        {!isLoginPage && (
          <div className="w-full px-4 md:px-10 pt-10">
            <Navbar />
          </div>
        )}
        <div className="flex-grow flex flex-col">
          <div className="flex-grow overflow-auto">{children}</div>
          {!isLoginPage && <Footer className="w-full" />}
        </div>
      </div>
    </div>
  );
}

export default Layout;
