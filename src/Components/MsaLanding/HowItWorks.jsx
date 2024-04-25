import React from "react";
import arrowDown from "../../assets/arrow-3.svg";
import home from "../../assets/msa-prediction/home.svg";
import supply from "../../assets/msa-prediction/supply.svg";
import demand from "../../assets/msa-prediction/demand.svg";

const btnLeft = [
  "Resale",
  "New Builds",
  "Seller Motivation",
  "Permits",
  "Delinquencies",
  "Cost (incl. land, material, labor)",
];

const btnsRight = [
  "Affordability",
  "Intensity",
  "Desirability",
  "Interest Rates",
  "High Wage Employees",
  "Crime",
  "Income",
  "Population (incl. Migration, Climate)",
  "List Prices",
  "Resilience to Stock Market",
  "Schools",
  "Property Taxes",
  "Resilience to Recession",
  "Property Taxes",
];

const HowItWorks = () => {
  return (
    <div className="w-full h-full lg:h-[1625px] bg-[#0041A3] py-20 sm:pt-[101px] relative">
      <h2 className="text-[22px] leading-[33px] text-white sm:text-[48px] sm:leading-[66px] font-semibold text-center capitalize mb-[24px]">
        How It Works
      </h2>

      <p className="text-white text-center text-[22px] leading-[33px] font-light mb-[20px]">
        We analyzed over 1000 factors and selected ones expected to impact the
        housing market in 2024
      </p>

      <div className="flex justify-center items-center mb-[30px]">
        <img src={arrowDown} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center mb-[16px]">
        <img src={home} alt="home-svg" className="mb-[24px]" />
        <h4 className="text-white text-center text-[36px] leading-[54px] font-light capitalize">
          house price in 2023
        </h4>
      </div>

      <div className="sm:max-w-[1540px] sm:mx-auto">
        <div className="h-[96px] border-r w-[2px] flex justify-center mx-auto"></div>
        <div className="w-[100%] border-b"></div>
        <div className="flex justify-between items-center sm:items-start">
          <div className="h-[200px] border-l flex items-center">
            <img
              src={supply}
              alt="supply"
              className="sm:absolute sm:top-[680px] sm:left-[140px]"
            />
          </div>
          <div className="h-[200px] border-r">
            <img
              src={demand}
              alt="supply"
              className="sm:absolute sm:top-[680px] sm:right-[150px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-[40px]">
        <button className="bg-white text-[#0041A3] w-[280px] py-2 text-center">
          Supply
        </button>
        <button className="bg-white text-[#0041A3] w-[280px] py-2 text-center">
          Demand
        </button>
      </div>
      <div className="w-full flex gap justify-between px-[40px]">
        <div className="w-[30%] h-full flex justify-start items-start flex-wrap gap-4 mt-12">
          {btnLeft.map((btn) => (
            <button
              key={btn}
              className="w-[265px] text-white text-[22px] leading-[42px] font-semibold  h-[100px] rounded-lg border">
              {btn}
            </button>
          ))}
        </div>
        <div className="w-[55%] flex items-end justify-end flex-wrap gap-6 mt-12">
          {btnsRight.map((btn) => (
            <button
              key={btn}
              className="w-[265px] text-white text-[22px] leading-[42px] font-semibold  h-[100px] rounded-lg border">
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
