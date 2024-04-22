import React, { useState } from "react";
import { blog, faqCategories } from "../../data";
import { Link } from "react-router-dom";
import {
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineTags,
} from "react-icons/ai";
import "./blog.css";

const Blogs = () => {
  const [selectedFilter, setSelectedFilter] = useState(faqCategories[0]);

  const getCategorizedData = (selectedFilter, data) => {
    if (selectedFilter.toLowerCase() === "all") {
      return blog;
    } else {
      return data.filter(
        (blog) => blog.category.toLowerCase() === selectedFilter.toLowerCase()
      );
    }
  };

  return (
    <div className="w-full bg-[#fff] h-full py-10 lg:pt-[100px]">
      <div className="w-[400px] lg:w-full overflow-x-auto pb-[20px] hide-scrollbar px-4 xl:px-[40px] border-y-2 pt-4">
        <div className="w-full flex gap-[34px] items-center justify-start sm:px-2">
          {faqCategories.map((category) => (
            <button
              onClick={() => setSelectedFilter(category)}
              className={`py-[10px] px-[44px] rounded-[50px] border whitespace-nowrap border-gray-400 font-medium ${
                selectedFilter === category
                  ? "bg-[#ED5272] text-white border-0"
                  : "text-black"
              }`}
              key={category}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <section className="blog">
        <div className="container grid3">
          {getCategorizedData(selectedFilter, blog).length === 0 ? (
            <p className="text-lg font-medium">No blogs found</p>
          ) : (
            getCategorizedData(selectedFilter, blog).map((item) => (
              <div className="box boxItems" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="details">
                  <div className="tag">
                    <AiOutlineTags className="icon" />
                    <a href="/">#{item.category}</a>
                  </div>
                  <Link to={`/details/${item.id}`} className="link">
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.desc.slice(0, 180)}...</p>
                  <div className="date">
                    <AiOutlineClockCircle className="icon" />{" "}
                    <label htmlFor="">{item.date}</label>
                    <AiOutlineComment className="icon" />{" "}
                    <label htmlFor="">27</label>
                    <AiOutlineShareAlt className="icon" />{" "}
                    <label htmlFor="">SHARE</label>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
