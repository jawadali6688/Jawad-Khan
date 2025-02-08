import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-900"
    >
      <div className="max-w-3xl px-6">
        {/* Animated Text */}
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-orange-500">Jawad Khan</span>
        </motion.h1>

        <motion.h2
          className="text-xl text-gray-600 dark:text-gray-300 mt-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer | MERN | Next.js | Django | Generative AI
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to="projects"
            smooth={true}
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 cursor-pointer"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
