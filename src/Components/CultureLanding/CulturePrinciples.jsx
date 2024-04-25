import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { principlesData } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CulturePrinciples = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust this value to change the number of visible slides
    slidesToScroll: 1,
    autoplay: false, // Autoplay is handled by the setInterval in useEffect
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[1050px] w-full bg-culture-principle bg-no-repeat bg-cover bg-center pt-[40px] sm:pt-[165px]">
      <h2 className="text-[30px] leading-[40px] sm:text-[64px] sm:leading-[96px] text-center font-extrabold text-white tracking-[1%] uppercase">
        9 Culture Principles
      </h2>

      <Slider
        {...settings}
        ref={sliderRef}
        className="mt-[200px] sm:mt-[120px]">
        {principlesData.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt="" className="h-[217px]" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CulturePrinciples;
