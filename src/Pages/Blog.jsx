import { blogData } from "../assets/Assets";
import BlogCard from "../Component/BlogCard";

const Blog = () => {
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
