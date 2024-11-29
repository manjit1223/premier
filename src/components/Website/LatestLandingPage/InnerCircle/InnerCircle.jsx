"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./inner-circle.module.scss";
import clsx from "clsx";

function InnerCircle() {
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
          className="flex flex-col items-center w-10/12 py-5 lg:py-10 bg-no-repeat bg-cover bg-center md:bg-top"
          style={{
            backgroundImage: "url('/images/latest-landing-page/image-6.png')",
          }}
        >
          <div className="flex flex-col items-center text-center pt-20 md:pt-36">
            <div>
              <p className="text-2xl md:text-4xl lg:text-7xl text-[#e4cd99] didot">
                Exclusive Access.
                <br /> Unmatched Influence.
              </p>
            </div>
            <div className="pt-5 md:pt-20">
              <p className="text-base md:text-lg lg:text-3xl didot">
                Join the INNER CIRCLE and shape the
                <br /> future of art and investment.
              </p>
              <p className="text-xs md:text-sm lg:text-xl pt-5 md:pt-20 text-black gill-sans">
                The Inner Circle is a private, invite-only membership designed{" "}
                <br />
                for visionary investors, cultural leaders, and innovators. This{" "}
                <br />
                exclusive group will play a pivotal role in shaping the future
                of <br /> the Premier Art Token. Members gain early access to{" "}
                <br />
                investment opportunities, influence over art acquisitions, and{" "}
                <br />
                invitations to private events that redefine exclusivity..
              </p>
            </div>
            <div className="pt-6 md:pt-10">
              <button
                className={clsx(
                  "text-black border border-white md:text-lg shadow-2xl w-40 h-8 md:h-10 rounded-full gill-sans",
                  styles.gradientButton
                )}
                onClick={handleRedirect}
              >
                Request Invitation
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-20 text-center">
          <p className="text-xl md:text-2xl lg:text-4xl text-[#e4cd99] gill-sans">
            Privileges Reserved for Inner Circle Members
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-11/12 lg:w-3/4 gap-5 md:gap-16 text-justify py-5 md:py-10">
          <div>
            <p className="text-sm md:text-base lg:text-lg text-[#959495] gill-sans">
              <b className="text-white">Early Investment Access:</b>{" "}
              Preferential terms and priority opportunities for Premier Art
              Token acquisitions.
              <br />
              <br />
              <b className="text-white">Exclusive Events:</b> Invitations to
              private unveilings, such as the historic reveal of a 500-year-old
              Renaissance masterpiece in January 2025.
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-lg text-[#959495] gill-sans">
              <b className="text-white">Advisory Committee Influence:</b>{" "}
              Provide input into fine art acquisitions and strategy as part of a
              unique advisory network.
              <br />
              <br />
              <b className="text-white">Legacy Recognition:</b> Founding Members
              will secure their place in this groundbreaking movement, helping
              shape a new frontier in art and wealth creation.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col px-5 py-20 lg:py-40 items-center justify-center w-full bg-no-repeat bg-cover bg-center mt-10"
          style={{
            backgroundImage: "url('/images/latest-landing-page/image-5.png')",
          }}
        >
          <p className="text-2xl md:text-4xl lg:text-6xl text-[#e4cd99] didot">
            Be Part of History.
          </p>
          <p className="text-lg md:text-3xl text-center didot pt-5 md:pt-10">
            <i>
              In January 2025, the Inner Circle will be the first to <br />{" "}
              witness the unveiling of one of the rarest Carrera <br /> Marble
              masterpieces by a renowned Italian <br /> Renaissance master.
              Unseen for 500 years, this piece <br /> will serve as the
              cornerstone of the Premier Art <br /> Token, anchoring its legacy
              and value.
            </i>
          </p>
        </div>
        <div className="flex flex-col items-center py-10 bg-[#c9c4bf] text-black">
          <p className="text-xl md:text-4xl px-5 md:px-0 didot">
            Your Invitation Awaits.
          </p>
          <p className="w-11/12 lg:w-3/4 text-sm md:text-base lg:text-lg gill-sans text-center pt-5 md:pt-10">
            Membership is strictly limited to ensure exclusivity, offering
            unparalleled access to a transformative opportunity. As a leader in
            art, finance, or culture, your vision and influence can help shape
            the foundation of this revolutionary initiative. The Inner Circle is
            more than an investment—it is a community of pioneers committed to
            preserving history, creating wealth, and redefining the future of
            art-backed digital assets.
          </p>
          <div className="pt-6 md:pt-10">
            <button
              className={clsx(
                "text-black border border-white md:text-lg shadow-2xl w-40 h-8 md:h-10 rounded-full gill-sans",
                styles.gradientButton
              )}
              onClick={handleRedirect}
            >
              Request Invitation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InnerCircle;
