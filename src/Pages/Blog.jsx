import BlogCard from "../Component/BlogCard";
import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const Blog = () => {
  const { blogData } = useContext(StoreContext);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Aviation Insights & Updates
      </h2>
      <p className="text-gray-700 mb-8">
        Stay ahead of aviation trends, aircraft comparison guides, and expert
        tips from Broadline Aviation’s market professionals.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
