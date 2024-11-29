"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Grand Unveiling at Art Basel Miami VIP Event",
    date: "On view Through 15 June 2024",
    imageSrc: "/images/landing-page/section-featured-art-slider/image-2.png",
    description: "Experience a grand unveiling like no other...",
  },
  {
    id: 2,
    title: "“Ritratto dell’arcivesovo Bernardo Surian (1577)”",
    date: "On view Through 06 Dec 2024",
    imageSrc: "/images/landing-page/section-featured-art-slider/image-1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 3,
    title: "“Unicorn” first cast 1984",
    date: "On view Through 10 Jan 2025",
    imageSrc: "/images/landing-page/section-featured-art-slider/image-3.png",
    description: "The Night Watch is an iconic 17th-century masterpiece...",
  },
];

function ArtDetail() {
  const [openSection, setOpenSection] = useState(null);
  const pathname = usePathname();

  const id = parseInt(pathname.split("/").pop(), 10);
  const art = slides.find((slide) => slide.id === id);

  if (!art) return <p>Artwork not found</p>;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white gap-6 md:gap-10 lg:gap-20 p-4 md:p-8 lg:p-12">
      <Image
        src={art.imageSrc}
        width={415}
        height={680}
        className="rounded-xl w-full max-w-xs md:max-w-md lg:max-w-lg"
        alt={art.title}
      />
      <div className="w-full md:w-1/2 lg:w-3/4">
        <p className="text-3xl md:text-5xl lg:text-7xl text-[#636363] euphoria-script border-b-2 border-[#C19B16] mb-4">
          {art.title}
        </p>
        <p className="text-base md:text-lg lg:text-xl text-justify text-[#636363] mb-6 w-full md:w-11/12">
          {art.description}
        </p>
        <p className="text-lg md:text-xl font-semibold text-black mb-4 border-b-2 border-black pb-2">
          Categories
        </p>
        <div>
          <button
            onClick={() => toggleSection("size")}
            className="w-full flex justify-between items-center text-black py-3 md:py-4 border-b border-[#636363] text-left focus:outline-none"
          >
            <span>Size</span>
            <span>{openSection === "size" ? <ChevronUp /> : <ChevronDown />}</span>
          </button>
          {openSection === "size" && (
            <div className="pl-4 py-2">
              <p className="text-sm md:text-base text-black">Content for Size</p>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => toggleSection("medium")}
            className="w-full flex justify-between items-center text-black py-3 md:py-4 border-b border-[#636363] text-left focus:outline-none"
          >
            <span>Medium</span>
            <span>{openSection === "medium" ? <ChevronUp /> : <ChevronDown />}</span>
          </button>
          {openSection === "medium" && (
            <div className="pl-4 py-2">
              <p className="text-sm md:text-base text-black">Content for Medium</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtDetail;
