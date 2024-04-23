import React from "react";
import { ScrollerSection } from "../EquityLanding/ScrollerSection";

const BuyerHero = () => {
  return (
    <div className="w-full h-full sm:h-screen bg-buyer-landing-bg bg-no-repeat bg-cover bg-center">
      <div className="h-full sm:h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full items-center justify-center sm:h-[83%] mb-8 sm:mb-[62px]">
          <h2
            className="text-[32px] leading-[40px] lg:text-[64px] text-center lg:leading-[82.14px] font-[275] text-white capitalize mb-[40px] sm:mb-6 mt-40
           w-[362px] sm:w-auto">
            Home Buying Reimagined
          </h2>

          <h3 className="text-xl leading-[29px] sm:text-[22px] font-semibold sm:leading-[33px] text-white text-center">
            Convenient, Stress-free & Remarkably Affordable
          </h3>

          {/* hero buttons */}
          <div className="sm:max-w-[710px] h-auto sm:h-[60px] flex flex-row gap-5 sm:gap-8 mt-[80px] px-[34px] sm:px-0 mb-[240px] sm:mb-0">
            <button
              className="border border-white rounded-[50px] h-[32px] w-[171px] sm:h-auto sm:w-[310px] text-white  py-[4px]
            sm:py-0 px-[14px] text-center text-[14px] leading-[22px] sm:text-[22px] sm:leading-[32px] capitalize">
              Schedule a call
            </button>
            <button
              className="rounded-[50px] h-[32px] w-[171px] sm:h-auto sm:w-[310px] text-white py-[4px]
            sm:py-0 px-[14px] text-center text-[14px] leading-[22px] sm:text-[22px] sm:leading-[32px] capitalize  bg-[#ED5272]">
              check if you qualify
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
