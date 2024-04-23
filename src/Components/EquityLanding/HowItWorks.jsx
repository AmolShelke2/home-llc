import React from "react";
import youtube from "../../assets/youtube-image.png";
import { howitworks } from "../../data";

const HowItWorks = () => {
  return (
    <div className="w-full h-auto xl:h-[762px] bg-[#0041A3] pb-8 xl:py-16">
      <div className="w-full sm:px-4 xl:max-w-[1580px] mx-auto h-full xl:h-[591px]">
        <h4
          className="text-[20px] leading-[30px] xl:text-[48px] xl:leading-[66px] text-[#FFFFFF]
         sm:font-semibold mb-10 text-center sm:text-left w-full bg-[#ED5272]
          sm:bg-transparent py-[16px] sm:py-0 uppercase sm:capitalize font-normal">
          How it works
        </h4>

        <div
          className="flex flex-col lg:flex-row gap-[35px] sm:gap-6 items-center
         sm:items-start py-[20px] sm:py-0 px-[12px] sm:px-0">
          <div>
            <img
              src={youtube}
              alt="youtube"
              className="object-cover w-[380px] h-[213px] sm:w-auto sm:h-auto rounded-xl sm:rounded-none"
            />
          </div>

          <div className="flex flex-col gap-6">
            {howitworks.map((item, index) => (
              <div
                key={item.title}
                className="h-[90px] xl:h-[147px] py-[14px] px-[19px] sm:py-8 sm:px-6 border border-white rounded-lg w-[380px] xl:w-[680px]">
                <h6 className="text-[14px] leading-[24px] xl:text-xl font-semibold text-white mb-2 capitalize">
                  {item.title}
                </h6>
                <p className="text-[12px] leading-[15px] sm:text-[19px] xl:text-xl font-light text-white opacity-65 capitalize">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
