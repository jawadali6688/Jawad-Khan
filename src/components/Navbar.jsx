import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = ["Home", "About", "Code With Me", "Projects", "Blogs", "Contact"];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              className="text-orange-500 text-2xl font-bold cursor-pointer"
            >
              Jawad Khan
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                spy={true}
                to={item.toLowerCase()}
                smooth={true}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-all font-medium cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden text-gray-700 dark:text-gray-300 p-2 rounded-md hover:text-orange-500 transition"
            >
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-300 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
          >
            <HiX size={26} />
          </button>

          <div className="mt-12 space-y-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                spy={true}
                to={item.toLowerCase()}
                smooth={true}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 text-lg transition-all cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
