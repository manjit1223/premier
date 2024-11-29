"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRedirect = () => {
    const url = new URL(
      "/latest-landing-page/contact-us",
      window.location.origin
    );
    url.searchParams.set("flag", "true");

    router.push(url.toString());
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full absolute py-5 lg:py-10 z-50">
      <div className="flex items-center justify-between w-full">
        <div className="pl-[6%] lg:pl-[9%] flex items-center w-1/3 md:w-full">
          <Image
            src="/images/landing-page/logo.png"
            width={100}
            height={100}
            alt="logo"
            className="cursor-pointer"
            onClick={() => router.push("/latest-landing-page")}
            priority
          />
          <p className="hidden md:block text-lg md:text-xl lg:text-xl didot ml-4">
            <span className="text-2xl didot">P</span>REMIER{" "}
            <span className="text-2xl didot">A</span>RT{" "}
            <span className="text-2xl didot">H</span>OLDINGS
          </p>
        </div>

        <div className="hidden lg:flex items-center justify-center lg:w-[90%] gap-8">
          <button
            href="#"
            className="text-white text-lg md:text-xl gill-sans"
            onClick={handleRedirect}
          >
            Inquires
          </button>
          <Link
            href="/latest-landing-page/inner-circle"
            className="text-white text-lg md:text-xl gill-sans"
            onClick={handleClose}
          >
            Inner Circle
          </Link>
        </div>

        <div
          className={`absolute top-0 left-0 w-full bg-black lg:hidden transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col items-center gap-5 py-5">
            <button
              href="#"
              className="text-white text-lg md:text-xl gill-sans"
              onClick={handleRedirect}
            >
              Inquires
            </button>
            <Link
              href="/latest-landing-page/inner-circle"
              className="text-white text-base gill-sans"
              onClick={handleClose}
            >
              Inner Circle
            </Link>
          </div>
        </div>

        <div className="lg:hidden w-full flex justify-end items-center pr-4 md:pr-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-1 text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
