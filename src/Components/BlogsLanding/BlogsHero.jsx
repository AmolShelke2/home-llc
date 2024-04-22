import React from "react";

const BlogsHero = () => {
  return (
    <div className="w-full h-[600px] sm:h-[773px] bg-blogs-landing bg-no-repeat bg-cover bg-center">
      <div className="h-full bg-hero-section-overlay bg-cover">
        <div className="flex flex-col h-full justify-center lg:justify-end lg:items-center md:h-[80%]">
          <h2 className="text-3xl lg:text-[64px] lg:leading-[82.4px] text-center text-white font-[275] mb-[60px]">
            Blogs
          </h2>

          <div className="w-full lg:w-[1100px] bg-transparent relative px-2">
            <p className="text-center text-xl md:text-3xl font-normal text-white">
              Read the daily blog posts shared by {""}
              <span className="text-[#ED5272] font-semibold py-2">
                Home.LLC
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;
