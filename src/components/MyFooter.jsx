import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Jawad Khan</h2>
          <p className="mt-2 text-gray-400">
            Full-Stack Developer
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#home" className="hover:text-orange-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-500 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Me</h3>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 text-2xl transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-gray-400 hover:text-orange-500 text-2xl transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Jawad Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MyFooter;
