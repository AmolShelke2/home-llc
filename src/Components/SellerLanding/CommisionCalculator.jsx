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
      console.log(homeValue);
    } else {
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
      setHomeValue(isNaN(numericValue) ? 0 : numericValue); // Set home value to 0 if NaN
      console.log(homeValue);
    }
  };

  return (
    <div className="w-full h-[850px] bg-[#FEF9F0] pt-[90px]">
      <div className="mb-[60px]">
        <h4 className="text-center text-[#18191F] text-[46px] leading-[66px] font-semibold capitalize mb-8">
          Commission{" "}
          <span className="font-bold text-[#ED5272]">Comparison </span>{" "}
          calculator
        </h4>

        <p className="text-center text-[20px] leading-[145%] font-light">
          Slashed to just 1% - Triple Savings Guaranteed!
        </p>
      </div>

      <div className="flex h-[517px] px-12">
        <div className="w-[40%] flex justify-between items-center border-r-2">
          <div className="flex w-full items-center justify-between px-12">
            <p className="text-[22px] font-medium capitalize text-[#343A40] whitespace-nowrap">
              My home value is :{" "}
            </p>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="$500,000"
                value={`$${homeValue.toLocaleString()}`}
                onChange={handleInputChange}
                className="bg-transparent outline-none text-[36px] font-semibold w-[200px] h-[54px] text-[#ED5272] placeholder:text-[#ED5272] mt-1 py-2"
              />
              <div>
                <MdKeyboardArrowUp
                  size={40}
                  className="text-[#212529] cursor-pointer"
                  onClick={handleIncrement}
                />
                <MdKeyboardArrowDown
                  size={40}
                  className="text-[#212529] cursor-pointer"
                  onClick={handleDecrement}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] px-16">
          <img src={homeLLC} alt="home-llc " className="mb-8" />

          <div className="mb-8">
            <p className="text-[24px] font-semibold text-[#18191F] leading-[145%] mb-4">
              Lower 1% commissions
            </p>
            <div className="w-full h-[91px] bg-[#E9ECEF] relative rounded-lg">
              <div className="w-[30%] bg-[#ED5272] absolute left-0 top-0 h-full"></div>

              <p className="text-right py-4 px-8 text-[#ED5272] text-[36px] font-semibold">
                $10,000
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-[36px] font-medium">Other home agents</h5>
            <p className="text-[24px] font-normal text-[#18191F] leading-[145%] mb-4">
              Lower 3% commissions
            </p>
            <div className="w-full h-[91px] bg-[#E9ECEF] relative rounded-lg">
              <div className="w-[60%] bg-[#B6CCFE] absolute left-0 top-0 h-full"></div>

              <p className="text-right py-4 px-8  text-[36px] font-normal text-[#212529]">
                $30,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommisionCalculator;
