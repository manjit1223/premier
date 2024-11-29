"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  return (
    <div className="flex justify-between lg:sticky top-0 z-50 bg-[#ebebeb] p-5 md:px-10 rounded-2xl shadow-2xl transition-transform duration-300">
      <div className="w-1/4 md:w-1/6 flex items-center gap-4 font-bold text-2xl md:text-4xl">
        <Image
          src="/images/landing-page/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="cursor-pointer"
          onClick={() => router.push("/admin")}
          priority
        />
        <p className="text-[#3A3B4E] hidden md:flex">Premier</p>
      </div>

      <div className="flex flex-col items-center justify-center text-[#726A7A]">
        <div className="flex items-center gap-4">
          <User size={28} />
          <p className="text-xl">Isaiah Price</p>
        </div>
        <div>
          <p className="text-xl">Admin</p>
        </div>
      </div>
    </div>
  );
}
