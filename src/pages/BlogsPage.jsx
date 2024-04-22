import React from "react";
import BlogsHero from "../Components/BlogsLanding/BlogsHero";
import Blogs from "../Components/BlogsLanding/Blogs";

const BlogsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <BlogsHero />
      <Blogs />
    </div>
  );
};

export default BlogsPage;
