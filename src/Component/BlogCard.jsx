import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-700 mb-4">{blog.excerpt}</p>
        <Link to="#" className="text-blue-700 font-medium hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
