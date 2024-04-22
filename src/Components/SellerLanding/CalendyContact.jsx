import React from "react";

const CalendyContact = () => {
  return (
    <div className="w-full h-full sm:h-[1028px] bg-calendy-contact-section bg-no-repeat bg-center bg-cover pt-[90px] px-2">
      <h4 className="text-center text-2xl sm:text-[46px] sm:leading-[82.1px] font-semibold text-white">
        Sell Your Property with Confidence
      </h4>

      <p className="text-lg sm:text-[24px] font-light sm:leading-[145%] text-white text-center mt-10">
        Maximize Your Property's Potential - Schedule Your Free Consultation
        Today!
      </p>

      <div className="w-[369px] h-[744px] sm:w-[1004px] sm:h-[680px] mx-auto mt-16">
        <iframe
          className="h-full w-full hide-scrollbar rounded-lg"
          title="calendy"
          src="https://calendly.com/rukesh-d/30min?month=2024-04"
          frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default CalendyContact;
