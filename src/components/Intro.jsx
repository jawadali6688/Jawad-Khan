import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-3xl px-6 mt-8">
        {/* Animated Text */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-orange-500">Jawad Khan</span>
        </motion.h1>

        <motion.p
          className="text-md md:text-xl text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer skilled in <span className="text-orange-500 font-semibold">MERN, Next.js, and Django</span>, 
          with a passion for <span className="text-orange-500 font-semibold">Generative AI</span> and innovative solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to="projects"
            smooth={true}
            className="px-4 md:px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            View Projects
          </Link>
          <div className="flex justify-center ">
      <a
        href="/resume.pdf" // Path to your resume in the public folder
        download="Jawad_Khan_Resume.pdf" // Custom file name when downloaded
        className="flex w-full justify-center items-center space-x-2 px-4 md:px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-orange-500 hover:text-white active:bg-orange-500 active:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m-4 4l4 4m0 0l4-4m-4 4V4m-6 16h12" />
        </svg>
        <span>Download Resume</span>
      </a>
    </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
