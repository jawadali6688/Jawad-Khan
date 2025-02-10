import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
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

  return (
    <nav className="bg-gray-100 dark:bg-slate-900 shadow-md fixed w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
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
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Code With Me", "Projects", "Blogs", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 transition duration-300 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section (Dark Mode & Mobile Menu) */}
          <div className="hidden flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-200 p-2 rounded-md hover:text-orange-500 transition duration-300"
            >
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 dark:text-gray-200 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-slate-900 p-4 space-y-4">
          {["Home", "About", "Projects", "Blogs", "Contact" ].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer text-gray-700 dark:text-gray-200 hover:text-orange-500 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
