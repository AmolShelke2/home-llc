import React, { useState } from "react";
import calculatorSVG from "../../assets/buyer-landing/Vector.png";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import dollarSvg from "../../assets/dollar.svg";

const Calculator = () => {
  const [homeValue, setHomeValue] = useState(1970000);
  const [stateValue, setStateValue] = useState("");
  const [savings, setSavings] = useState(0);

  const calculateSavings = (value) => {
    const savingsValue = value * 0.01;
    setSavings(savingsValue);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.trim() === "") {
      setHomeValue(0);
      setSavings(0);
    } else {
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
      setHomeValue(numericValue);
      calculateSavings(numericValue);
    }
  };
  const handleIncrement = () => {
    setHomeValue(homeValue + 1);
    calculateSavings(homeValue + 1);
  };

  const handleDecrement = () => {
    if (homeValue > 1) {
      setHomeValue(homeValue - 1);
      calculateSavings(homeValue - 1);
    }
  };

  return (
    <div className="w-full h-full px-2 sm:h-[660px] bg-[#0041A3] relative">
      <img src={calculatorSVG} alt="calculator" className="absolute right-0" />
      <h4 className="text-center text-2xl  sm:text-[40px] sm:leading-[82.14px] font-semibold text-[#ffffff] mb-10 pt-20">
        Calculator
      </h4>

      <div className="flex flex-col sm:gap-2 lg:flex-row w-full 2xl:max-w-[1580px] xl:mx-auto px-2">
        {/* left side */}
        <div className="w-full 2xl:w-[50%] flex flex-col gap-8 sm:gap-20 border-r-0 lg:border-r">
          <div className="flex flex-col">
            <label className="text-xl font-normal text-white mb-4">
              Your Home Value is:
            </label>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="$1,970,000"
                value={`$${homeValue.toLocaleString()}`}
                onChange={handleInputChange}
                className="w-full lg:w-[650px] border-b bg-transparent outline-none text-[36px] font-semibold h-[54px] text-white placeholder:text-white mt-1 py-2"
              />
              <div>
                <MdKeyboardArrowUp
                  size={40}
                  className="text-white cursor-pointer"
                  onClick={handleIncrement}
                />
                <MdKeyboardArrowDown
                  size={40}
                  className="text-white cursor-pointer"
                  onClick={handleDecrement}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-xl font-normal text-white mb-4">
              State:
            </label>
            <input
              className="lg:w-[650px] border-b bg-transparent outline-none xl:text-[36px] font-semibold h-[54px] text-white placeholder:text-white mt-1 py-2"
              type="text"
              placeholder="California"
              value={stateValue}
              onChange={(e) => setStateValue(e.target.value)}
            />
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-[50%] lg:pl-[54px]">
          <div className="flex items-center gap-4 mb-8 sm:mb-16">
            <img src={dollarSvg} alt="dollar" />
            <h4 className="text-2xl sm:text-[48px] font-normal sm:leading-[69px] text-white">
              Total Savings
            </h4>
          </div>
          <div className="flex items-center gap-4 sm:gap-[139px] mb-[50px]">
            <p className="text-white text-xl font-medium">
              Traditional Agent :
            </p>
            <span className="text-[48px] leading-[70px] font-semibold text-white">
              $0
            </span>
          </div>
          <div className="flex flex-col 2xl:flex-row items-start 2xl:items-center gap-4 2xl:gap-[139px] 2xl:mb-[50px]">
            <p className="text-white lg:text-xl font-medium capitalize">
              working with us :
            </p>
            <button className="text-xl sm:text-[48px] sm:leading-[70px] font-semibold text-white px-8 py-2 2xl:w-[312px] md:h-[90px] rounded-lg bg-[#ED5272]">
              {savings.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
