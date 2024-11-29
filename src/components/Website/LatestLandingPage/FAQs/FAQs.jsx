"use client";

import React, { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "How does the value of The Premier Art Token rise in value if it is tied to the value of the art in the portfolio?",
      answer:
        "The value the token represents is the insured value not the purchase value. In addition art, especially known, vetted and established art, appreciates over time. As the art in the portfolio appreciates and as more art is added to the collection the value per token will also increase.",
    },
    {
      question: "How will The Premier Art Token be regulated?",
      answer:
        "Premier Token uses the ChinTai.io platform and will be providing the first offerings under US Securities laws under an exemption from registration. Initially, investment will be limited to accredited investors.",
    },
    {
      question: "Will you be able to exchange your tokens for art?",
      answer:
        "The art in Premier’s portfolio is not tied to any specific token and therefore not directly redeemable. Some art dealers may choose to accept The Premier Art Token as payment but it would not be the art in our collection.",
    },
    {
      question: "Will Premier Tokens be Security or Payment Tokens?",
      answer:
        "Currently The Premier Art Token are Security Tokens and are therefore subject to all securities regulation. Premier is working to make TPAT more easily exchangeable so that it may function the same as a stable coin.",
    },
    {
      question:
        "Can you send The Premier Art Token directly to another wallet holder?",
      answer:
        "Upon launch users must use the Chintai platform and can only exchange with other vetted users on the platform. Premier is working to make the TPAT as universally accepted as any stable coin.",
    },
    {
      question:
        "What are the requirements for setting up a wallet to be able to receive and send Security Tokens?",
      answer:
        "Initially only Accredited Investors who have completed and satisfied the onboarding AML and KYC requirements are eligible to purchase and trade TPAT.",
    },
    {
      question: "Where will we be able to see the art in the collection?",
      answer:
        "The works of art in the Premier Art Collection will be visible on the collections portion of Premier.Art to subscribed members. As the works are placed on exhibit their location will be notated with the art profile.",
    },
    {
      question: "How do art owners sell to Premier Art Holdings?",
      answer:
        "If someone is interested in selling their art they should contact Premier Acquisitions, www.Premieracq.com, where they will thoroughly vet the piece and work with Premier Art Holdings curators to see if it is right for the collection.",
    },
    {
      question: "How does the art protect the value of the token?",
      answer:
        "Think of the art in Premier’s portfolio as the gold in Fort Knox, not only does it provide a baseline value in which to evaluate the worth of the token but if the assets are liquidated, security token holders would be entitled to receive a proportional amount of the net after sale.",
    },
  ];

  return (
    <div className="bg-[#88745b] flex justify-center min-h-screen">
      <div className="w-11/12 bg-[#201f22] flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center w-10/12 py-5 lg:py-10 bg-no-repeat bg-cover bg-center md:bg-top"
          style={{
            backgroundImage: "url('/images/latest-landing-page/image-5.png')",
          }}
        >
          <div className="p-5 md:px-10 text-white pt-28 md:pt-32 lg:pt-40">
            <p className="text-4xl md:text-6xl didot mb-6">
              Frequently Asked Questions
            </p>

            {faqs.map((faq, index) => (
              <div key={index} className="faq-item mb-4">
                <div
                  className="cursor-pointer flex justify-between items-center text-xl font-semibold p-4 bg-zinc-900 rounded-md hover:bg-gray-700"
                  onClick={() => toggleAnswer(index)}
                >
                  <p className="text-xl md:text-2xl mt-4 gill-sans">
                    {faq.question}
                  </p>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9660;
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {openIndex === index && (
                    <div className="p-4 mt-2 bg-gray-700 rounded-md text-base">
                      <p className="text-lg gill-sans">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <p className="text-lg gill-sans text-justify">
              *As Premier Art Holdings Ltd. evolves and regulations change FAQs
              will be updated. Answers in FAQs are based on current operations
              and understandings of regulations. Nothing on this website is
              intended as an offering of a security Premier does not solicit
              investors, and the information on this site is for information
              purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
