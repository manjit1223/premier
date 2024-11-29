"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { logOut as logOutAction } from "@/store/slices/userSlice";
import Cookies from "js-cookie";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollYForNavbar, setLastScrollYForNavbar] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [token, setToken] = useState(null);

  const reduxToken = Cookies.get("token");
  const selectorToken = useSelector((state) => state.user.token);

  useEffect(() => {
    setToken(reduxToken);
  }, [reduxToken, selectorToken]);

  const handleNavbarVisibilityOnScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollYForNavbar && currentScrollY > 10) {
      setIsNavbarVisible(false);
    } else if (currentScrollY < lastScrollYForNavbar) {
      setIsNavbarVisible(true);
    }
    setLastScrollYForNavbar(currentScrollY);
  }, [lastScrollYForNavbar]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarVisibilityOnScroll);
    return () => {
      window.removeEventListener("scroll", handleNavbarVisibilityOnScroll);
    };
  }, [handleNavbarVisibilityOnScroll]);

  const handleScroll = (e, target, url) => {
    e.preventDefault();
    // if (pathname !== "/") {
    router.push(`/${url}`);
    // } else {
    //   const element = document.getElementById(target);
    //   if (element) {
    //     const elementPosition =
    //       element.getBoundingClientRect().top + window.scrollY - 170;
    //     window.scrollTo({
    //       top: elementPosition,
    //       behavior: "smooth",
    //     });
    //   } else {
    //     console.warn(`Element with id ${target} not found.`);
    //     router.push(`/${target}`);
    //   }
    // }
    setMenuOpen(false);
  };

  const handleLogout = () => {
    setMenuOpen(false);
    setToken(null);
    dispatch(logOutAction());
    router.push("/login");
  };

  return (
    <div
      className={`flex justify-between lg:sticky top-0 z-50 bg-black p-5 md:px-10 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-1/2 md:w-1/6">
        <Image
          src="/images/landing-page/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="cursor-pointer"
          onClick={() => router.push("/")}
          priority
        />
      </div>

      <div className="hidden lg:flex w-2/3 items-center justify-end gap-8">
        <Link
          href="/#home"
          onClick={(e) => handleScroll(e, "home", "home")}
          className="text-white"
        >
          Home
        </Link>
        <Link
          href="/#thePremierPlan"
          onClick={(e) => handleScroll(e, "thePremierPlan", "the-premier-plan")}
          className="text-white"
        >
          The Premier Plan
        </Link>
        <Link
          href="/#theUnparalleledArt"
          onClick={(e) =>
            handleScroll(e, "theUnparalleledArt", "the-unparalleled-art")
          }
          className="text-white"
        >
          Collections
        </Link>
        {/* <Link
          href="/"
          onClick={(e) => handleScroll(e, "latestNews", "latest-news")}
          className="text-white"
        >
          Latest News
        </Link> */}
        <Link
          href="/our-team"
          onClick={(e) => handleScroll(e, "our-team", "our-team")}
          className="text-white"
        >
          Our Team
        </Link>
        <Link
          href="/contact-us"
          onClick={(e) => handleScroll(e, "contact-us", "contact-us")}
          className="text-white"
        >
          Contact Us
        </Link>
      </div>

      <div className="hidden lg:flex w-1/6 justify-end items-center">
        {token ? (
          <div className="relative">
            <Image
              src="/images/landing-page/User.png"
              alt=""
              width={50}
              height={50}
              className="rounded-full cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="bg-white text-black px-5 py-3">
            <Link
              href="/login"
              onClick={(e) => handleScroll(e, "login", "login")}
            >
              Login
            </Link>{" "}
            / &nbsp;
            <Link
              href="/signup"
              onClick={(e) => handleScroll(e, "signup", "signup")}
            >
              Signup
            </Link>
          </button>
        )}
      </div>

      <div
        className={`absolute top-0 left-0 w-full bg-black lg:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-5">
          <Link
            href="/#home"
            onClick={(e) => handleScroll(e, "home", "home")}
            className="text-white"
          >
            Home
          </Link>
          <Link
            href="/#thePremierPlan"
            onClick={(e) =>
              handleScroll(e, "thePremierPlan", "the-premier-plan")
            }
            className="text-white"
          >
            The Premier Plan
          </Link>
          <Link
            href="/#theUnparalleledArt"
            onClick={(e) =>
              handleScroll(e, "theUnparalleledArt", "the-unparalleled-art")
            }
            className="text-white"
          >
            Collections
          </Link>
          {/* <Link
            href="/"
            // onClick={(e) => handleScroll(e, "latestNews", "latest-news")}
            className="text-white"
          >
            Latest News
          </Link> */}
          <Link
            href="/our-team"
            onClick={(e) => handleScroll(e, "our-team", "our-team")}
            className="text-white"
          >
            Our Team
          </Link>
          <Link
            href="/contact-us"
            onClick={(e) => handleScroll(e, "contact-us", "contact-us")}
            className="text-white"
          >
            Contact Us
          </Link>
          {token ? (
            <div>
              {menuOpen && (
                <div className="mt-2 w-32 bg-white text-black rounded shadow-lg">
                  <button
                    onClick={handleLogout}
                    className="w-full text-center px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="bg-white text-black px-5 py-3">
              <Link
                href="/login"
                onClick={(e) => handleScroll(e, "login", "login")}
              >
                Login
              </Link>{" "}
              / &nbsp;
              <Link
                href="/signup"
                onClick={(e) => handleScroll(e, "signup", "signup")}
              >
                Signup
              </Link>
            </button>
          )}
        </div>
      </div>

      <div className="lg:hidden w-1/2 flex justify-end items-center">
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
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
