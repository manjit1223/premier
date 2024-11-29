import Link from "next/link";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-5 md:px-10 bg-[#636363]">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="flex gap-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61565502850004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook text-xl"></i>
          </Link>
          <Link
            href="https://www.linkedin.com/company/premier-art-holdings"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
          </Link>
          <Link
            href="https://www.instagram.com/premierarthonldings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-xl"></i>
          </Link>
          <Link
            href="https://x.com/premier49036"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter text-xl"></i>
          </Link>
        </div>

        <div className="flex gap-2 lg:gap-4 text-center">
          <Link href="/terms-and-condition">T & C</Link>
          <span className="text-xl font-bold"> | </span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className="text-xl font-bold"> | </span>
          <Link href="/faqs">FAQs</Link>
        </div>
      </div>
      <p className="text-center mt-4">
        <i className="fas fa-copyright"></i> {year} Premier Art Holdings Ltd.
      </p>
      <p className="text-center mt-4">A British Virgin Islands Company</p>
    </footer>
  );
}
