import React from "react";
import CultureHero from "../Components/CultureLanding/CultureHero";
import CulturePrinciples from "../Components/CultureLanding/CulturePrinciples";
import CultureSummary from "../Components/CultureLanding/CultureSummary";

const CulturePage = () => {
  return (
    <div>
      <CultureHero />
      <CultureSummary />
      <CulturePrinciples />
    </div>
  );
};

export default CulturePage;
