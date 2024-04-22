import React from "react";
import youtube from "../../assets/youtube-image.png";
import { howitworks } from "../../data";

const HowItWorks = () => {
  return (
    <div className="w-full h-auto xl:h-[762px] bg-[#0041A3] py-8 xl:py-16">
      <div className="w-full px-4 xl:max-w-[1580px] mx-auto h-full xl:h-[591px]">
        <h4 className="text-[22px] leading-[46px] xl:text-[48px] xl:leading-[66px] text-[#FFFFFF] font-semibold mb-10">
          How it works
        </h4>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div>
            <img src={youtube} alt="youtube" className="object-cover" />
          </div>

          <div className="flex flex-col gap-6">
            {howitworks.map((item, index) => (
              <div
                key={item.title}
                className="h-auto xl:h-[147px] py-8 px-6 border border-white rounded-lg w-full xl:w-[680px]">
                <h6 className="text-[18px] xl:text-xl font-semibold text-white mb-2 capitalize">
                  {item.title}
                </h6>
                <p className="text-[19px] xl:text-xl font-light text-white opacity-65 capitalize">
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
