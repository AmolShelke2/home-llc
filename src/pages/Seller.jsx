import React from "react";
import SellerHero from "../Components/SellerLanding/SellerHero";
import HomeOwnerShip from "../Components/SellerLanding/HomeOwnerShip";
import WhyChooseAgent from "../Components/SellerLanding/WhyChooseAgent";

const Seller = () => {
  return (
    <div>
      <SellerHero />
      <HomeOwnerShip />
      <WhyChooseAgent />
    </div>
  );
};

export default Seller;
