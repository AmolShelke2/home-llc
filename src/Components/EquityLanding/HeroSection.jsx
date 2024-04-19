import React from "react";
import { ScrollerSection } from "./ScrollerSection";

const HeroSection = () => {
  return (
    <div className="w-full h-full sm:h-screen bg-hero-section-bg bg-no-repeat bg-cover bg-center">
      <div className="h-full sm:h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full items-center justify-center sm:h-[87%] mb-8 sm:mb-0">
          <h2 className="text-2xl lg:text-[64px] text-center lg:leading-[82.14px] font-[275] text-white capitalize mb-6 mt-40">
            Get upto <span className="font-semibold">$500,000</span> from your
            home equity
          </h2>

          {/* row items */}
          <div className="flex flex-col md:flex-row gap-2 sm:gap-8">
            <div className="border-r flex flex-col items-center justify-center border-white sm:h-[64px]">
              <p className="text-white mx-14 mb-2 sm:my-8 text-lg  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                No monthly payments
              </p>
            </div>
            <div className="border-r flex flex-col items-center justify-center border-white sm:h-[64px]">
              <p className="text-white mx-14 mb-2 sm:my-8 text-lg  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                No income requirements
              </p>
            </div>
            <div className="flex flex-col items-center justify-center sm:h-[64px] mb-12">
              <p className="text-white mx-14 mb-2 sm:my-8 text-lg  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                No need to sell, borrow, or stress
              </p>
            </div>
          </div>

          {/* hero buttons */}
          <div className="sm:max-w-[710px] h-auto sm:h-[60px] flex flex-col sm:flex-row gap-4 sm:gap-8">
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

export default HeroSection;
