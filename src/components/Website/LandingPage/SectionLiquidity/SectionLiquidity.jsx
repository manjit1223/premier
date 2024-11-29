import React from "react";
import Image from "next/image";

function SectionLiquidity() {
  return (
    <div className="flex flex-col md:flex-row" id="liquidity">
      <div className="md:w-2/3 px-5 md:px-10">
        <p className="abril-fatface text-3xl md:text-5xl">Liquidity</p>
        <br />
        <p className="md:text-xl">
          The missing piece of the Art industry puzzle..Until Now
        </p>
      </div>
      <div className="md:w-1/3 flex justify-end">
        <Image
          className="w-full"
          src="/images/landing-page/section-implement-liquidity/liquidity.png"
          width={406}
          height={541}
          alt=""
        />
      </div>
    </div>
  );
}

export default SectionLiquidity;
