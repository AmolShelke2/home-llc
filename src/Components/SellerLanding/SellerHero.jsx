import React from "react";
import { ScrollerSection } from "../EquityLanding/ScrollerSection";

const SellerHero = () => {
  return (
    <div className="w-full h-full sm:h-screen bg-seller-landing bg-no-repeat bg-cover bg-center">
      <div className="h-full sm:h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full items-center justify-center sm:h-[87%] mb-8 sm:mb-0">
          <h2 className="text-3xl lg:text-[64px] text-center lg:leading-[82.14px] font-[275] text-white capitalize mb-8 mt-40">
            Unleash the <span className="font-semibold">highest value</span>
            {""} for your home
          </h2>

          {/* row items */}
          <div className="flex flex-col md:flex-row gap-2 sm:gap-8 mb-8">
            <div className="border-r-0 sm:border-r flex flex-col items-center justify-center border-white sm:h-[64px]">
              <p className="text-white mx-14 mb-2 sm:my-8 text-lg  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                Convenient
              </p>
            </div>
            <div className="border-r-0 sm:border-r flex flex-col items-center justify-center border-white sm:h-[64px]">
              <p className="text-white mx-14 mb-2 sm:my-8 text-lg  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                Stress Free
              </p>
            </div>
            <div className="flex flex-col items-center justify-center sm:h-[64px] mb-12">
              <p className="text-white mx-14 mb-2 sm:my-8 text-lg  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                Affordable{" "}
              </p>
            </div>
          </div>

          {/* hero buttons */}
          <div className="sm:max-w-[710px] h-auto sm:h-[60px]">
            <button className="border border-white rounded-[50px] h-full w-[310px] text-white py-3 sm:py-0 px-[10px] text-center text-[22px] leading-[32px]">
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

export default SellerHero;
