import React from "react";
import { Input } from "./ui/input";
import BlogCard from "./BlogCard";

const BlogRegion = () => {
  return (
    <div className="max-w-7xl mx-auto p-5 px-10 w-full border-t-2 border-gray-200 my-24">
      <Input placeholder="Search" />

      <div className="flex flex-col gap-10 items-center justify-center md:grid md:grid-cols-2 md:gap-20 mt-10 px-20 py-20">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogRegion;
