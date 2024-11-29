import React from "react";
import Link from "next/link";

function TermsAndCondition() {
  return (
    <div className="bg-[#88745b] flex justify-center min-h-screen">
      <div className="w-11/12 bg-[#201f22] flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center w-10/12 py-5 lg:py-10 bg-no-repeat bg-cover bg-center md:bg-top"
          style={{
            backgroundImage: "url('/images/latest-landing-page/image-5.png')",
          }}
        >
          <div className="p-5 md:px-10 pt-28 md:pt-32 lg:pt-40">
            <p className="text-4xl md:text-6xl didot">Terms and Conditions</p>
            <br />
            <p className="text-lg gill-sans">
              Please read these Terms and Conditions carefully before using the
              premier.art website operated by Premier Art Holdings Ltd.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              1. Acceptance of Terms
            </p>
            <p className="text-lg gill-sans">
              By accessing or using our Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              2. Modifications to Terms
            </p>
            <p className="text-lg gill-sans">
              We reserve the right to modify or replace these Terms at any time.
              Any changes will be effective immediately upon posting the revised
              version. It is your responsibility to review the Terms
              periodically for updates.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">3. Accounts</p>
            <p className="text-lg gill-sans">
              You must provide accurate and complete information when creating
              an account. You are responsible for maintaining the
              confidentiality of your account and password. You must notify us
              immediately of any breach of security or unauthorized use of your
              account.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              4. Use of the Service
            </p>
            <p className="text-lg gill-sans">You agree not to:</p>
            <ul className="list-disc pl-5 text-lg gill-sans">
              <li>
                Use the Service for unlawful purposes or in violation of any
                applicable laws.
              </li>
              <li>
                Post or transmit any harmful, threatening, or offensive
                material.
              </li>
              <li>
                Attempt to interfere with or disrupt the Service or its servers.
              </li>
            </ul>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              5. Intellectual Property
            </p>
            <p className="text-lg gill-sans">
              The Service and its original content, features, and functionality
              are owned by Premier Art Holdings Ltd and are protected by
              international copyright, trademark, patent, trade secret, and
              other intellectual property laws.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              6. Termination
            </p>
            <p className="text-lg gill-sans">
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason, including
              breach of these Terms.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              7. Limitation of Liability
            </p>
            <p className="text-lg gill-sans">
              In no event shall Premier Art Holdings Ltd, nor its directors,
              employees, partners, or agents, be liable for any indirect,
              incidental, special, or consequential damages arising out of your
              use or inability to use the Service.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              8. Governing Law
            </p>
            <p className="text-lg gill-sans">
              These Terms shall be governed and construed in accordance with the
              laws of Delawar, without regard to its conflict of law provisions.
            </p>

            <p className="text-2xl md:text-3xl mt-4 gill-sans">9. Contact Us</p>
            <p className="text-lg gill-sans">
              If you have any questions about these Terms, please contact us at{" "}
              <Link className="golden-color" href="mailto:info@premier.art">
                info@premier.art
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndCondition;
