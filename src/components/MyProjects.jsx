import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Freight Exchange Platform",
    category: "Full-Stack",
    description:
      "A real-time freight exchange platform for transporters and shippers, built with MERN stack & Stripe for payments.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/images/freight-exchange.jpg",
    live: "https://yourproject.com",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Weather App",
    category: "Frontend",
    description:
      "A React-based weather application using OpenWeather API, featuring real-time updates and geolocation.",
    tech: ["React", "Tailwind CSS", "API"],
    image: "/images/weather-app.jpg",
    live: "https://yourweatherapp.com",
    github: "https://github.com/yourrepo",
  },
  {
    title: "AI Face Detection System",
    category: "Machine Learning",
    description:
      "Final year project on AI-based face detection using Python, OpenCV, and Deep Learning.",
    tech: ["Python", "OpenCV", "Deep Learning"],
    image: "/images/face-detection.jpg",
    live: "https://yourfacedetect.com",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Task Manager App",
    category: "Full-Stack",
    description:
      "A productivity tool with authentication, task management, and real-time updates using MERN stack.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: "/images/task-manager.jpg",
    live: "https://yourtaskmanager.com",
    github: "https://github.com/yourrepo",
  },
  {
    title: "Job Posting API",
    category: "Backend",
    description:
      "A secure REST API for job postings, featuring authentication, role-based access control, and JWT.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/job-api.jpg",
    live: "https://yourjobapi.com",
    github: "https://github.com/yourrepo",
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Machine Learning"];

const MyProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Category Filters */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-lg text-lg font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-orange-500/50 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Project Image */}
              {/* <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              /> */}

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between min-h-[260px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
