"use client";

import React from "react";

function PrivacyPolicy() {
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
            <p className="text-4xl md:text-6xl didot">Privacy Policy</p>
            <br />
            <p className="text-lg gill-sans">
              Premier Art Holdings Ltd is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{" "}
              <strong>premier.art</strong> or use our services. Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site or use our
              services.
            </p>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              1. Information We Collect
            </p>
            <p className="text-lg gill-sans">
              We collect several types of information to provide and improve our
              services, including:
            </p>
            <ul className="list-disc pl-5 text-lg gill-sans">
              <li>
                <strong>Personal Data:</strong> Information that identifies you
                personally, such as your name, email address, phone number,
                billing information, etc.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website or services, such as your IP address, browser type, and
                pages visited.
              </li>
              <li>
                <strong>Cookies and Tracking Data:</strong> We use cookies and
                similar tracking technologies to track your activity on our
                website and store certain information.
              </li>
            </ul>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              2. How We Use Your Information
            </p>
            <p className="text-lg gill-sans">
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul className="list-disc pl-5 text-lg gill-sans">
              <li>To provide and maintain our services.</li>
              <li>To notify you about changes to our services.</li>
              <li>
                To allow you to participate in interactive features of our
                services.
              </li>
              <li>To provide customer support.</li>
              <li>
                To gather analysis or valuable information to improve our
                services.
              </li>
              <li>To monitor the usage of our services.</li>
            </ul>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              3. Disclosure of Your Information
            </p>
            <p className="text-lg gill-sans">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-5 text-lg gill-sans">
              <li>
                <strong>With Service Providers:</strong> We may share your
                personal information with service providers to help us operate
                our business, such as payment processors or analytics providers.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
            </ul>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              4. Security of Your Information
            </p>
            <p className="text-lg gill-sans">
              We use reasonable security measures to protect your personal
              information. However, no method of transmission over the internet
              or electronic storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              5. Your Data Protection Rights
            </p>
            <p className="text-lg gill-sans">
              Depending on your location, you may have certain rights regarding
              your personal data, including:
            </p>
            <ul className="list-disc pl-5 text-lg gill-sans">
              <li>
                <strong>Access:</strong> You can request a copy of the personal
                data we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You can ask us to correct any
                inaccurate data.
              </li>
              <li>
                <strong>Deletion:</strong> You can request that we delete your
                personal data, subject to certain exceptions.
              </li>
            </ul>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              6. Children's Privacy
            </p>
            <p className="text-lg gill-sans">
              Our services are not intended for use by children under the age of
              13. We do not knowingly collect personally identifiable
              information from children. If we become aware that we have
              collected personal information from a child without parental
              consent, we will take steps to remove that information from our
              servers.
            </p>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              7. Third-Party Links
            </p>
            <p className="text-lg gill-sans">
              Our website may contain links to third-party websites or services.
              We are not responsible for the privacy practices of those
              websites.
            </p>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">
              8. Changes to This Privacy Policy
            </p>
            <p className="text-lg gill-sans">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Effective Date" at the top.
            </p>
            <p className="text-2xl md:text-3xl mt-4 gill-sans">9. Contact Us</p>
            <p className="text-lg gill-sans">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="text-lg gill-sans">
              <strong>Email:</strong>{" "}
              <a className="golden-color" href="mailto:info@premier.art">
                info@premier.art
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
