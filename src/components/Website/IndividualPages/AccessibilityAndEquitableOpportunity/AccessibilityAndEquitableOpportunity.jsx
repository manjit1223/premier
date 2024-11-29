import React from "react";
import Image from "next/image";
import Link from "next/link";

function AccessibilityAndEquitableOpportunity() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-10 lg:px-4 gap-10 lg:p-4">
      <div className="flex flex-col">
        <p className="text-4xl md:text-6xl font-bold abril-fatface text-center">
          Summarization of Deloitte Article
        </p>
        <br />
          <br />
        <div className="w-full px-4 sm:px-6 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <p className="text-lg md:text-xl text-justify text-[#FFCA38]">
              Deloitte&apos;s 2023 Art Finance Report Makes the Case for The
              Premier Art Token
            </p>
            <p className="text-lg md:text-xl text-justify">
              The Deloitte Art Finance Report is an independent yearly report
              that explores the market of art as an asset class and evaluates
              the contemporary trends while highlighting the potential pitfalls
              in the market. Premier Art Holdings Ltd has no affiliation with
              Deloitte and yet the 2023 Art Finance Report reads like a case
              study as to why the Art Market needs The Premier Art Token.
              <br />
              <br />
              Some of the main topics include, fractional ownership, compliance
              and transparency, including how the lack of liquidity is causing
              stagnation in the art world. By fractionalizing ownership of blue
              chip and trophy art it allows for a much wider and diverse client
              pool and allows people at all levels of the financial spectrum to
              participate and enjoy art investment. The blockchain also adds
              transparency and security by providing a public and immutable
              method of tracking provenance and ownership taking much of the
              guesswork for future sales. Smart contracts can also allow for
              artists and their families to profit from future sales of their
              work and enjoy some of the appreciation in value. Art is and has
              always been a fantastic store of value because it is so stable,
              but with that stability comes a lack of liquidity. It is this lack
              of liquidity that really slows down the art market and can be a
              real turn off in potential investment.
              <br />
              <br />
              To read the full report click on the link below.
            </p>
            <Link
              className="text-blue-600"
              href="https://www.deloitte.com/content/dam/assets-zone2/lu/en/docs/services/financial-advisory/2023/art-finance-report-2023.pdf"
              target="_blank"
            >
              <p className="text-xs sm:text-xl flex-wrap">
                https://www.deloitte.com/content/dam/assets-zone2/lu/en/docs/services/financial-advisory/2023/art-finance-report-2023.pdf
              </p>
            </Link>
          </div>
          <Image
            className="w-full lg:w-1/2"
            src="/images/landing-page/section-accessibility-and-equitable-opportunity/banner1.png"
            width={415}
            height={680}
            alt="centered art image"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default AccessibilityAndEquitableOpportunity;
