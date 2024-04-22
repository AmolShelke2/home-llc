import React from "react";
import SellerHero from "../Components/SellerLanding/SellerHero";
import HomeOwnerShip from "../Components/SellerLanding/HomeOwnerShip";
import WhyChooseAgent from "../Components/SellerLanding/WhyChooseAgent";
import CalendyContact from "../Components/SellerLanding/CalendyContact";
import CommisionCalculator from "../Components/SellerLanding/CommisionCalculator";

const Seller = () => {
  return (
    <div>
      <SellerHero />
      <HomeOwnerShip />
      <WhyChooseAgent />
      <CommisionCalculator />
      <CalendyContact />
    </div>
  );
};

export default Seller;
