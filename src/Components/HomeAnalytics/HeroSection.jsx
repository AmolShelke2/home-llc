import React from "react";
import { ScrollerSection } from "../EquityLanding/ScrollerSection";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-home-analytics-landing-bg bg-no-repeat bg-cover bg-center">
      <div className="h-full sm:h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col items-center justify-center h-[87%]">
          <div className="mb-8">
            <h2 className="text-2xl w-full lg:text-[64px] font-[275] lg:leading-[82.14px] text-center capitalize text-white lg:w-[960px]">
              Find out how <span className=" font-semibold">good</span> is your
              neighborhood
            </h2>
          </div>
          {/* arrow */}
          <div className="mb-10"></div>
        </div>

        {/* scroller section */}
        <ScrollerSection />
      </div>
    </div>
  );
};

export default HeroSection;
