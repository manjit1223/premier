"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const newsArticles = [
  {
    id: 1,
    title: "Paris Painting Week",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
    date: "24 Oct 2021",
    author: "Varun Berry",
    imageSrc: "/images/the-unparalled-art/image-1.png",
  },
  {
    id: 2,
    title: "Paris Painting Week",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
    date: "24 Oct 2021",
    author: "Lily Brooks",
    imageSrc: "/images/the-unparalled-art/image-2.jpg",
  },
  {
    id: 3,
    title: "Paris Painting Week",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
    date: "24 Oct 2021",
    author: "William Ray",
    imageSrc: "/images/the-unparalled-art/image-3.png",
  },
  {
    id: 4,
    title: "Paris Painting Week",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
    date: "24 Oct 2021",
    author: "William Ray",
    imageSrc: "/images/landing-page/the-unparalleled-art/image-4.png",
  },
  {
    id: 5,
    title: "Paris Painting Week",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...",
    date: "24 Oct 2021",
    author: "William Ray",
    imageSrc: "/images/landing-page/the-unparalleled-art/image-3.png",
  },
];

function TheUnparalleledArtDetails() {
  const pathname = usePathname();

  const id = parseInt(pathname.split("/").pop(), 10);
  const art = newsArticles.find((article) => article.id === id);

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
        className="max-w-lg"
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

export default TheUnparalleledArtDetails;
