"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const images = [
  {
    src: "/images/landing-page/section-latest-news/deloitte.png",
    name: "Deloitte Art Finance Report 2023",
    link: "https://www.deloitte.com/content/dam/assets-zone2/lu/en/docs/services/financial-advisory/2023/art-finance-report-2023.pdf",
  },

  {
    src: "/images/landing-page/section-latest-news/grand-unveiling.png",
    name: "Grand Unveiling at Art Basel Miami",
    link: "#",
  },
  {
    src: "/images/landing-page/section-latest-news/artprice.png",
    name: "The Artprice100© index",
    link: "https://www.artprice.com/artmarketinsight/the-artprice100-index-was-up-1-55-in-2023",
  },
  {
    src: "/images/landing-page/section-latest-news/art-basel.png",
    name: "Art Basel Art Market Report",
    link: "https://theartmarket.artbasel.com/",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImagesToShow(1);
      } else {
        setImagesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const autoSlide = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => {
  //     clearInterval(autoSlide);
  //   };
  // }, [currentIndex]);

  const displayedImages = [];
  for (let i = 0; i < imagesToShow; i++) {
    displayedImages.push(images[(currentIndex + i) % images.length]);
  }

  return (
    <div className="flex">
      <button
        onClick={prevSlide}
        className="text-white w-1/12 text-3xl md:text-5xl"
      >
        &lt;
      </button>
      <div className="flex justify-center w-5/6 gap-4">
        {displayedImages.map((image, index) => (
          <div
            className={clsx("lg:w-2/6 md:h-[400px] lg:h-[500px] bg-white", {
              "flex justify-center": imagesToShow === 1,
            })}
            key={index}
          >
            <Link href={image.link} rel="noopener noreferrer" target="_blank">
              <Image
                width={303}
                height={218}
                src={image.src}
                alt={image.name}
                className="w-full h-[300px] lg:h-[400px] p-4"
              />
              <p className="text-black text-xl bg-yellow-300 p-4 h-[100px]">
                {image.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="text-white w-1/12 text-3xl md:text-5xl"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
