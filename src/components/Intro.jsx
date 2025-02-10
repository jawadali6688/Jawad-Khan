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
          className="text-6xl font-extrabold text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-orange-500">Jawad Khan</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer skilled in <span className="text-orange-500 font-semibold">MERN, Next.js, and Django</span>, 
          with a passion for <span className="text-orange-500 font-semibold">Generative AI</span> and innovative solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to="projects"
            smooth={true}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
