import React, { useState } from "react";
import { faqCategories } from "../../utils";

const FaqSection = () => {
  const [selectedFilter, setSelectedFilter] = useState(faqCategories[0]);

  return (
    <div className="w-full bg-[#0041A3] h-[750px] pt-10 lg:pt-[100px]">
      <div className="w-[400px] lg:w-full overflow-x-auto pb-[20px] hide-scrollbar">
        <div className="w-full flex gap-[34px] items-center justify-start sm:px-2">
          {faqCategories.map((category) => (
            <button
              onClick={() => setSelectedFilter(category)}
              className={`py-[10px] px-[44px] rounded-[50px] border whitespace-nowrap text-white border-white font-medium ${
                selectedFilter === category
                  ? "bg-[#ED5272] text-white border-0"
                  : ""
              }`}
              key={category}>
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
