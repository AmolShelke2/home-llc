import React from "react";
import images from "../../utils";

export const ScrollerSection = () => {
  return (
    <div className="w-full h-[80px] border-t border-white scrolling-logos hover:cursor-pointer py-8">
      <div className="flex justify-center items-center scroll-animation space-x-16 text-white text-4xl">
        {images.map((src) => (
          <div
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            key={src.id}>
            <img
              height={30}
              src={src.image}
              alt="company-logos"
              className="h-[30px] w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
