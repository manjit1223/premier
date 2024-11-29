"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Herbert L. Terreri",
      role: "Chief Compliance Officer",
      imageUrl: "/images/landing-page/our-team/herbert.png",
    },
    {
      id: 2,
      name: "Robert A. Johnston",
      role: "Chief Executive Officer",
      imageUrl: "/images/landing-page/our-team/bob.png",
    },
    {
      id: 3,
      name: "Justin Fien",
      role: "Financial Strategies Officer",
      imageUrl: "/images/landing-page/our-team/justin-fien.png",
    },
    {
      id: 4,
      name: "Isaiah Price",
      role: "Chief Sustainability and Communications Officer",
      imageUrl: "/images/landing-page/our-team/isaiah-profile-pic.JPG",
    },
    {
      id: 5,
      name: "James Frey",
      role: "Insurance Compliance Officer",
      imageUrl: "/images/landing-page/our-team/james.png",
    },
  ];

  const firstRow = teamMembers.slice(0, 3);
  const secondRow = teamMembers.slice(3);

  return (
    <div className="flex flex-col items-center gap-8 bg-black px-4 py-10">
      <h2 className="text-4xl md:text-6xl font-bold abril-fatface text-center">
        Meet Our Dedicated Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 w-full">
        {firstRow.map((member, index) => (
          <Link
            href={`/our-team/${member.id}`}
            key={index}
            className="flex flex-col items-center text-center"
          >
            <div className="w-56 h-56 lg:w-[300px] lg:h-[300px] overflow-hidden rounded-full">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold abril-fatface text-white">
              {member.name}
            </p>
            <p className="text-sm text-gray-400">{member.role}</p>
          </Link>
        ))}
      </div>

      {secondRow.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl mt-8">
          {secondRow.map((member, index) => (
            <Link
              href={`/our-team/${member.id}`}
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-56 h-56 lg:w-[300px] lg:h-[300px] overflow-hidden rounded-full">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold abril-fatface text-white">
                {member.name}
              </p>
              <p className="text-sm text-gray-400">{member.role}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default OurTeam;
