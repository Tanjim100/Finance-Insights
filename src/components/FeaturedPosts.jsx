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
    <div className="max-w-7xl mx-auto space-y-10 my-10 px-3">
      <h2 className="text-xl lg:text-2xl font-bold">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredPosts.map((blog) => (
          <BlogCard
            blog={blog}
            key={blog.id}
          ></BlogCard>
        ))}
      </div>
      <div className="flex items-center  justify-center">
        <Link
          className="inline-block rounded-full border  bg-gray-800 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#01101C]"
          to="/blogs"
        >
          Explore Posts
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPosts;
