import React, { useState } from "react";
import image1 from "../../assets/culture/image-1.png";
import image2 from "../../assets/culture/image-2.png";
import image3 from "../../assets/culture/image-3.png";

const CultureSummary = () => {
  const [selectedImage, setSelectedImage] = useState(image1);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="h-full sm:h-[1100px] w-full bg-[#0041A3] flex flex-col-reverse lg:flex-row overflow-hidden">
      <div className="w-full lg:w-[50%] h-full flex flex-col justify-start xl:justify-between">
        <div className="py-8 sm:py-[100px] px-2 sm:px-[20px] xl:py-[210px] xl:px-[90px]">
          <h3 className="text-[32px] leading-[42px] lg:text-[64px] lg:leading-[88px] font-extrabold text-[#FFFFFF] mb-[45px] uppercase">
            Culture Summary
          </h3>

          <ol className="list-decimal ml-8 text-left">
            <li className="text-[18px] leading-[30px] xl:text-[30px] text-[#FFFFFF] xl:leading-[50.4px] mb-2">
              We are a team, not a family.
            </li>
            <li className="text-[18px] leading-[30px] xl:text-[30px] text-[#FFFFFF] xl:leading-[50.4px] mb-2">
              Freedom and responsibility
            </li>
            <li className="text-[18px] leading-[30px] xl:text-[30px] text-[#FFFFFF] xl:leading-[50.4px]">
              Relaxed and aggressive.
            </li>
          </ol>
        </div>

        <div className="flex h-fit items-start w-full">
          <button
            className="h-fit w-[50%] relative"
            onClick={() => handleClick(image2)}>
            <img src={image2} alt="culture-summary" className="w-full" />
          </button>
          <button
            className="h-fit w-[50%] relative"
            onClick={() => handleClick(image3)}>
            <img src={image3} alt="culture-summary" className="w-full" />
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[50%] h-full">
        <img
          src={selectedImage}
          alt="culture-summary"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default CultureSummary;
