import React from "react";
import { IoMdClose } from "react-icons/io";
import hero from "../../assets/home-equity/hero.png";
import brandLogo from "../../assets/home-equity/company-logo.png";
import { ScrollerSection } from "../EquityLanding/ScrollerSection";
import { FaChevronDown } from "react-icons/fa";
import heroGroup from "../../assets/home-equity/hero-group.svg";

const HomeEquityHero = () => {
  return (
    <div className="bg-home-equity-qualify w-full h-full sm:h-[1145px] bg-cover bg-center bg-no-repeat">
      <div className="w-full bg-[#AEE5D8] py-6 text-[#18191F] relative mb-[140px] sm:mb-[248px]">
        <p className="text-center font-medium text-[12px] sm:text-[16px] leading-[12px] sm:leading-[32px]">
          Pre-Approval Letter has been downloaded, if download hasn’t started
          click {""}
          <a href="#" className="text-[#0041A3] underline">
            here
          </a>{" "}
          here to re-download
        </p>

        <IoMdClose
          size={24}
          className="text-black cursor-pointer absolute right-8 top-6 hidden sm:block"
        />
      </div>

      <div className="flex items-center flex-col gap-4 justify-center w-full mb-[100px] sm:mb-[214px]">
        <div className="flex flex-col sm:flex-row items-center gap-[170px] sm:gap-[30px]">
          <h2 className="text-[32px] leading-[40px] sm:text-[46px] font-light sm:leading-[82.14px] text-white text-center">
            Feeling Diecy?
          </h2>
          <div className="flex items-center justify-center mb-[48px] sm:hidden">
            <img src={heroGroup} alt="hero-group" />
          </div>

          <div className="hidden sm:flex w-[438px] h-[86px] bg-[#F6BCC8] rounded-[67px] items-center justify-center">
            <img src={hero} alt="" />
          </div>
        </div>
        <h4 className="text-[32px] leading-[40px] sm:text-[46px] font-semibold sm:leading-[82.14px] text-center text-white">
          Well Here’s what the news says about us
        </h4>
      </div>

      <div>
        <h4 className="text-center text-white text-[14px] sm:text-[22px] font-medium leading-[32px] mb-[35px]">
          “Most accurate housing forecaster in America”
        </h4>

        <div className="flex justify-center items-center h-[41px] max-w-[490px] mx-auto gap-[42px] mb-[100px]">
          <svg
            width="75"
            height="3"
            viewBox="0 0 75 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="75" y2="1.5" stroke="#ED5272" stroke-width="2" />
          </svg>

          <img
            src={brandLogo}
            alt="brand"
            className="h-[16px] w-[107px] sm:h-auto sm:w-auto"
          />

          <svg
            width="75"
            height="3"
            viewBox="0 0 75 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line y1="1.5" x2="75" y2="1.5" stroke="#ED5272" stroke-width="2" />
          </svg>
        </div>
      </div>

      <ScrollerSection />

      <div className="w-[50px] mx-auto mt-[40px]">
        <FaChevronDown size={42} className="text-[#ED5272]" />
      </div>
    </div>
  );
};

export default HomeEquityHero;
