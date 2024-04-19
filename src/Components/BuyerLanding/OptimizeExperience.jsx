import React from "react";
import experienc1 from "../../assets/buyer-landing/experience-1.png";
import experienc2 from "../../assets/buyer-landing/experience-2.png";
import experienc3 from "../../assets/buyer-landing/experience-3.png";
import experienc4 from "../../assets/buyer-landing/experience-4.png";

const OptimizeExperience = () => {
  return (
    <div className="w-full py-8 px-4 sm:p-16 bg-[#FEF9F0] h-full">
      <div className="sm:max-w-[1580px] sm:mx-auto">
        <h4 className="text-2xl  sm:text-[40px] sm:leading-[82.14px] font-semibold text-[#212529] mb-8">
          Optimize Your Homebuying Experience
        </h4>

        <div className="flex flex-wrap gap-8 relative">
          <div>
            <img src={experienc1} alt="experience-1" />
          </div>
          <div>
            <img src={experienc2} alt="experience-2" />
          </div>
          <div>
            <img src={experienc3} alt="experience-3" />
          </div>
          <div>
            <img src={experienc4} alt="experience-4" />
          </div>
          <div className="hidden 2xl:block xl:absolute top-[290px] w-full border-b border-[#ACB5BD]"></div>
          <div className="hidden 2xl:block xl:absolute top-[290px] left-[475px] w-[600px] rotate-90 border-b border-[#ACB5BD]"></div>
        </div>
      </div>
    </div>
  );
};

export default OptimizeExperience;
