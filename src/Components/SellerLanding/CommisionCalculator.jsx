import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import homeLLC from "../../assets/seller-landing/home-llc.png";

const CommisionCalculator = () => {
  const [homeValue, setHomeValue] = useState(500000);

  const handleIncrement = () => {
    setHomeValue(homeValue + 1);
  };

  const handleDecrement = () => {
    if (homeValue > 1) {
      setHomeValue(homeValue - 1);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.trim() === "") {
      setHomeValue(0);
    } else {
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
      setHomeValue(isNaN(numericValue) ? 0 : numericValue); // Set home value to 0 if NaN
    }
  };

  // Calculate commissions
  const commission1Percent = homeValue * 0.01;
  const commission3Percent = homeValue * 0.03;

  return (
    <div className="w-full h-full sm:h-[850px] bg-[#FEF9F0] pb-[90px] sm:pb-0 pt-[90px] sm:px-0">
      <div className="mb-[86px] sm:mb-[60px] px-6">
        <h4 className="text-center text-[#18191F] text-[24px] leading-[34px] sm:text-[46px] sm:leading-[66px] font-semibold capitalize mb-8">
          Commission{" "}
          <span className="font-bold text-[#ED5272]">Comparison </span>{" "}
          calculator
        </h4>

        <p className="text-center text-[16px] sm:text-[20px] leading-[145%] font-light">
          Slashed to just 1% - Triple Savings Guaranteed!
        </p>
      </div>

      <div className="flex flex-col gap-[35px] sm:gap-0 sm:flex-row h-full sm:h-[517px] px-4 sm:px-12">
        <div className="w-full sm:w-[40%] flex justify-between sm:items-center border-b sm:border-b-0 sm:border-r-2">
          <div className="flex w-full items-center justify-between sm:px-12">
            <p className="text-[16px] sm:text-[22px] font-medium capitalize text-[#343A40] whitespace-nowrap">
              My home value is :{" "}
            </p>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="$500,000"
                value={`$${homeValue.toLocaleString()}`}
                onChange={handleInputChange}
                className="bg-transparent outline-none text-[16px] text-right sm:text-[36px] font-semibold w-[180px] h-[54px] text-[#ED5272] mr-4 placeholder:text-[#ED5272] mt-1 py-2"
              />
              <div className="ml-2 sm:ml-0">
                <MdKeyboardArrowUp
                  className="text-[#212529] cursor-pointer text-xl sm:text-4xl"
                  onClick={handleIncrement}
                />
                <MdKeyboardArrowDown
                  className="text-[#212529] cursor-pointer text-xl sm:text-4xl"
                  onClick={handleDecrement}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[60%] sm:px-16">
          <img
            src={homeLLC}
            alt="home-llc "
            className="w-[132px] h-[34px] sm:w-auto sm:h-auto mb-8"
          />

          <div className="mb-8">
            <p className="text-[14px] sm:text-[24px] font-semibold text-[#18191F] leading-[145%] mb-4">
              Lower 1% commissions
            </p>
            <div className="w-full h-[46px] sm:h-[91px] bg-[#E9ECEF] relative rounded-lg">
              <div className="w-[30%] bg-[#ED5272] absolute left-0 top-0 h-full"></div>

              <p className="text-right py-4 px-8 text-[#ED5272] text-[16px] sm:text-[36px] font-semibold">
                ${commission1Percent.toLocaleString()}
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-[16px] font-medium">Other home agents</h5>
            <p className="text-[14px] sm:text-[24px] font-normal text-[#18191F] leading-[145%] mb-4">
              Lower 3% commissions
            </p>
            <div className="w-full h-[46px] sm:h-[91px] bg-[#E9ECEF] relative rounded-lg">
              <div className="w-[60%] bg-[#B6CCFE] absolute left-0 top-0 h-full"></div>

              <p className="text-right py-4 px-8 text-[#18191F] text-[16px] sm:text-[36px] font-semibold">
                ${commission3Percent.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommisionCalculator;
