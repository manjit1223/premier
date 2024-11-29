import React from "react";
import ContactUsForm from "./ContactUsForm";

function Contactus() {
  return (
    <div className="flex flex-col items-center md:gap-4">
      <div>
        <p className="text-4xl md:text-6xl font-bold abril-fatface">
          Stay in the Know
        </p>
      </div>
      <ContactUsForm />
    </div>
  );
}

export default Contactus;
