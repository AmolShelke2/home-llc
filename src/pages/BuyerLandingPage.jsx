import React from "react";
import BuyerHero from "../Components/BuyerLanding/BuyerHero";
import OptimizeExperience from "../Components/BuyerLanding/OptimizeExperience";
import NeedFromUs from "../Components/EquityLanding/NeedFromUs";
import Calculator from "../Components/BuyerLanding/Calculator";
import CalendyContact from "../Components/SellerLanding/CalendyContact";

const BuyerLandingPage = () => {
  return (
    <div>
      <BuyerHero />
      <OptimizeExperience />
      <Calculator />
      <NeedFromUs />
      <CalendyContact title={"Buy"} />
    </div>
  );
};

export default BuyerLandingPage;
