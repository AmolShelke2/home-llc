import React from "react";
import arrowRight from "../../assets/arrow.svg";

const NeedFromUs = () => {
  return (
    <div className="w-full h-full lg:h-[430px] bg-[#0041A3] py-8 lg:pt-[97px]">
      <div className="w-full lg:max-w-[1584px] px-4 h-full lg:h-[204px] mx-auto">
        <div className="w-full h-full lg:h-[106px] flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-between lg:items-center mb-[40px] sm:mb-8 lg:mb-20 px-2 lg:px-0">
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
              className="mt-2 cursor-pointer hidden sm:block"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 px-2 mb-[80px]">
          <input type="checkbox" className="bg-transparent border-none" />
          <p className="text-[10px] leading-[16px] sm:text-sm font-light text-white">
            I consent to receive text messages from Hoom Inc., its
            representatives, or anyone communicating on its behalf at the
            specific number I have provided here. I also consent to the
          </p>
        </div>

        <div className="flex items-center justify-between px-[27px] sm:hidden">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.08824 30.1217C5.79383 30.1217 7.17648 28.7391 7.17648 27.0335C7.17648 25.3279 5.79383 23.9453 4.08824 23.9453C2.38265 23.9453 1 25.3279 1 27.0335C1 28.7391 2.38265 30.1217 4.08824 30.1217Z"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M27.9115 30.1217C29.6171 30.1217 30.9997 28.7391 30.9997 27.0335C30.9997 25.3279 29.6171 23.9453 27.9115 23.9453C26.2059 23.9453 24.8232 25.3279 24.8232 27.0335C24.8232 28.7391 26.2059 30.1217 27.9115 30.1217Z"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M16.0003 8.05929C17.7059 8.05929 19.0886 6.67664 19.0886 4.97105C19.0886 3.26546 17.7059 1.88281 16.0003 1.88281C14.2948 1.88281 12.9121 3.26546 12.9121 4.97105C12.9121 6.67664 14.2948 8.05929 16.0003 8.05929Z"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M14.0242 8.49609L5.62305 23.4981"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M17.9756 8.49609L26.3767 23.4981"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M8.05859 27.0273H23.9409"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>

          <img
            src={arrowRight}
            alt="arrow-right"
            className="mt-2 cursor-pointer sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default NeedFromUs;
