import React from "react";
import popularMarketDesktop from "../../assets/msa-prediction/popular-markets-desktop.png";
import popularMarketMobile from "../../assets/msa-prediction/popular-markets-mobile.png";

const PopularMarketProjections = () => {
  return (
    <div className="w-full h-full px-[64px]">
      <img
        src={popularMarketDesktop}
        className="h-full w-full hidden sm:block"
        alt="popular market research"
      />

      <img
        src={popularMarketMobile}
        className="h-full w-full block sm:hidden"
        alt="popular market research"
      />
    </div>
  );
};

export default PopularMarketProjections;
