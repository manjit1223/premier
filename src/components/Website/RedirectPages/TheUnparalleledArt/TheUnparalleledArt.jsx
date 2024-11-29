"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CountdownTimer from "../../LandingPage/SectionFeaturedArtSlider/CountdownTimer";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const newsArticles = [
  {
    id: 1,
    title: "Fernand Leger",
    description: "“Acrobats (1940/1941 circa)”",
    date: "24 Oct 2021",
    author: "Varun Berry",
    imageSrc: "/images/the-unparalled-art/image-1_blur.jpeg",
  },
  {
    id: 2,
    title: "Veronese",
    description: "“Ritratto dell’arcivesovo Bernardo Surian (1577)”",
    date: "24 Oct 2021",
    author: "Lily Brooks",
    imageSrc: "/images/the-unparalled-art/image-2_blur.jpeg",
  },
  {
    id: 3,
    title: "Salvador Dali",
    description: "“Unicorn” first cast 1984",
    date: "24 Oct 2021",
    author: "William Ray",
    imageSrc: "/images/the-unparalled-art/image-3_blur.jpg",
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

function TheUnparalleledArt() {
  const [token, setToken] = useState(null);
  const reduxToken = Cookies.get("token");
  const selectorToken = useSelector((state) => state.user.token);
  const [date, setDate] = useState("2024-12-02T18:00:00");

  useEffect(() => {
    setToken(reduxToken);
  }, [reduxToken, selectorToken]);

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  if (newsArticles.length === 0) {
    return (
      <div className="px-4 md:px-10 lg:px-24 py-10 text-center">
        <p className="text-4xl md:text-6xl font-bold abril-fatface">
          The Unparalleled Art
        </p>
        <p className="text-white text-lg mt-8">
          No articles available at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 lg:px-24 py-10">
      <div className="mb-8 text-center">
        <p className="text-4xl md:text-6xl font-bold abril-fatface">
          The Unparalleled Art
        </p>
      </div>
      <CountdownTimer targetDate={date} />
      {token ? (
        <p className="py-12"></p>
      ) : (
        <p className="golden-color text-lg md:text-3xl text-center py-12">
          Explore Limitless Artistry. Create an Account
        </p>
      )}
      <div className="flex flex-col gap-8">
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInFromLeft}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <ArticleCard article={newsArticles[2]} />
          <ArticleCard article={newsArticles[1]} />
          <ArticleCard article={newsArticles[2]} />
        </motion.div>
      </div>
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <div className="flex flex-col items-center justify-center w-full border border-white md:w-1/3 rounded-xl p-5">
      <div>
        <Image
          width={300}
          height={200}
          src={article.imageSrc}
          alt={article.title}
          className="rounded-t-lg"
        />
      </div>
      {/* <div className="flex flex-col justify-between items-center pt-4">
        <p className="text-lg text-white font-semibold mb-4">{article.title}</p>
        <p className="text-white mb-4">{article.description}</p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-1/5">
              <Image
                src="/images/landing-page/the-unparalleled-art/Ellipse.png"
                alt={article.title}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-sm text-white">{article.author}</p>
              <p className="text-sm text-white mb-2">{article.date}</p>
            </div>
          </div>
          <Link href={`/the-unparalleled-art/${article.id}`} className="text-black bg-white text-sm px-4 py-2 rounded-lg">
            View
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default TheUnparalleledArt;
