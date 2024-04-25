import React from "react";
import arrowDown from "../../assets/arrow-3.svg";

const SmallSection = ({ title, subtitle }) => {
  return (
    <div className="h-[281px] sm:h-[417px] w-full bg-[#0041A3] pt-[54px] text-white my-10">
      <h2 className="text-[22px] leading-[33px] sm:text-[48px] sm:leading-[66px] font-semibold text-center capitalize mb-[23px]">
        {title}
      </h2>
      <p className="text-[12px] leading-[18px] sm:text-[22px] sm:leading-[66px] text-center font-light mb-2 sm:mb-[24px]">
        {subtitle}
      </p>

      <div className="flex items-center justify-center">
        <img src={arrowDown} alt="arrow-down" />
      </div>
    </div>
  );
};

export default SmallSection;
