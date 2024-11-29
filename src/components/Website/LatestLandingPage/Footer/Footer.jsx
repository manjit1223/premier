import Link from "next/link";
import React from "react";
import { Copyright } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-5 md:px-10 lg:px-20 bg-[#88745b] text-black">
      <div className="flex flex-col gap-2 md:flex-row md:gap-4 items-center justify-between">
        <div className="flex gap-4 text-center justify-center md:justify-start w-full md:w-1/5">
          <Link
            href="https://www.facebook.com/profile.php?id=61565502850004"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook text-xl"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/company/premier-art-holdings"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
          </Link>
          <Link
            href="https://www.instagram.com/premierarthonldings/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram text-xl"></i>
          </Link>
          <Link
            href="https://x.com/premier49036"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
          >
            <i className="fa-brands fa-x-twitter text-xl"></i>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg flex items-center gill-sans">
            <Copyright className="mr-1" /> {year} Premier Art Holdings Ltd.
          </p>
          <p className="text-base md:text-lg gill-sans">
            A British Virgin Islands Company
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 text-center w-full md:w-auto">
          <Link
            href="/latest-landing-page/terms-and-condition"
            className="text-base md:text-lg gill-sans"
          >
            Terms & Conditions
          </Link>
          <span className="hidden lg:inline text-xl font-bold"> | </span>
          <Link
            href="/latest-landing-page/privacy-policy"
            className="text-base md:text-lg gill-sans"
          >
            Privacy Policy
          </Link>
          <span className="hidden lg:inline text-xl font-bold"> | </span>
          <Link href="/latest-landing-page/faqs" className="text-base md:text-lg gill-sans">
            FAQs
          </Link>
        </div>
      </div>
    </footer>
  );
}
