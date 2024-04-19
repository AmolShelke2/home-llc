import React from "react";
import arrowRight from "../../assets/arrow.svg";

const NeedFromUs = () => {
  return (
    <div className="w-full h-full lg:h-[430px] bg-[#0041A3] mt-10 py-4 lg:pt-[97px]">
      <div className="w-full lg:max-w-[1584px] h-full lg:h-[204px] mx-auto">
        <div className="w-full h-full lg:h-[106px] flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center mb-8 lg:mb-20 px-2 lg:px-0">
          <div className="flex flex-col items-start gap-3 w-full lg:w-[580px]">
            <h4 className="text-xl lg:text-[36px] lg:leading-[36.1px] font-semibold text-white mb-2">
              What do you need from us?
            </h4>

            <input
              type="text"
              placeholder="Tell us more"
              className="bg-transparent border-b border-white outline-none focus:outline-none w-full p-2 text-lg font-light text-white"
            />
          </div>
          <div className="flex flex-col items-start gap-3 w-full lg:w-[580px]">
            <h4 className="text-xl lg:text-[36px] lg:leading-[36.1px] font-semibold text-white mb-2">
              How can we get in touch?
            </h4>

            <input
              type="email"
              placeholder="Enter Email ID or Phone Number"
              className="bg-transparent border-b border-white outline-none focus:outline-none w-full p-2 text-lg font-light text-white"
            />
          </div>
          <div>
            <img
              src={arrowRight}
              alt="arrow-right"
              className="mt-2 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 px-2">
          <input type="checkbox" className="bg-transparent border-none" />
          <p className="text-sm font-light text-white">
            I consent to receive text messages from Hoom Inc., its
            representatives, or anyone communicating on its behalf at the
            specific number I have provided here. I also consent to the
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedFromUs;
