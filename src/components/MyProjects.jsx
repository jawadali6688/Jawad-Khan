import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";

const projects = [
  {
    title: "Freight Exchange Platform",
    description:
      "A real-time freight exchange platform for transporters and shippers, built with MERN stack & Stripe for payments.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "nextUI"],
    image: "/freight_exchange.png",
    live: "https://fr8.vercel.app/",
    github: "https://github.com/jawadali6688/admin-freight",
  },
  {
    title: "Real Time Messaging",
    description:
      "Real Messaging in the Freight Exchange Platform enables seamless, instant, and secure communication between transporters and shippers. ",
    tech: ["React", "Tailwind CSS", "API"],
    image: "/messaging_chat.png",
    live: "https://fr8.vercel.app/",
    github: "https://github.com/jawadali6688/admin-freight",
  },
  {
    title: "Be Brand Expo",
    description:
      "Be Brand Expo is a dynamic festival in Zahir Pir, showcasing top brands, innovation, and business opportunities. ",
    tech: ["React", "Tailwind CSS", "API"],
    image: "/be_brand.png",
    live: "https://be-brand-expo-49aw.vercel.app/",
    github: "https://github.com/yourrepo",
  },
  // {
  //   title: "Crow Mash Resturant",
  //   description:
  //     "Final year project on AI-based face detection using Python, OpenCV, and Deep Learning.",
  //   tech: ["Python", "OpenCV", "Deep Learning"],
  //   image: "/crown_mash.png",
  //   live: "https://crown-mash-resturant.vercel.app/",
  //   github: "https://github.com/yourrepo",
  // },
  {
    title: "GitHub",
    description:
      "A productivity tool with authentication, task management, and real-time updates using MERN stack.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: "https://source.unsplash.com/400x300/?task",
    live: "https://yourtaskmanager.com",
    github: "https://github.com/yourrepo",
  },
  
];

const ITEMS_PER_PAGE = 2;

const MyProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Search Bar */}
        <div className="mt-6 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* No Projects Found Message */}
        {filteredProjects.length === 0 && (
          <p className="mt-6 text-center text-gray-500">No projects found.</p>
        )}

        {/* Projects Grid */}
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {paginatedProjects.map((project, index) => (
            project.title !== "GitHub" ? (
              <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 flex items-center gap-1 hover:text-orange-600"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 flex items-center gap-1 hover:text-gray-900"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
            ) 
            :
            (
              <motion.div
  className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center p-6 text-center"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <FaGithub className="text-6xl text-gray-900 dark:text-gray-100 mb-4" />
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
    More Projects on GitHub
  </h3>
  <p className="text-gray-600 dark:text-gray-300 mt-2">
    Explore my projects and contributions.
  </p>
  <a
    href="https://github.com/jawadali6688"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 flex items-center gap-2"
  >
    <FaExternalLinkAlt /> Visit GitHub
  </a>
</motion.div>

            )
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProjects;
