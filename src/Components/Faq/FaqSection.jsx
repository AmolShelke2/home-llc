import React, { useState, useEffect } from "react";
import { faqCategories } from "../../data";
import { faqsData } from "./faqData";

const FaqSection = () => {
  const [selectedFilter, setSelectedFilter] = useState(faqCategories[0]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const getCategorizedData = (selectedFilter, faqsData) => {
    if (selectedFilter.toLowerCase() === "all") {
      return faqsData;
    } else {
      return faqsData.filter(
        (faq) => faq.category.toLowerCase() === selectedFilter.toLowerCase()
      );
    }
  };

  const filteredFaqsData = getCategorizedData(selectedFilter, faqsData);

  useEffect(() => {
    setCurrentQuestion(filteredFaqsData[0]);
  }, [selectedFilter]);

  const handleQuestionClick = (faq) => {
    setCurrentQuestion(faq);
  };

  return (
    <div className="w-full bg-[#0041A3] h-full py-10 lg:pt-[100px]">
      <div className="w-[400px] lg:w-full overflow-x-auto pb-[20px] hide-scrollbar px-4 xl:px-[40px]">
        <div className="w-full flex gap-[34px] items-center justify-start sm:px-2 mb-[96px]">
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

      <div className="px-4 xl:px-[40px] flex items-start gap-40">
        <div className="overflow-y-auto h-[841px] border-2 border-white w-[817px] px-[34px] pt-[64px] rounded-md custom-scrollbar">
          <div>
            {filteredFaqsData.length === 0 ? (
              <p className="text-white font-medium text-2xl text-center">
                No Question found
              </p>
            ) : (
              filteredFaqsData.map((faq) => (
                <p
                  key={faq.id}
                  onClick={() => handleQuestionClick(faq)}
                  className={`text-[26px] leading-[54px] font-semibold text-white cursor-pointer w-full mb-[20px] ${
                    currentQuestion?.id === faq.id
                      ? "bg-[#ED5272] rounded-[50px]"
                      : ""
                  } py-[20px] pl-[29px]`}>
                  {faq.question}
                </p>
              ))
            )}
          </div>
        </div>
        <div className="w-[675px] h-auto">
          {currentQuestion && (
            <div className="text-[20px] leading-[42px] font-normal text-white">
              {currentQuestion.answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
