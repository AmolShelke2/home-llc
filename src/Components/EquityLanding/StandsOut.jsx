import React from "react";
import standOutHero from "../../assets/standout-hero.png";
import logo from "../../assets/logo_upscaled 2.png";
import checkIcon from "../../assets/check-icon.svg";

const StandsOut = () => {
  return (
    <div className="h-full w-full bg-[#FEF9F0] pt-[90px]">
      <div className="w-full px-4 xl:max-w-[1580px] mx-auto mb-20">
        <h4 className="text-[22px] leading-[46px] xl:text-[48px] xl:leading-[66px] text-[#18191F] font-semibold mb-10 capitalize">
          How <span className="text-[#ED5272]">Home.LLC</span> stands out
        </h4>
      </div>

      <div className="flex w-full gap-4 overflow-x-auto">
        <div className="w-[20%] hidden md:block">
          <img
            src={standOutHero}
            alt="stand-hero"
            className="object-cover h-full"
          />
        </div>
        <div className="w-full md:w-[75%] pr-0 xl:pr-[131px] xl:pb-24 px-2">
          <table className="w-full">
            <thead className="border-b-2 border-dashed">
              <tr className="border-b-2 border-dashed">
                <td className="w-[140px]"></td>
                <td className="border-r-2 border-dashed text-center p-4 flex items-center justify-center bg-[#AEE5D833] bg-opacity-25 rounded-lg">
                  <img src={logo} alt="company-logo" />
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Credit Card
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  HELOC/ HELoan
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Reverse Mortgage
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-dashed text-left">
                <td>Eligibility</td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-25 flex flex-col items-center lg:items-start gap-2">
                  <img src={checkIcon} alt="check-icon" />
                  <p>Likely Eligible</p>
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Likely Eligible
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Likely Eligible
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Only if you're over 62
                </td>
              </tr>
              <tr className="border-b-2 border-dashed text-left">
                <td>Term</td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-25 flex flex-col items-center lg:items-start gap-2">
                  <img src={checkIcon} alt="check-icon" />
                  <p>Up to 30 years</p>
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  To calculate*
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  10-15 years
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  10-15 years
                </td>
              </tr>
              <tr className="border-b-2 border-dashed text-left">
                <td>Minimum monthly payment</td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-25 flex flex-col items-center lg:items-start gap-2">
                  <img src={checkIcon} alt="check-icon" />
                  <p>$0</p>
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  $1,416
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  $588 - $606
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  $0
                </td>
              </tr>
              <tr className="border-b-2 border-dashed text-left">
                <td>Pre-payment penalty</td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-25 flex flex-col items-center lg:items-start gap-2">
                  <img src={checkIcon} alt="check-icon" />
                  <p>No penalty</p>
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  No penalty
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Pre-payment penalty
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Pre-payment penalty
                </td>
              </tr>
              <tr className="border-b-2 border-dashed text-left">
                <td>Interest rate</td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-25 flex flex-col items-center lg:items-start gap-2">
                  <img src={checkIcon} alt="check-icon" />
                  <p>Not applicable</p>
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  22.21%
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  7.30% - 7.44%
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  7.30% - 7.44%
                </td>
              </tr>
              <tr className="text-left">
                <td>Lifetime cost</td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-25 flex flex-col items-center lg:items-start gap-2">
                  <img src={checkIcon} alt="check-icon" />
                  <p>$50,000 to $100,000 over 30years</p>
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20">
                  Upto $141,028 over 42 years
                </td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20"></td>
                <td className="border-r-2 border-dashed text-center  p-4 bg-[#AEE5D833] bg-opacity-20"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StandsOut;
