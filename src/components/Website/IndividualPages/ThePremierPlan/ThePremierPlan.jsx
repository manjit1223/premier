import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./the-premier-plan.module.scss";
import clsx from "clsx";

function ThePremierPlan() {
  return (
    <div className="flex flex-col p-5 md:px-10">
      <div>
        <p className="text-4xl md:text-6xl font-bold abril-fatface">
          The Premier Plan
        </p>
        <br />
        <br />
        <div className="flex flex-col lg:flex-row">
          <div className="w-full">
            <p className="text-2xl text-justify text-[#FFCA38]">
              The World&apos;s Finest Art + Tokenization = Security & Liquidity
              = TPAT
            </p>
            <br />
            <p className="text-lg md:text-xl text-justify">
              Premier Art Holding Ltd.
              <br />
              <br />
              Bringing the Security of the World&apos;s Finest Art to the
              Blockchain&apos;s Leading Token
              <br />
              <br />
              Premier Art Holdings Ltd. (PAHL) curates an exceptional collection
              of blue-chip and masterwork art that backs the foundation of The
              Premier Art Token (TPAT). Dedicated to more than just amassing a
              world-class collection, Premier is committed to liberating art
              from private vaults, sharing these masterpieces with the world to
              inspire humanity for generations to come.
              <br />
              <br />
              "When the opportunity arose to combine the undeniable future of
              tokenization with the enduring beauty and value of the
              world&apos;s finest art, I knew I had to help make it a reality."
              <br />— Robert A. Johnston, Chief Executive Officer.
              <br />
              <br />
              Pioneering the Future of Art and Investment Premier Art Holdings
              Ltd. offers a straightforward yet transformative value
              proposition: a token backed by a carefully curated collection of
              high-end, vetted, and established artwork. TPAT is rooted in real,
              tangible value—offering investors security and stability in a
              rapidly evolving financial landscape.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:items-start p-8">
            <Image
              className={clsx(
                "object-contain rounded-full",
                styles.shiningEffect
              )}
              src="/images/landing-page/section-the-premier-plan/logo.png"
              width={415}
              height={415}
              alt="centered art image"
              priority
            />
          </div>
        </div>
      </div>
      <p className="text-lg md:text-xl text-justify">
        Although a new company, Premier Art Holdings Ltd. has spent the last
        five years refining its model in collaboration with art owners,
        galleries, and blockchain innovators. In partnership with Chintai.io—a
        leader in bringing security tokens to market—Premier is launching The
        Premier Art Token using exemptions from US securities registration and
        positioning TPAT to take advantage of what promises to be a favorable
        regulatory environment in the USA.
        <br />
        <br />
        For now, The Premier Art Security Token will be available exclusively to
        accredited investors, marking the first step in making fine art
        investment more accessible.
        <br />
        <br />
        A Mission Rooted in Stability and Accessibility Premier&apos;s mission
        is to stabilize tokenized markets by bridging them with the timeless,
        unparalleled value of fine art. By backing its token with the most
        enduring Real World Asset (RWA)—high-end art—Premier ensures resistance
        to the volatility that plagues many cryptocurrencies. This initiation
        not only redefines the role of digital assets but also embraces the
        responsibility of preserving and showcasing the masterpieces it
        acquires. Collaborating with museums and galleries worldwide, Premier
        ensures these works are displayed and appreciated, fulfilling the
        artists&apos; original intent to inspire humanity, rather than languish
        in private vaults.
        <br />
        <br />A Vision of Collective Cultural Enrichment
        <br />
        <br />
        The Premier Art Token (TPAT): Accessible, Equitable, Liquid, and Secure
        <br />
        <br />
        Premier Art Holdings Ltd. envisions curating, preserving, and sharing
        the largest collection of masterpiece art while empowering everyone to
        benefit from and trade in these cultural treasures. By combining
        tokenization, fractional ownership, and rigorous compliance, Premier
        transforms how art is valued and accessed.
        <br />
        <br />
        TPAT represents the intersection of art and blockchain, allowing
        investors to acquire fractional shares in an elite art collection. This
        innovation brings liquidity and global access to a market once reserved
        for the ultra-wealthy. Through its partnership with Chintai, TPAT offers
        a secure, regulated, and scalable way to diversify portfolios with fine
        art investments.
        <br />
      </p>
      <br />
      <p className="text-lg md:text-xl text-justify">
        Want to know more,{" "}
        <Link
          href="/contact-us"
          className="text-lg md:text-xl text-justify text-[#FFCA38] underline"
        >
          Contact us
        </Link>
      </p>
      <br />
      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        <div>
          <p className="text-2xl text-justify text-[#FFCA38]">
            The Premier Art Token TPAT
          </p>
          <p className="text-lg md:text-xl text-justify">
            The Premier Art Token is the culmination of tokenization, fractional
            ownership, and compliance trends in the art world. By leveraging the
            blockchain, The Premier Art Token enables users to invest in
            fractional shares of a high-value art collection, offering liquidity
            and global access to a previously exclusive market. This makes art
            more accessible to a wider range of investors, providing new
            opportunities for portfolio diversification. Through its partnership
            with Chintai, Premier Art Holdings Ltd. offers a secure, scalable,
            and regulated way to invest in fine art, backed by industry trends
            in digital asset management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThePremierPlan;
