import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MyContact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Contact Title */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          className="mt-10 bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Media Links */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Let's Connect
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 text-2xl hover:text-orange-500 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 text-2xl hover:text-orange-500 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 text-2xl hover:text-orange-500 transition-all"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyContact;
