import React from "react";
import metroMapDesktop from "../../assets/msa-prediction/metros-map-desktop.png";
import metroMapMobile from "../../assets/msa-prediction/metros-map-mobile.png";

const MetrosMap = () => {
  return (
    <div className="h-full w-full  px-2 sm:px-[29px] py-2 sm:py-[30px]">
      <img
        src={metroMapDesktop}
        alt="map"
        className="hidden sm:block w-full h-full"
      />

      <img
        src={metroMapMobile}
        alt="map"
        className="block sm:hidden w-full h-full"
      />
    </div>
  );
};

export default MetrosMap;
