import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const blogsData = [
  {
    id: 1,
    title: "Mastering React Hooks",
    description: `React Hooks revolutionized functional components.  
      
      **Key Hooks:**  
      - \`useState\` for state management  
      - \`useEffect\` for side effects  
      - \`useContext\` for global state  
      
      Learn how to leverage these for building efficient apps!`,
    image: "https://th.bing.com/th/id/OIP.byF4YDSMRBwtKi0wWgiqAQAAAA?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    title: "Django vs Flask: Which One to Choose?",
    description: `Django and Flask are two powerful Python frameworks.  
      
      **Comparison:**  
      - 🏗️ Django: Full-featured, batteries included  
      - ⚡ Flask: Lightweight, minimal, flexible  
      
      Choose wisely based on your project needs!`,
    image: "https://th.bing.com/th/id/OIP.LR0umsA8Y1l4KhKrBDKO9AHaDj?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "AI Trends in 2025",
    description: `AI is advancing at an exponential pace.  
      
      🚀 **Upcoming Trends:**  
      - GPT-5 and multimodal AI  
      - AI-powered **self-driving** advancements  
      - Ethical AI & responsible innovation  
      
      The future is now!`,
    image: "https://th.bing.com/th/id/OIP.C6jLtsPVi40iSVoiDfUzzQHaD4?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    title: "Optimizing MERN Stack Apps",
    description: `MERN stack is powerful, but optimization is key!  
      
      **Tips:**  
      - Use **indexing** in MongoDB for faster queries  
      - Implement **React Lazy Loading**  
      - Optimize API calls with caching  
      
      Build efficient and scalable apps!`,
    image: "https://th.bing.com/th/id/R.4c360f7cc37316fddb23dbf154609a29?rik=99fg2xIBtzrS7w&pid=ImgRaw&r=0",
  },
];

const ITEMS_PER_PAGE = 2;

const MyBlogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="blogs" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Blogs
        </motion.h2>

        {/* Search Bar */}
        <div className="mt-6 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* No Blogs Found */}
        {filteredBlogs.length === 0 && (
          <p className="mt-6 text-center text-gray-500">No blogs found.</p>
        )}

        {/* Blogs Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {paginatedBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {blog.title}
                </h3>
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="mt-3 inline-block text-orange-500 font-semibold hover:underline cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2 ">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-300 "
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Blog Popup Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-x-hidden overflow-y-auto p-6 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 cursor-pointer"
              onClick={() => setSelectedBlog(null)}
            >
              <FaTimes size={25} />
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-48 object-cover rounded-lg mt-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-4">
              {selectedBlog.title}
            </h2>
            <div className="mt-4 text-gray-700 break-words dark:text-gray-300">
              <ReactMarkdown>{selectedBlog.description}</ReactMarkdown>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default MyBlogs;
