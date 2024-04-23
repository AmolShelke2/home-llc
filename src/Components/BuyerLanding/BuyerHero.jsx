import React from "react";
import { ScrollerSection } from "../EquityLanding/ScrollerSection";

const BuyerHero = () => {
  return (
    <div className="w-full h-full sm:h-screen bg-buyer-landing-bg bg-no-repeat bg-cover bg-center">
      <div className="h-full sm:h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full items-center justify-center sm:h-[83%] mb-8 sm:mb-[62px]">
          <h2 className="text-3xl lg:text-[64px] text-center lg:leading-[82.14px] font-[275] text-white capitalize mb-8 mt-40">
            Home Buying Reimagined
          </h2>

          <h3 className="text-xl leading-[29px] sm:text-[22px] font-semibold sm:leading-[33px] text-white text-center">
            Convenient, Stress-free & Remarkably Affordable
          </h3>

          {/* hero buttons */}
          <div className="sm:max-w-[710px] h-auto sm:h-[60px] flex flex-col sm:flex-row gap-4 sm:gap-8 sm:mt-28">
            <button className="border border-white rounded-[50px] h-full w-[310px] text-white py-3 sm:py-0 px-[10px] text-center text-[22px] leading-[32px]">
              Schedule a call
            </button>
            <button className="rounded-[50px] h-full w-[310px] text-white py-3 sm:py-0 px-[10px] text-center border-none text-[22px] leading-[32px] bg-[#ED5272]">
              Check if you qualify
            </button>
          </div>
        </div>

        {/* bottom scrollbar */}
        <ScrollerSection />
      </div>
    </div>
  );
};

export default BuyerHero;
