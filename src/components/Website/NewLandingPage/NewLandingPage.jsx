"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import styles from "./new-landing-page.module.scss";
import clsx from "clsx";

const artists = [
  "Michelangelo",
  "Dali",
  "Veronese",
  "Boccioni",
  "Banksy",
  "Donatello",
  "Warhol",
  "da Vinci",
  "Leger",
  "Picasso",
  "Raphael",
];

function NewLandingPage() {
  const router = useRouter();
  const [currentArtist, setCurrentArtist] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArtist((prev) => (prev + 1) % artists.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeInOut = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 1.2, transition: { duration: 1 } },
  };

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/images/new-landing-page/Media.jpeg"
          as="image"
        />
      </Head>
      <div className="flex flex-col">
        <Header />
        <main
          className="flex flex-col items-center justify-between bg-cover bg-center min-h-screen"
          style={{
            backgroundImage: "url('/images/new-landing-page/Media.jpeg')",
          }}
        >
          <div className="md:hidden text-center p-2">
            <p className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lora">
              Premier Art Holdings Ltd.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-2 lora !m-0 !p-0">
              Bringing the Security of the World's Finest Art to
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-2 lora">
              the Blockchain's Finest Token
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl lora">
              Be a Part of a Collection and Token Like No Other
            </p>
          </div>
          <div className="flex-grow flex items-center justify-center text-center py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={artists[currentArtist]}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInOut}
                className="absolute"
              >
                <p className="text-center text-5xl md:text-8xl text-white sedan-regular-italic">
                  {artists[currentArtist]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-end md:pb-10">
            <div className="flex items-center justify-center w-full">
              <div
                className={clsx(
                  "relative border-2 rounded md:w-40 shadow-2xl p-4 overflow-hidden group hover:border-transparent transition-all duration-1000 cursor-pointer",
                  styles.gradientBorder
                )}
                onClick={() => router.push("/home")}
              >
                <p className="text-xl text-center text-white sedan-regular-italic">
                  Learn More
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 pt-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 sedan-regular-italic">
                Stability. Accessibility. Equitable Opportunity. Liquidity.
              </p>
              <div className="border-2 border-white rounded shadow-2xl p-4">
                <p className="text-xs md:text-sm font-bold text-white">
                  *Not all the artists listed are a part of the collection yet.
                  Many are under contract and negotiation.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default NewLandingPage;
