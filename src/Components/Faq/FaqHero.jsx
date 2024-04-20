import React, { useState } from "react";

const FaqHero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full h-[600px] sm:h-[773px] bg-faq-landing bg-no-repeat bg-cover bg-center">
      <div className="h-full bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full justify-center lg:justify-end lg:items-center md:h-[80%]">
          <h2 className="text-3xl lg:text-[64px] lg:leading-[82.4px] text-center text-white font-[275] mb-[60px]">
            How Can We <span className="font-semibold">Help You</span>
          </h2>

          <div className="w-full lg:w-[1100px] bg-transparent relative px-2">
            <input
              type="text"
              placeholder="Find answers for what you are looking for"
              className="text-[#ffffff] w-full py-4 sm:pl-6 outline-none bg-transparent border-b"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-3 cursor-pointer">
              <svg
                width="27"
                height="27"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  id="Vector"
                  d="M29 29L22.4856 22.4856M22.4856 22.4856C23.5999 21.3713 24.4838 20.0484 25.0869 18.5924C25.6899 17.1365 26.0003 15.5761 26.0003 14.0002C26.0003 12.4243 25.69 10.8638 25.0869 9.4079C24.4838 7.95198 23.5999 6.62909 22.4856 5.51477C21.3713 4.40045 20.0484 3.51652 18.5924 2.91346C17.1365 2.31039 15.5761 2 14.0002 2C12.4243 2 10.8638 2.31039 9.4079 2.91346C7.95198 3.51652 6.62909 4.40045 5.51477 5.51477C3.2643 7.76524 2 10.8175 2 14.0002C2 17.1828 3.2643 20.2351 5.51477 22.4856C7.76524 24.736 10.8175 26.0003 14.0002 26.0003C17.1828 26.0003 20.2351 24.736 22.4856 22.4856Z"
                  stroke="#ffffff"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
