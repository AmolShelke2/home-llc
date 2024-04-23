import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const WhatWillYouOweUs = () => {
  return (
    <div className="w-full h-full sm:h-[728px] bg-[#0041A3] flex flex-col sm:justify-center text-white py-[40px] sm:py-0">
      <div className="sm:px-[130px] flex  flex-col sm:flex-row sm:gap-[192px] items-center">
        <div>
          <h5
            className="text-[20px] leading-[29px] whitespace-nowrap sm:text-[36px] text-center
           sm:text-left sm:leading-[52.2px] font-light text-white mb-[36px]">
            But what will you owe us in the future?
          </h5>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[30px] mb-[70px] border-b sm:border-b-0 py-[49px] sm:pb-0">
            <div className="w-[322px] h-[210px] border rounded-md py-[27px] px-[63px]">
              <p className="text-[24px] leading-[34.8px] font-normal text-center">
                Annual Change in Home Value
              </p>

              <div className="flex items-center justify-center gap-4 mt-8">
                <MdKeyboardArrowLeft size={32} className="cursor-pointer" />

                <input
                  type="text"
                  placeholder="3%"
                  value={""}
                  className="border-none w-[60px] text-[36px] leading-[52.2px] font-semibold bg-transparent outline-none text-white placeholder:text-white text-center"
                />

                <MdKeyboardArrowRight size={32} className="cursor-pointer" />
              </div>
            </div>
            <div className="w-[322px] h-[210px] border rounded-md py-[27px] px-[63px]">
              <p className="text-[24px] leading-[34.8px] font-normal text-center">
                Annual Change in Home Value
              </p>

              <div className="flex items-center justify-center gap-4 mt-8">
                <MdKeyboardArrowLeft size={32} className="cursor-pointer" />

                <input
                  type="text"
                  placeholder="3%"
                  value={""}
                  className="border-none w-[60px] text-[36px] leading-[52.2px] font-semibold bg-transparent outline-none text-white placeholder:text-white text-center"
                />

                <MdKeyboardArrowRight size={32} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <p className="hidden md:block text-[#FFFFFF] text-[14px] font-normal leading-[23.2px]">
            This calculator is for informational purposes only. Terms and
            conditions apply.
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-10 mb-[70px]">
            <h5 className="text-[20px] whitespace-nowrap leading-[29px] sm:text-[24px] sm:leading-[34.8px] font-normal">
              Future home value
            </h5>

            <span className="text-[32px] leading-[46px] sm:text-[46px] sm:leading-[66.7px] font-semibold">
              $985,383
            </span>
          </div>

          <div className="w-full sm:px-0">
            <div className="w-full flex items-center justify-between mb-2 px-4">
              <span className="sm:text-[46px] sm:leading-[66.7px] font-semibold">
                $335,030
              </span>
              <span className="sm:text-[46px] sm:leading-[66.7px] font-semibold">
                $650,353
              </span>
            </div>

            <div className="w-full flex h-[16px] bg-transparent mb-[12px] px-4 sm:px-0">
              <div className="h-full bg-[#F6BCC8] w-[40%]"></div>
              <div className="h-full bg-[#ED5272] w-[60%]"></div>
            </div>

            <div className="w-full flex justify-between items-start px-4 sm:px-0">
              <div>
                <p className="mb-8 text-xs sm:text-[16px] sm:leading-[23.2px]">
                  Home.LLC’s share - 34%
                </p>

                <p className="mb-8 w-[158px] sm:w-auto text-xs sm:text-[16px] sm:leading-[23.2px]">
                  You will pay this amount to Home.LLC at settlement
                </p>
              </div>

              <div>
                <p className="text-right mb-8 text-xs sm:text-[16px] sm:leading-[23.2px]">
                  Your share - 66%
                </p>

                <p className="w-[133px] sm:w-[262px] text-right text-xs sm:text-[16px] sm:leading-[23.2px]">
                  Amount shown represents your gross share of the future home
                  value. You will be responsible for paying any mortgage loans
                  and selling costs from your share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWillYouOweUs;
