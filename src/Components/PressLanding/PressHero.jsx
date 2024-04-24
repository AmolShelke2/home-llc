import React, { useState } from "react";
import yahoo from "../../assets/press/Yahoo.svg";
import { ScrollerSection } from "../EquityLanding/ScrollerSection";
import article1 from "../../assets/press/article-1.png";
import company1 from "../../assets/press/article-company-1.svg";
import { pressData } from "../../data";

const PressHero = () => {
  const [selectedArticle, setSelectedArticle] = useState(pressData[0]);

  return (
    <div className="w-full h-full sm:h-[1117px] bg-press-landing bg-no-repeat bg-cover bg-center">
      <div className="h-full w-full bg-hero-section-overlay bg-cover">
        <div className="flex flex-col sm:flex-row justify-center items-center h-full sm:h-[88%]">
          <div
            className="w-full sm:w-full 2xl:max-w-[1571px] h-full mb-8 sm:mb-0 sm:h-[670px] 
          2xl:mx-auto flex flex-col sm:flex-row items-start sm:items-end gap-[50px] sm:gap-[113px]">
            <div className="w-full h-full px-4 sm:px-0 sm:w-[1012px] sm:h-[416px] mt-[100px] sm:mt-0">
              <div className="mb-[40px] sm:mb-[80px]">
                <img
                  src={selectedArticle.companyLogo}
                  height={59}
                  width={159}
                  alt="yahoo"
                />
              </div>

              <div>
                <span className="text-[22px] leading-[17px] text-[#B0AEAE] sm:mb-[15px]">
                  {selectedArticle.date}
                </span>

                <h4
                  className="text-[24px] leading-[40px] sm:text-[64px] 
                sm:leading-[89px] font-[275px] text-white mb-[50px] mt-10 sm:mt-0">
                  {selectedArticle.title}
                </h4>

                <div className="flex items-center gap-[15px] text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_143_179)">
                      <path
                        d="M14.8783 15.6905L1.62207 2.4605V14.6563H0.30957V0.21875H14.7471V1.53125H2.55001L15.7813 14.7875L14.8783 15.6905Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_143_179">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <a href="#" className="text-white text-[14px] leading-[14px]">
                    Read Article
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:px-0 sm:w-[446px] h-full flex flex-col gap-[50px]">
              {pressData.map((data) => (
                <button
                  className="w-full h-[130px] flex items-center gap-[22px] bg-[#ffffff] bg-opacity-[15%] rounded-md"
                  onClick={() => setSelectedArticle(data)}
                  key={data.id}>
                  <div className="w-[25%] h-[130px] object-cover">
                    <img
                      src={data.image}
                      alt="article-1"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="w-[75%] py-2 sm:py-[24px]">
                    <div className="flex items-end gap-[10px] mb-[15px]">
                      <img src={data.companyLogo} alt="yahoo" />

                      <svg
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2.5" r="2" fill="#D9D9D9" />
                      </svg>

                      <span className=" text-[#B0AEAE] text-[16px] leading-[16px] font-medium">
                        {data.date}
                      </span>
                    </div>

                    <h5 className="text-left text-[16px] leading-[24px] font-normal text-white">
                      {data.title}
                    </h5>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <ScrollerSection />
      </div>
    </div>
  );
};

export default PressHero;
