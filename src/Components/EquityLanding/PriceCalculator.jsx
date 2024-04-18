import React from "react";
import calculatorImage from "../../assets/calculator-image.png";
import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";

const PriceCalculator = () => {
  return (
    <div className="w-full h-auto xl:h-[762px] py-8 xl:py-16">
      <div className="w-full px-4 xl:max-w-[1580px] mx-auto h-full xl:h-[591px]">
        <h4 className="text-[22px] leading-[46px] xl:text-[48px] xl:leading-[66px] text-[#212529] font-semibold mb-12">
          Pricing Calculator
        </h4>

        <div className="inline-flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[90px] overflow-hidden">
          <div className="w-full h-auto lg:w-[558px] lg:h-[562px]">
            <div className="flex gap-12 p-4 items-center border-b border-[#B2B2B2] mb-2">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                My Home Value is
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[#212529] font-semibold text-[24px] lg:text-[36px] leading-[38px] lg:leading-[54px]">
                  $500,000
                </p>
                <div className="flex flex-col gap-2 items-center">
                  <button>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button>
                    <img
                      src={downArrow}
                      alt="down-arrow"
                      width={10}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-12 p-4 items-center border-b border-[#B2B2B2] mb-2">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                I can get upto
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[#212529] flex items-center gap-2 font-semibold text-[24px] lg:text-[36px] leading-[38px] lg:leading-[54px]">
                  $75,000 <span className="font-light text-sm">In Cash</span>
                </p>
                <div className="flex flex-col gap-2 items-center">
                  <button>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button>
                    <img
                      src={downArrow}
                      alt="down-arrow"
                      width={10}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-12 p-4 items-center border-b border-[#B2B2B2] mb-2">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                when i settled in
              </p>

              <div className="inline-flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-[#212529] flex items-center gap-2 font-semibold text-[24px] lg:text-[36px] leading-[38px] lg:leading-[54px]">
                    5 <span className="font-light text-sm">years</span>
                  </p>
                  <div className="flex flex-col gap-2 items-center">
                    <button>
                      <img
                        src={upArrow}
                        alt="up-arrow"
                        width={10}
                        height={16}
                      />
                    </button>
                    <button>
                      <img
                        src={downArrow}
                        alt="down-arrow"
                        width={10}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[#212529] flex items-center gap-2 font-semibold text-[24px] lg:text-[36px] leading-[38px] lg:leading-[54px]">
                    0 <span className="font-light text-sm">Months</span>
                  </p>
                  <div className="flex flex-col gap-2 items-center">
                    <button>
                      <img
                        src={upArrow}
                        alt="up-arrow"
                        width={10}
                        height={16}
                      />
                    </button>
                    <button>
                      <img
                        src={downArrow}
                        alt="down-arrow"
                        width={10}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-12 p-4 items-center border-b border-[#B2B2B2] mb-2">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                and my home’s value is
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[#212529] font-semibold text-[24px] lg:text-[36px] leading-[38px] lg:leading-[54px]">
                  $75,000
                </p>
                <div className="flex flex-col gap-2 items-center">
                  <button>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button>
                    <img
                      src={downArrow}
                      alt="down-arrow"
                      width={10}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-12 p-4 items-center border-b border-[#B2B2B2]">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                where my share is
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[#212529] font-semibold text-[24px] lg:text-[36px] leading-[38px] lg:leading-[54px]">
                  $75,000
                </p>
                <div className="flex flex-col gap-2 items-center">
                  <button>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button>
                    <img
                      src={downArrow}
                      alt="down-arrow"
                      width={10}
                      height={16}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={calculatorImage} alt="calculated-price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
