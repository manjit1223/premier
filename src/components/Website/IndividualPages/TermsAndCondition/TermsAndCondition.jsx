import React from "react";
import Link from "next/link";

function TermsAndCondition() {
  return (
    <div className="p-5 md:px-10">
      <p className="text-4xl md:text-6xl font-bold abril-fatface">
        Terms and Conditions
      </p>
      <br />
      <p>
        Please read these Terms and Conditions carefully before using the
        premier.art website operated by Premier Art Holdings Ltd.
      </p>

      <p className="text-2xl font-semibold mt-4">1. Acceptance of Terms</p>
      <p>
        By accessing or using our Service, you agree to be bound by these Terms.
        If you disagree with any part of the terms, then you may not access the
        Service.
      </p>

      <p className="text-2xl font-semibold mt-4">2. Modifications to Terms</p>
      <p>
        We reserve the right to modify or replace these Terms at any time. Any
        changes will be effective immediately upon posting the revised version.
        It is your responsibility to review the Terms periodically for updates.
      </p>

      <p className="text-2xl font-semibold mt-4">3. Accounts</p>
      <p>
        You must provide accurate and complete information when creating an
        account. You are responsible for maintaining the confidentiality of your
        account and password. You must notify us immediately of any breach of
        security or unauthorized use of your account.
      </p>

      <p className="text-2xl font-semibold mt-4">4. Use of the Service</p>
      <p>You agree not to:</p>
      <ul className="list-disc pl-5">
        <li>
          Use the Service for unlawful purposes or in violation of any
          applicable laws.
        </li>
        <li>
          Post or transmit any harmful, threatening, or offensive material.
        </li>
        <li>
          Attempt to interfere with or disrupt the Service or its servers.
        </li>
      </ul>

      <p className="text-2xl font-semibold mt-4">5. Intellectual Property</p>
      <p>
        The Service and its original content, features, and functionality are
        owned by Premier Art Holdings Ltd and are protected by international
        copyright, trademark, patent, trade secret, and other intellectual
        property laws.
      </p>

      <p className="text-2xl font-semibold mt-4">6. Termination</p>
      <p>
        We may terminate or suspend access to our Service immediately, without
        prior notice or liability, for any reason, including breach of these
        Terms.
      </p>

      <p className="text-2xl font-semibold mt-4">7. Limitation of Liability</p>
      <p>
        In no event shall Premier Art Holdings Ltd, nor its directors,
        employees, partners, or agents, be liable for any indirect, incidental,
        special, or consequential damages arising out of your use or inability
        to use the Service.
      </p>

      <p className="text-2xl font-semibold mt-4">8. Governing Law</p>
      <p>
        These Terms shall be governed and construed in accordance with the laws
        of Delawar, without regard to its conflict of law provisions.
      </p>

      <p className="text-2xl font-semibold mt-4">9. Contact Us</p>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <Link className="golden-color" href="mailto:info@premier.art">
          info@premier.art
        </Link>
      </p>
    </div>
  );
}

export default TermsAndCondition;
