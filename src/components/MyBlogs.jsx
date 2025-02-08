import { useState } from "react";
import { motion } from "framer-motion";

const blogsData = [
  {
    id: 1,
    title: "Mastering React Hooks",
    category: "Web Development",
    image: "https://source.unsplash.com/400x300/?react",
  },
  {
    id: 2,
    title: "Django vs Flask: Which One to Choose?",
    category: "Python",
    image: "https://source.unsplash.com/400x300/?python",
  },
  {
    id: 3,
    title: "AI Trends in 2025",
    category: "AI & ML",
    image: "https://source.unsplash.com/400x300/?ai",
  },
  {
    id: 4,
    title: "Optimizing MERN Stack Apps",
    category: "MERN",
    image: "https://source.unsplash.com/400x300/?mern",
  },
];

const categories = ["All", "Web Development", "Python", "AI & ML", "MERN"];

const MyBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  return (
    <section id="blogs" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Blogs
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 my-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-white dark:bg-gray-700 dark:text-gray-300"
              } hover:bg-orange-600`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {filteredBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {blog.title}
                </h3>
                <p className="text-orange-500 font-semibold mt-1">
                  {blog.category}
                </p>
                <button className="mt-3 inline-block text-orange-500 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyBlogs;
