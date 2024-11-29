"use client";

import React from "react";
import ContactusForm from "./ContactusForm";

function Contactus() {
  return (
    <div className="bg-[#88745b] flex justify-center">
      <div className="w-11/12 bg-[#201f22] flex flex-col items-center">
        <div
          className="flex flex-col items-center w-10/12 py-5 lg:py-10 bg-no-repeat bg-cover bg-center lg:bg-top"
          style={{
            backgroundImage: "url('/images/latest-landing-page/image-7.png')",
          }}
        >
          <ContactusForm />
        </div>
      </div>
    </div>
  );
}

export default Contactus;
