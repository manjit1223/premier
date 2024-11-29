"use client";

import React, { useRef } from "react";
import { MoveDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { delay, motion, useInView } from "framer-motion";

function SectionThePremierPlan() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const textLeftAnimation = {
    initial: { opacity: 0, x: -500 },
    animate: { opacity: 1, x: 0 },
  };

  const textRightAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const imageBottomAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col" id="thePremierPlan" ref={ref}>
      <div className="pl-5 md:pl-10 grid">
        <motion.p
          className="abril-fatface text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center md:text-start"
          initial="initial"
          animate={inView ? "animate" : "initial"}
          variants={textLeftAnimation}
          transition={{ duration: 2, delay: 0.4 }}
        >
          The World&apos;s Finest Art
        </motion.p>
        <div className="flex flex-col md:flex-row justify-between items-center overflow-hidden">
          <div className="flex flex-col md:w-1/3">
            <motion.p
              className="text-5xl md:text-5xl lg:text-9xl text-center"
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={textLeftAnimation}
              transition={{ duration: 2, delay: 0.4 }}
            >
              +
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl golden-color abril-fatface text-center"
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={textLeftAnimation}
              transition={{ duration: 2, delay: 0.4 }}
            >
              Tokenization
            </motion.p>
          </div>
          <p className="text-5xl md:text-5xl lg:text-9xl text-center md:-mt-[2rem] lg:-mt-[4rem]">=</p>
          <motion.p
            className="w-full md:w-5/12 text-2xl md:text-3xl lg:text-4xl bg-[#699475] abril-fatface px-1 py-6 text-center md:-mt-[1rem] lg:-mt-[3rem]"
            initial="initial"
            animate={inView ? "animate" : "initial"}
            variants={textRightAnimation}
            transition={{ duration: 3, delay: 0.5 }}
          >
            Security & Liquidity
          </motion.p>
        </div>
        <div className="flex justify-end p-4 md:pb-6 lg:pb-10">
          <MoveDown className="w-full md:w-2/5" size={80} />
        </div>
      </div>
      <div className="">
        <p className="hidden md:block md:absolute w-[97.3%] md:text-5xl text-black bg-white abril-fatface p-5 md:px-40 mt-14">
          TPAT
        </p>
        <div className="flex flex-col md:flex-row-reverse px-5 md:px-10 gap-8">
          <div className="relative md:w-2/5 flex justify-center">
            <motion.div
              className="object-contain md:ml-10"
              initial="initial"
              animate={inView ? "animate" : "initial"}
              variants={imageBottomAnimation}
              transition={{ duration: 2, delay: 0.4 }}
            >
              <Image
                src="/images/landing-page/section-the-premier-plan/token.png"
                width={415}
                height={680}
                alt="centered art image"
              />
            </motion.div>
          </div>
          <p className="md:hidden text-black bg-white abril-fatface text-center py-2 text-2xl">
            TPAT
          </p>
          <div className="flex flex-col gap-8 w-full md:w-3/5 md:justify-end lg:justify-center">
            <p className="md:text-xl lg:text-base xl:text-xl text-justify">
              Invest in Fine Art—As Simple as Buying Stocks We&apos;ve tokenized
              multi-million-dollar masterpieces, creating a diversified,
              S&P-style fund of fine art. Now you can own fractional shares in
              blue-chip art through our platform, with the simplicity of trading
              stocks. Accessible, transparent, and secure—fine art investing is
              no longer reserved for the elite.
            </p>
            <div className="text-center md:text-start">
              <Link
                href="/the-premier-plan"
                className="bg-[#FFCA38] text-black md:text-xl px-5 py-3"
              >
                Read more...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThePremierPlan;
