import React from "react";
import MsaHero from "../Components/MsaLanding/MsaHero";
import MetrosMap from "../Components/MsaLanding/MetrosMap";
import HowItWorks from "../Components/MsaLanding/HowItWorks";
import ResearchFramework from "../Components/MsaLanding/ResearchFramework";
import PriceProjection from "../Components/MsaLanding/PriceProjection";
import SmallSection from "../Components/MsaLanding/SmallSection";
import PopularMarketProjections from "../Components/MsaLanding/PopularMarketProjections";
import LastUpdated from "../Components/MsaLanding/LastUpdated";
import NeedFromUs from "../Components/EquityLanding/NeedFromUs";

const MsaLandingPage = () => {
  return (
    <div>
      <MsaHero />
      <MetrosMap />
      <HowItWorks />
      <ResearchFramework />
      <SmallSection
        title={"We report our 2023 projections📈for each MSA here:"}
        subtitle={"(Use the search menu to compare any two metros)"}
      />
      <PriceProjection />
      <SmallSection
        title={"How do major markets fare? "}
        subtitle={
          "Find our projections in the charts below (Use the search icon to add or remove markets)"
        }
      />

      <PopularMarketProjections />
      <LastUpdated />
      <NeedFromUs />
    </div>
  );
};

export default MsaLandingPage;
