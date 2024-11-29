"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const slides = [
  {
    id: 1,
    title: "Grand Unveiling at Art Basel Miami VIP Event",
    imageSrc: "/images/landing-page/section-featured-art-slider/image-2.png",
    description: `This piece has not been publicly exhibited since the powerful Roman Frangipane family exhibited it 500 years ago

    Be one of the first to welcome this Masterpiece back into the World. Sculpted by one of the greatest Italian Renaissance Masters and touted as the most significant rediscovery in the past 500 years.
    
    The previous owners turned down offers by private collectors in order to commit it to The Premier Art Token collection in order to preserve the piece’s legacy and maximize their return on investment.
    
    A piece of art this valuable should not be owned by a single investor or family but by a collective committed to sharing it with the world.`,
  },
  {
    id: 2,
    title: "“Ritratto dell’arcivesovo Bernardo Surian (1577)”",
    imageSrc: "/images/landing-page/section-featured-art-slider/image-1.jpg",
    description: "",
  },
  {
    id: 3,
    title: "“Unicorn” first cast 1984",
    imageSrc: "/images/landing-page/section-featured-art-slider/image-3.png",
    description: "",
  },
];

function ArtDetail() {
  const pathname = usePathname();

  const id = parseInt(pathname.split("/").pop(), 10);
  const art = slides.find((slide) => slide.id === id);

  const descriptionWithLineBreaks = art.description
    .split("\n")
    .map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white gap-10 p-5 md:px-10">
      <Image
        src={art.imageSrc}
        width={415}
        height={680}
        alt={art.title}
      />
      <div className="w-full md:w-1/2 lg:w-3/4">
        <p className="text-3xl md:text-5xl lg:text-7xl text-black euphoria-script border-b-2 border-[#C19B16] mb-4">
          {art.title}
        </p>
        <p className="text-base md:text-lg lg:text-xl text-justify text-black mb-6 w-full md:w-11/12">
          {descriptionWithLineBreaks}
        </p>
      </div>
    </div>
  );
}

export default ArtDetail;
