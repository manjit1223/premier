"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const teamMembers = [
  {
    id: 1,
    name: "Herbert L. Terreri",
    role: "Chief Compliance Officer",
    imageUrl: "/images/landing-page/our-team/herbert.png",
    description:
      "Bert is a California attorney, whose practice includes advising start-ups and established companies in transactions,regulatory compliance, and litigation. Bert attended UC College of the Law, San Francisco, and has over 30 years of experience working with numerous companies, large and small, in formation, acquisitions and strategic planning. Bert brings the experience gained as a trial attorney to transactional work, and works tirelessly to find solutions to implement creative company visions within legal and regulatory boundaries, and to anticipate and respond to a changing regulatory environment. Bert's experience and passion makes him ideally suited to help Premier Art Holdings Ltd. navigate and trailblaze a new path forward, ushering in a new era in the World of Digital Currencies.",
    quote:
      "“The Premier vision goes beyond the creation of a simple security token backed by fine art. Premier's long-term vision to create a stable, art backed, transactional token may not be possible in the current regulatory environment, but Premier is poised for innovation with, both, legal and technological partners around the globe. I expect Premier will be a leader as the landscape around cryptocurrencies, securities, and transnational transactions continues to evolve.”",
  },
  {
    id: 2,
    name: "Robert A. Johnston",
    role: "Chief Executive Officer",
    imageUrl: "/images/landing-page/our-team/bob.png",
    description:
      "Bob is a business innovator who has built and has been leading a diverse portfolio of companies for over 30 years. His passion, vision and experience is instrumental in getting Premier to this pivotal moment. Bob is excited for the new challenge of bringing The Premier Token to the world.",
    quote:
      "“When the opportunity came to get involved in a platform that combines the undeniable future of digital currency with the beauty and value of the worlds finest art, I just had to be apart of making it a reality”.",
  },
  {
    id: 3,
    name: "Justin Fien",
    role: "Financial Strategies Officer",
    imageUrl: "/images/landing-page/our-team/justin-fien.png",
    description:
      "Justin Fien has been an M&A advisor and fund manager with 300M+ in assets under management and several billion dollars in international deal execution experience for a wide range of companies. He has over 15 years of experience working with and for ultra-high net worth individuals, family offices, corporations, and heads of state around the globe. Justin's core competencies include managing the affairs for complex international business operations, project underwriting, negotiation of angel and venture financing transactions and Level III enhanced due diligence and investigation services.",
    quote: "",
  },
  {
    id: 4,
    name: "Isaiah Price",
    role: "Chief Sustainability and Communications Officer",
    imageUrl: "/images/landing-page/our-team/isaiah-profile-pic.JPG",
    description:
      "Isaiah is driven by a passion to understand what drives human behavior and decision making. He brings his passion and understanding of diverse cultures to Premier's communications strategy and to ensure business practices have the greatest lasting positive impact on society.",
    quote:
      "“I am honored and humbled to be able to bring my passion and vision to Premier as we spearhead this monumental paradigm shift in both Digital Currencies and the Art world.”",
  },
  {
    id: 5,
    name: "James Frey",
    role: "Insurance Compliance Officer",
    imageUrl: "/images/landing-page/our-team/james.png",
    description:
      "Jim is no stranger to supervising multimillion-dollar insurance portfolios. A graduate of Washington State University, where he was a scholarship athlete, Jim excelled as a lender in retail banking, then served as a territory sales manager for a multinational corporation before transitioning into the insurance industry as a commercial broker. Along with his spouse, he runs their own retail insurance brokerage, insuring million-dollar pieces of art with companies like Lloyd’s of London. Jim is also a licensed insurance instructor and is proud to be part of Premier Art Holdings Ltd., where he is bringing the historical and social aspects of The World’s Greatest Art to the world of RWA-backed digital currency. Successful insurance underwriting is all about managing risk. The Premier Art Token, backed by the works of history’s greatest Masters of the Art world, makes for the best security in the new digital currency age.",
    quote:
      "“Successful insurance underwriting is all about managing risk. The Premier Art Token, backed by the works of history’s greatest Masters of the Art world, offers the best security in the new digital currency age.”",
  },
];

function OurTeamMemberPage() {
  const pathname = usePathname();

  const id = parseInt(pathname.split("/").pop(), 10);
  const art = teamMembers.find((member) => member.id === id);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 md:gap-10 lg:gap-20 p-4 md:p-8 lg:p-12">
      <Image
        src={art.imageUrl}
        width={415}
        height={680}
        className="rounded-xl w-full md:w-1/2 lg:max-w-lg"
        alt={art.name}
        priority
      />
      <div className="w-full lg:w-3/4">
        <p className="text-3xl md:text-5xl lg:text-7xl text-white euphoria-script mb-2">
          {art.name}
        </p>
        <p className="text-3xl border-b-2 border-[#C19B16] mb-4">{art.role}</p>
        <p className="text-base md:text-lg lg:text-xl text-justify text-white mb-6 w-full md:w-11/12">
          {art.description}
          <br />
          <br />
          {art.quote}
        </p>
      </div>
    </div>
  );
}

export default OurTeamMemberPage;
