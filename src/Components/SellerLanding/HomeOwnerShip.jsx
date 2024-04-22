import React from "react";

const HomeOwnerShip = () => {
  return (
    <div className="w-full h-[870px] py-[86px] bg-[#0041A3]">
      <div className="w-full flex flex-col gap-[196px] max-w-[1400px] mx-auto h-[653px]">
        <h4 className="text-center text-white text-[48px] leading-[66px] font-semibold capitalize">
          Your Journey to homeownership
        </h4>

        <div className="flex gap-[286px]">
          <div className="flex flex-col items-center w-[557px] h-[391px]">
            <span
              className="text-center h-[126px] w-[126px] bg-white
             rounded-full text-[88.73px] leading-[122px] font-semibold text-[#ED5272] mb-[46px]">
              1
            </span>

            <h4 className="font-medium text-[36px] text-center text-white pb-[24px] border-b w-full">
              Getting in Touch
            </h4>

            <p className="pt-[36px] text-[18px] text-white font-normal text-center leading-[32px] w-[90%]">
              Sell your home like a breeze. Connect with our best experts who
              make the process smooth and easy, schedule a call today, it’s that
              easy!
            </p>
          </div>
          <div className="flex flex-col items-center w-[557px] h-[391px]">
            <span
              className="text-center h-[126px] w-[126px] bg-white
             rounded-full text-[88.73px] leading-[122px] font-semibold text-[#ED5272] mb-[46px]">
              2
            </span>

            <h4 className="font-medium text-[36px] text-center text-white pb-[24px] border-b w-full">
              At just 1%, Home is SOLD
            </h4>

            <p className="pt-[36px] text-[18px] text-white font-normal text-center leading-[32px] w-[90%]">
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
