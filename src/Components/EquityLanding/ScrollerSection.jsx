import React from "react";
import images from "../../utils";
import Slider from "react-infinite-logo-slider";

export const ScrollerSection = () => {
  return (
    <div className="w-full h-[100px] border-t border-gray-400 hover:cursor-pointer py-4">
      <Slider
        width="200px"
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}>
        {images.map((src) => (
          <Slider.Slide key={src.id}>
            <img
              src={src.image}
              alt="company-logos"
              height={30}
              width={140}
              className=" text-white"
            />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};
