"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./latest-landing-page.module.scss";
import clsx from "clsx";

function LatestLandingPage() {
  const router = useRouter();

  const handleRedirect = () => {
    const url = new URL(
      "/latest-landing-page/contact-us",
      window.location.origin
    );
    url.searchParams.set("flag", "true");

    router.push(url.toString());
  };

  return (
    <div className="bg-[#88745b] flex justify-center min-h-screen">
      <div className="w-11/12 bg-[#201f22] flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center w-10/12 py-5 lg:py-14 bg-no-repeat bg-cover bg-top"
          style={{
            backgroundImage: "url('/images/latest-landing-page/image-7.png')",
          }}
        >
          <div className="flex flex-col items-center text-center pt-24 md:pt-28 lg:pt-80">
            <div>
              <p className="text-2xl md:text-4xl lg:text-7xl text-[#e4cd99] didot">
                Timeless Masterpieces.
                <br /> Visionary Investments.
              </p>
            </div>
            <div className="mt-5 md:mt-40 lg:mt-96">
              <p className="text-base md:text-lg lg:text-3xl didot">
                Be among the visionaries redefining
                <br /> how art and value converge.
              </p>
              <p className="text-xs md:text-sm lg:text-xl pt-5 md:pt-10 text-[#959495] gill-sans">
                Experience history’s most iconic masterpieces, empowered by the
                <br />
                groundbreaking technology of tomorrow. This isn’t just an
                investment— <br />
                it’s a revolution in legacy and wealth, merging the timeless
                value of fine
                <br /> art with the transformative power of digital currency.
              </p>
            </div>
            <div className="pt-6 md:pt-10">
              <button
                className="bg-[#211f24] text-[#959495] md:text-lg border w-20 h-8 md:w-40 md:h-10 rounded-2xl gill-sans"
                onClick={handleRedirect}
              >
                Inquires
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-20 text-center">
          <p className="text-2xl md:text-4xl lg:text-6xl text-[#e4cd99] didot">
            The Inner Circle Membership
          </p>
          <p className="text-lg md:text-2xl lg:text-4xl pt-2 md:pt-4 text-white gill-sans">
            Where History Meets Innovation.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-11/12 lg:w-3/4 gap-5 md:gap-16 text-justify mt-5 md:pt-10">
          <div>
            <p className="text-sm md:text-base lg:text-lg gill-sans">
              For centuries, fine art has symbolized cultural significance,
              wealth, and legacy. Now, we’re pioneering a new era by connecting
              timeless masterpieces with cutting-edge digital innovation.
              Launching soon, the Premier Art Token is a groundbreaking
              investment backed by the world’s most extraordinary art.
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg gill-sans">
              Join an exclusive group of visionaries shaping this historic
              movement. Through our invite-only Inner Circle membership, early
              adopters gain unparalleled access to private events, early
              investment opportunities, and the ability to influence the
              acquisition of culturally significant art pieces.
            </p>
          </div>
        </div>
        <button
          className={clsx(
            "text-black border border-black md:text-lg shadow-2xl w-40 h-8 md:h-10 rounded-full gill-sans mt-10",
            styles.gradientButton
          )}
          onClick={handleRedirect}
        >
          Request Invitation
        </button>
        <div
          className="flex flex-col px-5 items-center justify-center w-full h-[100px] md:h-[200px] bg-no-repeat bg-cover bg-center mt-10"
          style={{
            backgroundImage: "url('/images/latest-landing-page/image-3.png')",
          }}
        >
          <p className="text-xl md:text-3xl lg:text-5xl text-[#c9c4bf] text-center gill-sans">
            Coming January 2025: A Masterpiece Unveiled After 500 Years.
          </p>
        </div>
        <div className="flex flex-col items-center py-10 bg-[#c9c4bf] text-black">
          <p className="text-xl md:text-2xl lg:text-4xl px-5 md:px-0 didot">
            Art, Innovation, and the Future of Value.
          </p>
          <div className="flex flex-col md:flex-row w-11/12 lg:w-3/4 gap-5 md:gap-16 text-justify pt-5 md:pt-10">
            <div>
              <p className="text-sm md:text-base lg:text-lg gill-sans">
                At Premier Art, we are reimagining the intersection of fine art
                and investment, transforming how value is preserved and grown.
                Our mission is to connect the timeless legacy of culturally
                significant art with the innovation of digital currency,
                creating a secure, accessible, and transparent platform for
                discerning investors. Each Premier Art Token is backed by
                historically significant, appraised masterpieces, ensuring that
                every investment is grounded in tangible, timeless assets.
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base lg:text-lg gill-sans">
                Our process begins with a meticulous curation of rare and
                extraordinary artworks, such as the upcoming unveiling of one of
                the rarest Carrera Marble masterpieces by one of the greatest
                Italian Renaissance masters. This piece, unseen for 500 years
                since it was last displayed by the powerful Roman Frangipane
                Family, will serve as the cornerstone of this initiative. Using
                advanced blockchain technology, we tokenize these works,
                enabling fractional ownership and modernizing the way art is
                valued and traded.
              </p>
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-4xl text-center pt-10 didot">
            <i>
              “With this revolutionary approach, we are not just <br />{" "}
              preserving history—we are unlocking its potential to <br /> build
              the future of wealth creation.”
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LatestLandingPage;
