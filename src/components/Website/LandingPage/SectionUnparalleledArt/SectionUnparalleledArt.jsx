"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function SectionUnparalleledArt() {
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Link
      href="/the-unparalleled-art"
      className="flex flex-col md:flex-row bg-white p-5 md:px-10 text-black gap-8"
      id="theUnparalleledArt"
    >
      <div className="md:w-4/6 flex flex-col justify-center gap-8">
        <p className="abril-fatface text-3xl md:text-5xl">
          The Unparalleled Art
        </p>
        <p className="md:text-xl text-justify">
          For what will be the world&apos;s greatest Art Portfolio, not just any
          art will do. Only the World&apos;s Finest Art with secured provenance
          and a track record of value appreciation will be considered to back
          The Premier Art Token. <br />
          <br />
          No Bananas on a Wall or NFT&apos;s Here
          <br />
          New pieces are continually being added to this Historic Collection and
          bridging their value to TPAT holders. Explore the collection and sign
          up for updates on events, new art arrivals, and upcoming exhibitions.
        </p>
        <div className="text-center md:text-start">
          <button className="bg-[#D9D9D9] p-5">Explore the Collections</button>
        </div>
      </div>
      <div className="flex md:w-2/6 justify-end overflow-hidden">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full"
        >
          <Image
            className="w-full"
            src={`/images/landing-page/section-unparalleled-art/art_blur.jpeg`}
            width={415}
            height={680}
            alt=""
          />
        </motion.div>
      </div>
    </Link>
  );
}

export default SectionUnparalleledArt;
