import React from "react";
import HeroSection from "../Components/EquityLanding/HeroSection";
import HowItWorks from "../Components/EquityLanding/HowItWorks";
import PriceCalculator from "../Components/EquityLanding/PriceCalculator";
import StandsOut from "../Components/EquityLanding/StandsOut";
import NeedFromUs from "../Components/EquityLanding/NeedFromUs";
import Header from "../Components/Header/Header";

const EquityLandingPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <StandsOut />
      <PriceCalculator />
      <NeedFromUs />
    </div>
  );
};

export default EquityLandingPage;
