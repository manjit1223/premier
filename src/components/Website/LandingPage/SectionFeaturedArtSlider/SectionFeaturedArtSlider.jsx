"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import CountdownTimer from "./CountdownTimer";

const slides = [
  {
    id: 1,
    isImp: true,
    title: "Grand Unveiling at Art Basel Miami VIP Event",
    date: "02 December 2024",
    imageSrc: "/images/landing-page/section-featured-art-slider/image-2.png",
  },
];

export default function SectionFeaturedArtSlider() {
  const slide = slides[0];
  const [date, setDate] = useState('2024-12-02T18:00:00');

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 px-5 md:px-10">
      <div className="lg:w-1/2 flex flex-col justify-center items-center">
        <motion.div
          className="grid gap-4 md:gap-8 text-center"
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex items-center h-[90px] md:h-[130px]">
            <p
              className={clsx([
                "max-w-xl abril-fatface text-3xl sm:text-4xl golden-color",
              ])}
            >
              {slide.title} 
            </p>
          </div>
          <p className="md:text-xl">{slide.date}</p> 
          <CountdownTimer targetDate={date}/>
        </motion.div>
      </div>

      <div className="lg:w-1/2 flex justify-center relative h-[600px]">
         {/* <Image
          src="/images/landing-page/section-featured-art-slider/background-ellipse.png"
          width={708}
          height={649}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />  */}
        <Link
          className="absolute inset-0 z-10 flex justify-center items-center"
          href="#"
          rel="noopener noreferrer"
        >
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              className="object-contain"
              src={slide.imageSrc} 
              fill
              alt="artwork"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
