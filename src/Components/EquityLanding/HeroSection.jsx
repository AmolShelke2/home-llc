import React from "react";
import { ScrollerSection } from "./ScrollerSection";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-hero-section-bg bg-no-repeat bg-cover bg-center">
      <div className="h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col items-center justify-center h-[90%] my-auto">
          <h2 className="text-[64px] text-center leading-[82.14px] font-[275] text-white capitalize mb-6">
            Get upto <span className="font-semibold">$500,000</span> from your
            home equity
          </h2>

          {/* row items */}
          <div className="flex gap-8">
            <div className="border-r flex flex-col items-center justify-center border-white h-[64px]">
              <p className="text-white mx-14 my-8 text-[22px] leading-[33px] font-semibold capitalize whitespace-nowrap">
                No monthly payments
              </p>
            </div>
            <div className="border-r flex flex-col items-center justify-center border-white h-[64px]">
              <p className="text-white mx-14 my-8 text-[22px] leading-[33px] font-semibold capitalize whitespace-nowrap">
                No income requirements
              </p>
            </div>
            <div className="flex flex-col items-center justify-center h-[64px] mb-12">
              <p className="text-white mx-14 my-8 font-semibold text-[22px] leading-[33px] capitalize whitespace-nowrap">
                No need to sell, borrow, or stress
              </p>
            </div>
          </div>

          {/* hero buttons */}
          <div className="max-w-[710px] h-[60px] flex gap-8">
            <button className="border border-white rounded-[50px] h-full w-[310px] text-white px-[10px] text-center text-[22px] leading-[32px]">
              Schedule a call
            </button>
            <button className="rounded-[50px] h-full w-[310px] text-white px-[10px] text-center border-none text-[22px] leading-[32px] bg-[#ED5272]">
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

export default HeroSection;
