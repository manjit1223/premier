"use client";

import React, { useState } from "react";
import { Menu, House, Users, MessagesSquare } from "lucide-react";
import { useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/");

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuClick = (path) => {
    setActiveMenu(path); // Set the selected menu path
    router.push(path);   // Navigate to the selected route
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          className="bg-[#444444] text-white p-2 rounded"
          onClick={toggleSidebar}
        >
          {isOpen ? <Menu /> : <Menu />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-40 bg-[#ebebeb] w-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:static md:w-20 flex flex-col items-center`}
      >
        <div
          className={`bg-[#444444] cursor-pointer py-6 px-7 ${
            activeMenu === "#" ? "text-white" : "text-[#696969]"
          }`}
          onClick={() => handleMenuClick("#")}
        >
          <Menu />
        </div>
        <div
          className={`cursor-pointer py-6 px-7 ${
            activeMenu === "/admin" ? "bg-white text-black" : "text-[#696969] hover:bg-white"
          }`}
          onClick={() => handleMenuClick("/admin")}
        >
          <House />
        </div>
        <div
          className={`cursor-pointer py-6 px-7 ${
            activeMenu === "/admin/users" ? "bg-white text-black" : "text-[#696969] hover:bg-white"
          }`}
          onClick={() => handleMenuClick("/admin/users")}
        >
          <Users />
        </div>
        <div
          className={`cursor-pointer py-6 px-7 ${
            activeMenu === "#" ? "bg-white text-black" : "text-[#696969] hover:bg-white"
          }`}
          onClick={() => handleMenuClick("#")}
        >
          <MessagesSquare />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
