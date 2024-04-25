import React from "react";
import framework1 from "../../assets/msa-prediction/framework-1.jpeg";
import framework2 from "../../assets/msa-prediction/framework-2.jpeg";
import framework3 from "../../assets/msa-prediction/framework-3.jpeg";

const ResearchFramework = () => {
  return (
    <div className="w-full h-full sm:h-[920px] bg-[#FEF9F0] text-[#212529] pt-[52px] sm:pt-[94px]">
      <h2 className="text-[22px] w-full leading-[33px] sm:text-[48px] sm:leading-[66px] text-center font-semibold sm:max-w-[1121px] sm:mx-auto capitalize mb-[14px] sm:mb-[18px]">
        Using this framework, we developed a research-driven methodology
      </h2>
      <p className="text-[12px] leading-[18px] sm:text-[22px] font-light w-full text-center sm:leading-[66px] mb-[42px] sm:mb-[74px]">
        to project the 2024 demand and supply levels for each mSA, based on 3
        scenarios of mortgage rates{" "}
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[42px] sm:gap-[57px] items-center px-[108px] cursor-pointer">
        <div
          className="relative w-[382px] h-[349px] sm:w-[466px] sm:h-[426px] rounded-lg"
          style={{
            backgroundImage: `url(${framework1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg">
            {/* Content */}
            <div className="text-center text-white z-30 py-[113px] px-[41px] sm:py-[139px] sm:px-[51px]">
              <h4 className="text-[30px] sm:text-[36px] leading-[44px] text-center text-[#CF2E2E] font-semibold mb-[27px]">
                “Recession” Bearish Scenario
              </h4>
              <p className="text-[22px] leading-[33px] font-normal text-center">
                {"Mortgage Rates > 7.5%"}
              </p>
            </div>
          </div>
        </div>

        <div
          className="relative w-[382px] h-[349px] sm:w-[466px] sm:h-[426px] rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url(${framework2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg">
            {/* Content */}
            <div className="text-center text-white z-30 py-[113px] px-[41px] sm:py-[139px] sm:px-[51px]">
              <h4 className="text-[30px] sm:text-[36px] leading-[44px] text-center text-[#FCB900] font-semibold mb-[27px]">
                “Soft Landing” Median Scenario
              </h4>
              <p className="text-[22px] leading-[33px] font-normal text-center">
                {"Mortgage Rates ~ 6%"}
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative w-[382px] h-[349px] sm:w-[466px] sm:h-[426px] rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url(${framework3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg">
            {/* Content */}
            <div className="text-center text-white z-30 py-[113px] px-[41px] sm:py-[139px] sm:px-[51px]">
              <h4 className="text-[30px] sm:text-[36px] leading-[44px] text-center text-[#00D084] font-semibold mb-[27px]">
                “Roaring 20s” Bullish Scenario
              </h4>
              <p className="text-[22px] leading-[33px] font-normal text-center">
                {"Mortgage Rates < 5%"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchFramework;
