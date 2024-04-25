import React from "react";
import priceProjectionDesktop from "../../assets/msa-prediction/price-projection-desktop.png";
import priceProjectionMobile1 from "../../assets/msa-prediction/price-projection-mobile-1.png";
import priceProjectionMobile2 from "../../assets/msa-prediction/price-projection-mobile-2.png";
import priceProjectionMobile3 from "../../assets/msa-prediction/price-projection-mobile-3.png";

const PriceProjection = () => {
  return (
    <div className="w-full h-full py-[59px] px-[6px] sm:px-[30px]">
      <img
        src={priceProjectionDesktop}
        alt=""
        className="hidden md:block h-full w-full object-cover"
      />

      <img
        src={priceProjectionMobile1}
        alt=""
        className="h-full w-full block sm:hidden"
      />
      <img
        src={priceProjectionMobile2}
        alt=""
        className="h-full w-full block sm:hidden"
      />
      <img
        src={priceProjectionMobile3}
        alt=""
        className="h-full w-full block sm:hidden"
      />
    </div>
  );
};

export default PriceProjection;
