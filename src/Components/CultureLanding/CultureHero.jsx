import React from "react";
import video from "../../assets/culture-bg.mp4";

const CultureHero = () => {
  return (
    <div className="h-[1050px] w-full relative">
      <div className="h-full sm:h-full bg-hero-section-overlay bg-cover z-40">
        <div
          className="relative flex items-end
        justify-center h-full overflow-hidden">
          <video
            src={video}
            autoPlay={true}
            loop
            muted
            className="absolute z-10 w-auto  
            min-w-full min-h-full max-w-none"></video>

          <h2 className="z-40 py-8 text-[32px] leading-[42px] text-center sm:text-[64px] sm:leading-[89.6px] font-extrabold text-white">
            OUR CULTURE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CultureHero;
