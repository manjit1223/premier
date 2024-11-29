"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function SectionAccessibilityAndEquitableOpportunity() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between overflow-hidden"
      id="accessibility"
    >
      <motion.div
        className="flex flex-col md:w-1/3 justify-start"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <div className="w-[95vw] md:w-[40vw] h-[100px] md:h-[200px] bg-[#555555]"></div>
        <div className="px-5 md:px-10 mt-5 md:mt-20 break-words text-center md:text-left">
          <p className="abril-fatface text-3xl lg:text-5xl">Accessibility</p>
          <br />
          <p className="lg:text-xl">As simple as buying stocks</p>
        </div>
      </motion.div>

      <Link
        href="/accessibility"
        className="flex md:w-1/3 justify-center items-center p-5 z-[1]"
      >
        <Image
          className="w-full"
          src="/images/landing-page/section-accessibility-and-equitable-opportunity/banner.png"
          width={406}
          height={541}
          alt="centered art image"
        />
      </Link>

      <motion.div
        className="flex flex-col md:w-1/3 justify-end items-end"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromRight}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <div className="px-5 md:px-10 mb-5 md:mb-20 break-words w-full text-center md:text-left">
          <p className="abril-fatface text-3xl lg:text-5xl">
            Equitable Opportunity
          </p>
          <br />
          <p className="lg:text-xl">
            You now has access to the same store of value as the Ultra Wealthy
          </p>
        </div>
        <div className="w-[95vw] md:w-[40vw] h-[100px] md:h-[200px] bg-[#555555] md:-ml-[6vw]"></div>
      </motion.div>
    </div>
  );
}

export default SectionAccessibilityAndEquitableOpportunity;
