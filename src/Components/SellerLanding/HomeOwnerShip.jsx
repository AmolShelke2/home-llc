import React from "react";

const HomeOwnerShip = () => {
  return (
    <div className="w-full h-full sm:h-[870px] pt-[50px] pb-[86px] sm:py-[86px] bg-[#0041A3]">
      <div className="w-full flex flex-col px-8 2xl:px-0 sm:gap-[196px] 2xl:max-w-[1400px] 2xl:mx-auto sm:h-[653px]">
        <h4 className="text-center text-white text-[20px] whitespace-nowrap sm:text-[48px] leading-[66px] font-semibold capitalize mb-[64px] sm:mb-0">
          Your Journey to homeownership
        </h4>

        <div className="flex h-full flex-col sm:flex-row gap-[46px] sm:gap-[286px]">
          <div className="flex flex-col items-center w-full h-full sm:w-[557px] sm:h-[391px]">
            <span
              className="text-center h-[73px] w-[73px] sm:h-[126px] sm:w-[126px] bg-white
             rounded-full text-[51.4px] leading-[70px] sm:text-[88.73px] sm:leading-[122px] font-semibold text-[#ED5272] mb-[24px] sm:mb-[46px]">
              1
            </span>

            <h4 className="font-medium text-[16px] sm:text-[36px] text-center text-white pb-[24px] border-b w-full">
              Getting in Touch
            </h4>

            <p className="pt-[36px] text-sm sm:text-[18px] text-white font-normal text-center leading-[145%] sm:leading-[32px] w-full sm:w-[90%]">
              Sell your home like a breeze. Connect with our best experts who
              make the process smooth and easy, schedule a call today, it’s that
              easy!
            </p>
          </div>
          <div className="flex flex-col items-center h-full w-full sm:w-[557px] sm:h-[391px]">
            <span
              className="text-center h-[73px] w-[73px] sm:h-[126px] sm:w-[126px] bg-white
             rounded-full text-[51.4px] leading-[70px] sm:text-[88.73px] sm:leading-[122px] font-semibold text-[#ED5272] mb-[24px] sm:mb-[46px]">
              2
            </span>

            <h4 className="font-medium text-[16px] sm:text-[36px] text-center text-white pb-[24px] border-b w-full">
              At just 1%, Home is SOLD
            </h4>

            <p className="pt-[36px] text-sm sm:text-[18px] text-white font-normal text-center leading-[145%] sm:leading-[32px] w-full sm:w-[90%]">
              Congratulations! You’ve sold your home, at just 1%. We’ll secure
              the best deal so that you can move forward with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOwnerShip;
