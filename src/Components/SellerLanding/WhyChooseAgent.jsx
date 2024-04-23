import React from "react";
import homeAgent from "../../assets/seller-landing/home-agent.png";
import homeAgentIcon1 from "../../assets/seller-landing/agent-svg-1.png";
import homeAgentIcon2 from "../../assets/seller-landing/agent-svg-2.png";
import homeAgentIcon3 from "../../assets/seller-landing/agent-svg-3.png";
import homeAgentIcon4 from "../../assets/seller-landing/agent-svg-4.png";
import homeAgentIcon5 from "../../assets/seller-landing/agent-svg-5.png";

const WhyChooseAgent = () => {
  return (
    <div className="w-full h-full sm:h-[1139px] bg-[#FEF9F0] pt-[90px] sm:px-[74px] 2xl:px-0">
      <div className="w-full 2xl:max-w-[1580px] 2xl:mx-auto h-full sm:h-[1050px] relative">
        <h4 className="text-center text-[#18191F] text-[20px] sm:text-[46px] leading-[82.1px] sm:leading-[66px] font-semibold capitalize mb-[64px]">
          Why Choose{" "}
          <span className="font-bold text-[#ED5272]">Home Agent?</span>
        </h4>

        <div className="flex flex-col sm:flex-row gap-[50px] sm:gap-[100px] sm:flex-wrap items-center justify-center  px-8 sm:px-0">
          <div className="w-full h-full sm:w-[457px] sm:h-[307px] flex flex-col items-center px-2">
            <img
              src={homeAgentIcon1}
              alt="icon"
              className="mb-[30px] sm:mb-[46px]"
            />

            <h5 className="text-[16px] font-semibold sm:text-[24px] leading-[145%] text-[#18191F] mb-4 text-center">
              Effortless Listing & Expert Guidance
            </h5>

            <p className="text-sm leading-[145%] text-[#18191F] text-center">
              Get a data-driven price, expert listing, and effortless showings
              to attract qualified buyers quickly.
            </p>
          </div>
          <div className="w-full h-full sm:w-[457px] sm:h-[307px] flex flex-col items-center px-2">
            <img
              src={homeAgentIcon2}
              alt="icon"
              className="mb-[30px] sm:mb-[46px]"
            />

            <h5 className="text-[16px] font-semibold sm:text-[24px] leading-[145%] text-[#18191F] mb-4 text-center">
              Negotiations & Streamlined Closing
            </h5>

            <p className="text-sm leading-[145%] text-[#18191F] text-center">
              Our agents negotiate fiercely to maximize your offer, then handle
              all the closing details for a stress-free experience.
            </p>
          </div>
          <div className="w-full h-full sm:w-[457px] sm:h-[307px] flex flex-col items-center px-2">
            <img
              src={homeAgentIcon3}
              alt="icon"
              className="mb-[30px] sm:mb-[46px]"
            />

            <h5 className="text-[16px] font-semibold sm:text-[24px] leading-[145%] text-[#18191F] mb-4 text-center">
              Effortless Listing & Expert Guidance
            </h5>

            <p className="text-sm leading-[145%] text-[#18191F] text-center">
              Convenient scheduling and dedicated guidance throughout showings
              keep you informed and in control.
            </p>
          </div>
          <div className="w-full h-full sm:w-[457px] sm:h-[307px] flex flex-col items-center px-2">
            <img
              src={homeAgentIcon4}
              alt="icon"
              className="mb-[30px] sm:mb-[46px]"
            />

            <h5 className="text-[16px] font-semibold sm:text-[24px] leading-[145%] text-[#18191F] mb-4 text-center">
              Exclusive Partnerships
            </h5>

            <p className="text-sm leading-[145%] text-[#18191F] text-center">
              Our network and partnerships give your home maximum exposure and
              access to valuable selling resources.
            </p>
          </div>
          <div className="w-full h-full sm:w-[457px] sm:h-[307px] flex flex-col items-center px-2">
            <img
              src={homeAgentIcon5}
              alt="icon"
              className="mb-[30px] sm:mb-[46px]"
            />

            <h5 className="text-[16px] font-semibold sm:text-[24px] leading-[145%] text-[#18191F] mb-4 text-center">
              1% Commission Savings
            </h5>

            <p className="text-sm leading-[145%] text-[#18191F] text-center">
              Celebrate an abundance of profit from our remarkably low
              commission rates.
            </p>
          </div>
        </div>
        <div className="hidden sm:block absolute bottom-0 left-0 right-0 mx-auto w-[40%]">
          <img src={homeAgent} alt="section-hero" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAgent;
