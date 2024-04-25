import React from "react";
import arrowDown from "../../assets/arrow-3.svg";

const MsaHero = () => {
  return (
    <div className="bg-msa-hero bg-no-repeat bg-cover bg-center h-[932px] sm:h-[1170px] w-full">
      <div className="h-full  bg-hero-section-overlay bg-cover">
        <div className="flex flex-col justify-center h-full items-center">
          <h1 className="font-medium text-[32px] lg:text-[48px] leading-[82.14px] text-center text-white mb-[16px] sm:mb-[26px]">
            Home Ownership
          </h1>
          <h4 className="text-[36px]  leading-[40px]  text-center sm:text-[64px] font-[275] sm:leading-[82.14px] text-white mb-[100px] sm:mb-[37px]">
            2024 Home Price Forecast
          </h4>

          <img src={arrowDown} alt="arrow-down" className="h-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default MsaHero;
