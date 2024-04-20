import React from "react";
import FaqHero from "../Components/Faq/FaqHero";
import FaqSection from "../Components/Faq/FaqSection";

const FaqPage = () => {
  return (
    <div className="overflow-x-hidden">
      <FaqHero />
      <FaqSection />
    </div>
  );
};

export default FaqPage;
