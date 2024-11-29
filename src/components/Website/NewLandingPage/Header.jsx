import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  return (
    <header className="w-full text-white p-5">
      <div className="flex flex-col md:flex-row lg:px-5">
        <div className="md:absolute flex-shrink-0">
          <Image
            src="/images/landing-page/logo.png"
            width={100}
            height={100}
            alt="logo"
            className="cursor-pointer"
            onClick={() => router.push("/")}
            priority
          />
        </div>

        <div className="hidden md:block flex-grow text-center">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lora">
            Premier Art Holdings Ltd.
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-2 lora !m-0 !p-0">
            Bringing the Security of the World's Finest Art to
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-2 lora">
            the Blockchain's Finest Token
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl lora">
            Be a Part of a Collection and Token Like No Other
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
