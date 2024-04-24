import React, { useState } from "react";
import calculatorImage from "../../assets/calculator-image.png";
import upArrow from "../../assets/upArrow.svg";
import downArrow from "../../assets/downArrow.svg";

const PriceCalculator = () => {
  const [homeValue, setHomeValue] = useState(500000);
  const [cashValue, setCashValue] = useState(75000);
  const [years, setYears] = useState(5);
  const [months, setMonths] = useState(0);
  const [homeWorth, setHomeWorth] = useState(75000);
  const [shareValue, setShareValue] = useState(75000);

  const handleValueChange = (valueSetter, increment) => {
    valueSetter((prevValue) => prevValue + increment);
  };

  const handleHomeValueChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setHomeValue(newValue || 0);
  };

  const handleCashValueChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setCashValue(newValue || 0);
  };

  const handleYearsChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setYears(newValue || 0);
  };

  const handleMonthsChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setMonths(newValue || 0);
  };

  const handleHomeWorthChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setHomeWorth(newValue || 0);
  };

  const handleShareValueChange = (event) => {
    const newValue = parseInt(event.target.value.replace(/[^\d]/g, ""), 10);
    setShareValue(newValue || 0);
  };

  return (
    <div className="w-full h-auto xl:h-[762px] xl:py-16 mb-16">
      <div className="w-full xl:max-w-[1580px] mx-auto h-full xl:h-[591px]">
        <h4
          className="text-[20px] leading-[30px] xl:text-[48px] xl:leading-[66px] text-white sm:text-[#212529]
         sm:font-semibold mb-10 text-center sm:text-left w-full bg-[#ED5272]
          sm:bg-transparent py-[16px] sm:py-0 uppercase sm:capitalize font-normal">
          Pricing Calculator
        </h4>

        <div className="inline-flex w-full flex-col lg:flex-row items-center gap-[20px] lg:gap-[90px] overflow-hidden px-2">
          <div className="w-full h-auto lg:w-[558px] lg:h-[562px]">
            <div className="flex gap-12 p-4 items-center border-b border-[#B2B2B2] mb-2">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                My Home Value is
              </p>

              <div className="flex items-center gap-4">
                <input
                  type="text"
                  value={`$${homeValue.toLocaleString()}`}
                  onChange={handleHomeValueChange}
                  placeholder="$500,000"
                  className="border-none outline-none w-[175px] text-[36px] leading-[54px] font-semibold text-[#212529]"
                />
                <div className="flex flex-col gap-2 items-center">
                  <button onClick={() => handleValueChange(setHomeValue, 1)}>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button onClick={() => handleValueChange(setHomeValue, -1)}>
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

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={`$${cashValue.toLocaleString()}`}
                  onChange={handleCashValueChange}
                  placeholder="$75000"
                  className="border-none outline-none w-[145px] text-[36px] leading-[54px] font-semibold text-[#212529] mr-2"
                />
                <span className="font-light text-sm whitespace-nowrap">
                  In Cash
                </span>
                <div className="flex flex-col gap-2 items-center">
                  <button onClick={() => handleValueChange(setCashValue, 1)}>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button onClick={() => handleValueChange(setCashValue, -1)}>
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
            <div className="flex gap-4 sm:gap-12 p-4 items-center border-b border-[#B2B2B2] mb-2">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                when i settled in
              </p>

              <div className="inline-flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={years}
                      onChange={handleYearsChange}
                      placeholder="5"
                      className="border-none outline-none w-[23px] text-[36px] leading-[54px] font-semibold text-[#212529] mr-1"
                    />
                    <span className="font-light text-sm whitespace-nowrap">
                      in years
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 items-center">
                    <button onClick={() => handleValueChange(setYears, 1)}>
                      <img
                        src={upArrow}
                        alt="up-arrow"
                        width={14}
                        height={16}
                      />
                    </button>
                    <button onClick={() => handleValueChange(setYears, -1)}>
                      <img
                        src={downArrow}
                        alt="down-arrow"
                        width={14}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={months}
                      onChange={handleMonthsChange}
                      placeholder="5"
                      className="border-none outline-none w-[23px] text-[36px] leading-[54px] font-semibold text-[#212529] mr-1"
                    />
                    <span className="font-light text-sm whitespace-nowrap">
                      months
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <button onClick={() => handleValueChange(setMonths, 1)}>
                      <img
                        src={upArrow}
                        alt="up-arrow"
                        width={14}
                        height={16}
                      />
                    </button>
                    <button onClick={() => handleValueChange(setMonths, -1)}>
                      <img
                        src={downArrow}
                        alt="down-arrow"
                        width={14}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-12 p-4 items-center justify-start border-b border-[#B2B2B2] mb-2">
              <p className="capitalize text-sm lg:text-xl text-[#343A40] font-light w-[120px] lg:w-[199px]">
                and my home’s value is
              </p>

              <div className="flex justify-start items-center gap-4">
                <input
                  type="text"
                  value={`$${homeWorth.toLocaleString()}`}
                  onChange={handleHomeWorthChange}
                  placeholder="$75,000"
                  className="border-none outline-none w-[148px] text-[36px] leading-[54px] font-semibold text-[#212529]"
                />

                <div className="flex flex-col gap-2 items-center">
                  <button onClick={() => handleValueChange(setHomeWorth, 1)}>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button onClick={() => handleValueChange(setHomeWorth, -1)}>
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
                <input
                  type="text"
                  value={`$${shareValue.toLocaleString()}`}
                  onChange={handleShareValueChange}
                  placeholder="$75,000"
                  className="border-none outline-none w-[148px] text-[36px] leading-[54px] font-semibold text-[#212529]"
                />
                <div className="flex flex-col gap-2 items-center">
                  <button onClick={() => handleValueChange(setShareValue, 1)}>
                    <img src={upArrow} alt="up-arrow" width={10} height={16} />
                  </button>
                  <button onClick={() => handleValueChange(setShareValue, -1)}>
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
