import React from "react";
import Image from "next/image";
import styles from "./latest-Art_news.module.scss";
import clsx from "clsx";
import { CircleArrowRight } from "lucide-react";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "Deloitte Art Finance Report 2023",
    link: "https://www.deloitte.com/content/dam/assets-zone2/lu/en/docs/services/financial-advisory/2023/art-finance-report-2023.pdf",
    imageSrc: "/images/landing-page/section-latest-news/deloitte.png",
  },
  {
    id: 2,
    title: "The Artprice100© index",
    link: "https://www.artprice.com/artmarketinsight/the-artprice100-index-was-up-1-55-in-2023",
    imageSrc: "/images/landing-page/section-latest-news/artprice.png",
  },
  {
    id: 3,
    title: "Art Basel Art Market Report",
    link: "https://theartmarket.artbasel.com/",
    imageSrc: "/images/landing-page/section-latest-news/art-basel.png",
  },
  {
    id: 4,
    title: "UNESCO G20 Culture Declaration",
    link: "https://www.unesco.org/en/sustainable-development/culture/g20",
    imageSrc: "/images/landing-page/section-latest-news/UNESCO.png",
  },
  {
    id: 5,
    title: "Binance, Physical NFTs",
    link: "https://www.binance.com/en/blog/nft/physical-nfts-bridging-the-gap-between-digital-and-physical-worlds-7460772280213595786",
    imageSrc: "/images/landing-page/section-latest-news/Binance.png",
  },
];

function LatestNews() {
  return (
    <div className="bg-gray-100 px-4 md:px-10 py-10 md:py-10 flex justify-center items-center min-h-screen">
      <div className="w-full bg-white shadow-2xl px-6 md:px-10 py-10 rounded-xl">
        <div className="mb-8 text-left">
          <p className="text-4xl md:text-6xl font-bold text-black abril-fatface">
            News Updates
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  priority
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-4 sm:p-6">
                <div>
                  <p className="text-md sm:text-lg text-black font-semibold mb-2 sm:mb-4">
                    {article.title}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={article.link}
                    target="_blank"
                    className={clsx([
                      styles.btnColor,
                      "text-white text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2",
                    ])}
                  >
                    Read More <CircleArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
