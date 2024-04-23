import React from "react";
import { ScrollerSection } from "./ScrollerSection";

const HeroSection = () => {
  return (
    <div className="w-full h-full sm:h-screen bg-hero-section-mobile-bg sm:bg-hero-section-bg bg-no-repeat bg-cover bg-center">
      <div className="h-full sm:h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full items-center justify-center sm:h-[87%] mb-8 sm:mb-0">
          <h2
            className="text-[32px] leading-[40px] lg:text-[64px] text-center lg:leading-[82.14px] font-[275] text-white capitalize mb-[40px] sm:mb-6 mt-40
           w-[362px] sm:w-auto">
            Get upto <span className="font-semibold">$500,000</span> from your
            home equity
          </h2>

          {/* row items */}
          <div className="flex flex-col md:flex-row gap-2 sm:gap-8">
            <div className="border-r-0 sm:border-r flex flex-col items-center justify-center border-white sm:h-[64px]">
              <p
                className="text-white mx-14 mb-2 sm:my-8 text-[12px] leading-[18px]  sm:text-[22px] 
              sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                No monthly payments
              </p>
              <svg
                className="sm:hidden"
                width="1"
                height="36"
                viewBox="0 0 1 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="36"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="border-r-0 sm:border-r flex flex-col items-center justify-center border-white sm:h-[64px]">
              <p
                className="text-white mx-14 mb-2 sm:my-8 text-[12px] leading-[18px] sm:text-[22px] 
              sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                No income requirements
              </p>
              <svg
                className="sm:hidden"
                width="1"
                height="36"
                viewBox="0 0 1 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="36"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center sm:h-[64px]">
              <p
                className="text-white mx-14 mb-2 sm:my-8 text-[12px] leading-[18px] sm:text-[22px] 
              sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                No need to sell, borrow, or stress
              </p>
              <svg
                className="sm:hidden"
                width="1"
                height="36"
                viewBox="0 0 1 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499998"
                  y2="36"
                  stroke="white"
                />
              </svg>
            </div>
          </div>

          {/* hero buttons */}
          <div className="sm:max-w-[710px] h-auto sm:h-[60px] flex flex-row gap-5 sm:gap-8 mt-[80px] px-[34px] sm:px-0 mb-[240px] sm:mb-0">
            <button
              className="rounded-[50px] h-[32px] w-[171px] sm:h-auto sm:w-[310px] text-white  py-[4px]
            sm:py-0 px-[14px] text-center text-[14px] leading-[22px] sm:text-[22px] sm:leading-[32px] capitalize bg-[#ED5272]">
              check if you qualify
            </button>
            <button
              className="border border-white rounded-[50px] h-[32px] w-[171px] sm:h-auto sm:w-[310px] text-white py-[4px]
            sm:py-0 px-[14px] text-center text-[14px] leading-[22px] sm:text-[22px] sm:leading-[32px] capitalize">
              Schedule a call
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
