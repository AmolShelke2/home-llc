import React from "react";
import { cardsData } from "../../data";
import heroImg from "../../assets/buyer-landing/hero-img.png";

const OptimizeExperience = () => {
  return (
    <div className="w-full py-8 px-8 2xl:h-[1080px] sm:px-[75px] sm:py-[121px] sm:p-16 bg-[#FEF9F0] h-full relative">
      <div className="flex flex-wrap justify-start items-start gap-[50px]">
        {cardsData.map((card) => (
          <div
            className="w-full h-full sm:h-[395px] sm:w-[490px] rounded-lg border border-black py-8 px-6 sm:pt-[121px] sm:px-[44px]"
            key={card.id}>
            <h4 className="sm:w-[368px] sm:h-[108px] mb-4 text-[16px] leading-[26px] sm:text-[36px] sm:leading-[54px] font-semibold">
              {card.title}
            </h4>
            <p className="text-[14px] leading-[19px] sm:text-[22px] sm:leading-[32px] font-normal">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 lg:right-[200px]">
        <img src={heroImg} alt="section-hero" />
      </div>
    </div>
  );
};

export default OptimizeExperience;
