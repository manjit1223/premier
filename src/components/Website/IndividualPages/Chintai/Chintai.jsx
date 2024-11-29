import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./chintai.module.scss";
import clsx from "clsx";

function Chintai() {
  return (
    <div className="flex flex-col items-center p-4 md:p-5 md:px-10 w-full">
      <div className={clsx("flex justify-center items-center rounded-lg md:w-1/2 h-52", styles.shiningEffect)}>
        <Image
          className="object-contain"
          src="/images/landing-page/our-team/chintai.png"
          width={415}
          height={680}
          alt="centered art image"
          priority
        />
      </div>
      <br />
      <br />
      <p className="text-3xl md:text-4xl text-justify abril-fatface">
        Technology Partner
      </p>
      <br />
      <p className="text-lg md:text-xl">
      To know more {""}
        <Link
          href="https://chintai.io/"
          className="text-[#FFCA38]"
          target="_blank"
        >
          Click Here
        </Link>
      </p>
      <p className="text-lg md:text-xl md:w-3/4 text-center">
        Chintai aims to build a fair, transparent, inclusive financial system.
        We provide financial companies and SMEs with blockchain infrastructure
        for the full trade life cycle of real world digital assets. Using our
        Blockchain-Platform-as-a-Service product suite, you have the tools to
        customize your digital asset product to meet your unique business
        objectives.
        <br />
        <br />
        "Chintai is proud to support the visionaries at Premier Art Holdings
        Ltd. and The Premier Art Token on their journey to disrupt and
        revolutionize private markets in the Fine Art and Digital Asset space.
        By teaming up together, we're creating the first asset backed digital
        token that gives you access to owning tokens that collectively own a
        collection of the highest quality pieces of fine art globally".
      </p>
      <br />
      <p className="text-xl md:text-2xl">
        - Ryan Bethem, Chintai Founder & COO
      </p>
    </div>
  );
}

export default Chintai;
