import React from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { postsApi } from "../services/blogsAPI";

const FeaturedPosts = () => {
  const {
    data: featuredPosts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-posts"],
    queryFn: () => postsApi.getFeaturedPosts(),
  });

  return (
    <div className="max-w-7xl mx-auto mb-8 px-3 pb-8">
      <div className="mb-10">
        <h2 className="text-xl lg:text-2xl font-bold">
          Featured Blogs
        </h2>
        <div className="h-1 w-21.5 bg-black"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3 mb-16">
        {featuredPosts.map((blog) => (
          <BlogCard
            blog={blog}
            key={blog.id}
          ></BlogCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          // className="inline-block rounded-full border  bg-gray-800 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#01101C]"
          className="btn btn-sm btn-outline rounded-full md:btn-lg hover:bg-[#01101C]"
          to="/blogs"
        >
          See More Posts
        </Link>
        {/* <Link
          className="btn btn-sm btn-outline rounded-full md:btn-lg"
          to="/about"
        >
          <span className='mx-2'>About Me</span>
        </Link> */}
      </div>
    </div>
  );
};

export default FeaturedPosts;
