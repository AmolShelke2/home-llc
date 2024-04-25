import React from "react";
import NikPf from "../../assets/msa-prediction/Nik-pf.svg";
import SidPf from "../../assets/msa-prediction/Sid-pf.svg";
import DevPf from "../../assets/msa-prediction/Dev-pf.svg";

const LastUpdated = () => {
  return (
    <div className="w-full h-[957px] sm:h-[767px] bg-msa-last-updated bg-cover bg-no-repeat bg-center mt-[35px] relative">
      <div className="absolute inset-0 bg-black bg-opacity-80 pt-[52px] sm:pt-[82px]">
        <h2 className="text-[22px] leading-[33px] sm:text-[48px] sm:leading-[66px] font-semibold text-center capitalize mb-[34px] text-white sm:mb-[106px]">
          Last Updated: Feb 20th, 2023
        </h2>

        <div className="px-[83px] flex flex-col sm:flex-row items-center gap-[60px] mb-[40px] sm:mb-[124px]">
          <div
            className="w-[380px] sm:w-[482px] h-[180px] sm:h-[230px] bg-[#000] bg-opacity-65 border
           border-[#FFFFFF] rounded-lg border-opacity-30 px-[10px] sm:px-[30px] flex items-center gap-[40px] sm:gap-[52px]">
            <div>
              <img
                src={NikPf}
                alt="profile"
                className="h-[108px] w-[108px] sm:w-auto sm:h-auto"
              />
            </div>
            <div>
              <h5 className="mb-[5px] font-semibold text-[28px] leading-[42px] sm:text-[36px] sm:leading-[54px] text-white">
                Nik Shah
              </h5>
              <p className="text-[17px] sm:text-[22px] leading-[33px] font-normal text-white">
                CEO
              </p>
            </div>
          </div>
          <div
            className="w-[380px] sm:w-[482px] h-[180px] sm:h-[230px] bg-[#000] bg-opacity-65 border
           border-[#FFFFFF] rounded-lg border-opacity-30 px-[10px] sm:px-[30px] flex items-center gap-[40px] sm:gap-[52px]">
            <div>
              <img
                src={SidPf}
                alt="profile"
                className="h-[108px] w-[108px] sm:w-auto sm:h-auto"
              />
            </div>
            <div>
              <h5 className="mb-[5px] font-semibold text-[28px] leading-[42px] sm:text-[36px] sm:leading-[54px] text-white">
                Sid Samant
              </h5>
              <p className="text-[17px] sm:text-[22px] leading-[33px] font-normal text-white">
                Portfolio Manager
              </p>
            </div>
          </div>
          <div
            className="w-[380px] sm:w-[482px] h-[180px] sm:h-[230px] bg-[#000] bg-opacity-65 border
           border-[#FFFFFF] rounded-lg border-opacity-30 px-[10px] sm:px-[30px] flex items-center gap-[40px] sm:gap-[52px]">
            <div>
              <img
                src={DevPf}
                alt="profile"
                className="h-[108px] w-[108px] sm:w-auto sm:h-auto"
              />
            </div>
            <div>
              <h5 className="mb-[5px] font-semibold text-[28px] leading-[42px] sm:text-[36px] sm:leading-[54px] text-white">
                Dev Seth
              </h5>
              <p className="text-[17px] sm:text-[22px] leading-[33px] font-normal text-white">
                Senior Quantitative Analyst
              </p>
            </div>
          </div>
        </div>

        <p className="text-[22px] px-3 sm:px-0 sm:text-[36px] flex flex-col sm:flex-row sm:justify-center sm:items-center text-left leading-[66px] font-normal text-white">
          Questions insights@home.llc{" "}
          <span className="sm:ml-[28px] text-[#FF5D7F] font-semibold text-[36px] text-left sm:text-[64px]">
            insights@home.llc
          </span>
        </p>
      </div>
    </div>
  );
};

export default LastUpdated;
