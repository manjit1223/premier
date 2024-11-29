import React from "react";
import Chart from "./Chart";

function SectionStabilityGraph() {
  return (
    <div className="grid gap-4 bg-white text-black p-5 md:px-10">
      <div>
        <p className="abril-fatface text-3xl md:text-5xl">Stability</p>
        <br />
        <p className="md:text-xl">
          Is and has always been the cornerstone upon which the Art Industry has
          been built
        </p>
      </div>
      <Chart />
      <p className="md:text-xl">
        The information and econometric studies produced by Artmarket.com are
        presented uniquely for the purpose of analyzing and understanding the
        statistical realities of the art market. They should in no way be
        considered as advice or a suggestion or a solicitation to invest in the
        art market or in Artmarket.com, listed on Euronext Paris.
      </p>
    </div>
  );
}

export default SectionStabilityGraph;
