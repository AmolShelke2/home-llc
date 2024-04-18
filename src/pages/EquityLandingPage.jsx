import React from "react";
import HeroSection from "../Components/EquityLanding/HeroSection";
import HowItWorks from "../Components/EquityLanding/HowItWorks";
import PriceCalculator from "../Components/EquityLanding/PriceCalculator";

const EquityLandingPage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <HowItWorks />
      <PriceCalculator />
    </div>
  );
};

export default EquityLandingPage;
