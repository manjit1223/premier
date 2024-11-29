import React from "react";
import TermsAndCondition from "@/components/Website/IndividualPages/TermsAndCondition/TermsAndCondition";

export const metadata = {
  title: "Premier - Terms-And-Condition",
  description: "Premier Terms-And-Condition Page",
};

function Page() {
  return (
    <div className="flex-grow">
      <TermsAndCondition />
    </div>
  );
}

export default Page;
