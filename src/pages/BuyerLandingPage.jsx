import React from "react";
import BuyerHero from "../Components/BuyerLanding/BuyerHero";
import OptimizeExperience from "../Components/BuyerLanding/OptimizeExperience";
import NeedFromUs from "../Components/EquityLanding/NeedFromUs";
import Calculator from "../Components/BuyerLanding/Calculator";

const BuyerLandingPage = () => {
  return (
    <div>
      <BuyerHero />
      <OptimizeExperience />
      <Calculator />
      <NeedFromUs />
    </div>
  );
};

export default BuyerLandingPage;
