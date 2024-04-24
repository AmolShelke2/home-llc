import React from "react";
import { ScrollerSection } from "../EquityLanding/ScrollerSection";

const SellerHero = () => {
  return (
    <div className="w-full h-full sm:h-screen bg-seller-landing bg-no-repeat bg-cover bg-center">
      <div className="h-full sm:h-screen bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full items-center sm:justify-center sm:h-[87%] mb-16 sm:mb-0">
          <h2 className="text-[32px] leading-[42px] lg:text-[64px] text-center lg:leading-[82.14px] font-[275] text-white capitalize mb-8 mt-40">
            Unleash the <span className="font-semibold">highest value</span>
            {""} for your home
          </h2>

          {/* row items */}
          <div className="flex flex-row items-center gap-8 sm:gap-8 mb-8 mt-40 sm:mt-0">
            <div className="border-r flex flex-col gap-1 items-center justify-center border-white sm:h-[64px] px-4 sm:px-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="block sm:hidden"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_21_2894)">
                  <path
                    d="M5.83329 8.33317V18.3332M12.5 4.89984L11.6666 8.33317H16.525C16.7837 8.33317 17.0389 8.39341 17.2703 8.50913C17.5017 8.62484 17.703 8.79284 17.8583 8.99984C18.0135 9.20683 18.1185 9.44713 18.1647 9.7017C18.211 9.95626 18.1974 10.2181 18.125 10.4665L16.1833 17.1332C16.0823 17.4794 15.8718 17.7835 15.5833 17.9998C15.2948 18.2162 14.9439 18.3332 14.5833 18.3332H3.33329C2.89127 18.3332 2.46734 18.1576 2.15478 17.845C1.84222 17.5325 1.66663 17.1085 1.66663 16.6665V9.99984C1.66663 9.55781 1.84222 9.13389 2.15478 8.82133C2.46734 8.50877 2.89127 8.33317 3.33329 8.33317H5.63329C5.94336 8.33301 6.24724 8.24635 6.51076 8.08294C6.77427 7.91953 6.98698 7.68585 7.12496 7.40817L9.99996 1.6665C10.3929 1.67137 10.7797 1.76498 11.1315 1.94033C11.4832 2.11569 11.7907 2.36826 12.0311 2.67917C12.2715 2.99009 12.4386 3.3513 12.5197 3.73584C12.6009 4.12037 12.5942 4.51828 12.5 4.89984Z"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_21_2894">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-white sm:mx-14 mb-2 sm:my-8 text-sm  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                Convenient
              </p>
            </div>
            <div className="border-r flex gap-1 flex-col items-center justify-center border-white sm:h-[64px] px-4 sm:px-0">
              <svg
                width="21"
                height="20"
                className="block sm:hidden"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.6961 17.5C10.4461 17.5 10.2067 17.455 9.97779 17.365C9.7489 17.275 9.5439 17.1394 9.36279 16.9583L4.09196 11.6667H6.44613L10.5503 15.7708C10.5781 15.7986 10.6025 15.8161 10.6236 15.8233C10.6447 15.8306 10.6689 15.8339 10.6961 15.8333C10.7233 15.8328 10.7478 15.8294 10.7695 15.8233C10.7911 15.8172 10.8153 15.7997 10.842 15.7708L16.4045 10.1875C16.7239 9.86806 16.967 9.48972 17.1336 9.0525C17.3003 8.61528 17.3836 8.16722 17.3836 7.70833C17.3558 6.75 17.0364 5.92694 16.4253 5.23917C15.8142 4.55139 15.0503 4.20778 14.1336 4.20833C13.7031 4.20833 13.29 4.29167 12.8945 4.45833C12.4989 4.625 12.155 4.86806 11.8628 5.1875L11.3003 5.79167C11.2308 5.875 11.1406 5.94111 11.0295 5.99C10.9183 6.03889 10.8072 6.06306 10.6961 6.0625C10.585 6.06194 10.4739 6.03778 10.3628 5.99C10.2517 5.94222 10.1545 5.87611 10.0711 5.79167L9.50863 5.1875C9.21696 4.86806 8.87668 4.61806 8.48779 4.4375C8.0989 4.25694 7.68224 4.16667 7.23779 4.16667C6.48779 4.16667 5.83863 4.40639 5.29029 4.88583C4.74196 5.36528 4.37001 5.95889 4.17446 6.66667H2.46613C2.70224 5.48611 3.25446 4.49667 4.12279 3.69833C4.99113 2.9 6.02946 2.50056 7.23779 2.5C7.90446 2.5 8.53307 2.63194 9.12363 2.89583C9.71418 3.15972 10.2383 3.52778 10.6961 4C11.1406 3.52778 11.6581 3.15972 12.2486 2.89583C12.8392 2.63194 13.4675 2.5 14.1336 2.5C15.5225 2.5 16.6858 3.01389 17.6236 4.04167C18.5614 5.06944 19.03 6.29167 19.0295 7.70833C19.0295 8.38889 18.9114 9.04167 18.6753 9.66667C18.4392 10.2917 18.085 10.8472 17.6128 11.3333L12.0086 16.9583C11.8281 17.1389 11.6267 17.2744 11.4045 17.365C11.1822 17.4556 10.9461 17.5006 10.6961 17.5ZM10.592 10H2.36279V8.33333H13.9253C14.1614 8.33333 14.3595 8.25333 14.5195 8.09333C14.6795 7.93333 14.7589 7.73556 14.7578 7.5C14.7567 7.26444 14.6767 7.06667 14.5178 6.90667C14.3589 6.74667 14.1614 6.66667 13.9253 6.66667C13.7308 6.66667 13.5572 6.71889 13.4045 6.82333C13.2517 6.92778 13.1545 7.07694 13.1128 7.27083L11.5086 6.83333C11.6614 6.29167 11.96 5.85056 12.4045 5.51C12.8489 5.16944 13.3558 4.99944 13.9253 5C14.6197 5 15.21 5.24306 15.6961 5.72917C16.1822 6.21528 16.4253 6.80556 16.4253 7.5C16.4253 8.19444 16.1822 8.78472 15.6961 9.27083C15.21 9.75694 14.6197 10 13.9253 10H12.9461C12.9878 10.1389 13.0225 10.2744 13.0503 10.4067C13.0781 10.5389 13.092 10.6811 13.092 10.8333C13.092 11.5278 12.8489 12.1181 12.3628 12.6042C11.8767 13.0903 11.2864 13.3333 10.592 13.3333C10.0225 13.3333 9.51557 13.1633 9.07113 12.8233C8.62668 12.4833 8.32807 12.0422 8.17529 11.5L9.77946 11.0625C9.82113 11.2569 9.91835 11.4064 10.0711 11.5108C10.2239 11.6153 10.3975 11.6672 10.592 11.6667C10.8281 11.6667 11.0261 11.5867 11.1861 11.4267C11.3461 11.2667 11.4258 11.0689 11.4253 10.8333C11.4247 10.5978 11.3447 10.4 11.1853 10.24C11.0258 10.08 10.8281 10 10.592 10Z"
                  fill="white"
                />
              </svg>
              <p className="text-white sm:mx-14 mb-2 sm:my-8 text-sm  sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                Stress Free
              </p>
            </div>
            <div className="flex gap-1 flex-col items-center justify-center sm:h-[64px] px-4 sm:px-0">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                className="block sm:hidden"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.353 6.07852H3.17649M14.353 6.07852C14.6 6.07852 14.8369 6.17664 15.0115 6.35131C15.1862 6.52598 15.2843 6.76287 15.2843 7.00989V9.43146M14.353 6.07852L10.6275 2.35303M3.17649 6.07852C2.92947 6.07852 2.69258 6.17664 2.51791 6.35131C2.34324 6.52598 2.24512 6.76287 2.24512 7.00989V16.3236C2.24512 16.5706 2.34324 16.8075 2.51791 16.9822C2.69258 17.1569 2.92947 17.255 3.17649 17.255H14.353C14.6 17.255 14.8369 17.1569 15.0115 16.9822C15.1862 16.8075 15.2843 16.5706 15.2843 16.3236V13.902M3.17649 6.07852L6.90198 2.35303L10.6275 6.07852M16.2157 9.80401H12.4902C11.9962 9.80401 11.5224 10.0003 11.1731 10.3496C10.8237 10.6989 10.6275 11.1727 10.6275 11.6668C10.6275 12.1608 10.8237 12.6346 11.1731 12.9839C11.5224 13.3332 11.9962 13.5295 12.4902 13.5295H16.2157C16.4627 13.5295 16.6996 13.4314 16.8743 13.2567C17.049 13.082 17.1471 12.8451 17.1471 12.5981V10.7354C17.1471 10.4884 17.049 10.2515 16.8743 10.0768C16.6996 9.90213 16.4627 9.80401 16.2157 9.80401Z"
                  stroke="white"
                  stroke-width="0.876586"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-white sm:mx-14 mb-2 sm:my-8 text-sm sm:text-[22px] sm:leading-[33px] font-semibold capitalize whitespace-nowrap">
                Affordable{" "}
              </p>
            </div>
          </div>

          {/* hero buttons */}
          <div className="w-full sm:h-[60px] px-4 sm:px-0 flex flex-col sm:flex-row gap-8 justify-center items-center sm:mt-20">
            <button
              className="border border-white rounded-[50px] h-full w-full sm:w-[310px]
             text-white py-3 sm:py-0 px-[10px] text-center sm:text-[22px] sm:leading-[32px] hover:bg-[#fff] hover:text-black
             hover:border-none">
              Schedule a call
            </button>
            <button
              className="border border-white rounded-[50px] h-full w-full sm:w-[310px]
             text-white py-3 sm:py-0 px-[10px] text-center sm:text-[22px]
              sm:leading-[32px] hover:bg-white hover:text-black sm:hover:bg-[#ED5272] sm:hover:text-white
             hover:border-none">
              Check if you qualify
            </button>
          </div>
        </div>

        {/* bottom scrollbar */}
        <ScrollerSection />
      </div>
    </div>
  );
};

export default SellerHero;
