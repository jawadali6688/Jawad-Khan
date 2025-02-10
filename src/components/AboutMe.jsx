import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaYoutube, FaGithub } from "react-icons/fa";
import Markdown from "react-markdown";
import myProfile from "../../public/myProfile.png";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 text-center tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Main Content */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img
                src={myProfile}
                alt="Profile"
                className="rounded-full shadow-2xl border-4 border-orange-500 hover:border-gray-400"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-6 flex justify-center gap-6">
          <motion.a
            href="https://linkedin.com/in/jawad-khan-a28505326"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 text-2xl hover:text-blue-600"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={35} />
          </motion.a>

          <motion.a
            href="https://wa.me/+923057573688?text=Hello%2C%20I%20am%20interested%20in%20your%20services.
"           target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 text-2xl hover:text-green-500"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp size={35}  />
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@Jawad_khan6686"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 text-2xl hover:text-red-600"
            whileHover={{ scale: 1.2 }}
          >
            <FaYoutube size={35}  />
          </motion.a>

          <motion.a
            href="https://github.com/jawadali6688"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 text-2xl hover:text-gray-600"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={35}  />
          </motion.a>
        </div>
          </motion.div>

          {/* Right Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Introduction */}
            <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <Markdown>
              I’m an **experienced Full Stack Developer** specializing in **MERN, Next.js, and Django**,  
building **scalable web applications** for companies and startups.  
I teach **web programming** to many students and run a **YouTube channel** for programming content.  
Passionate about **AI and Generative AI**, I integrate **machine learning models** into web applications.  

              </Markdown>
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "MERN",
                  "Next",
                  "JavaScript",
                  "TypeScript",
                  "Django",
                  "Python",
                  "MongoDB",
                  "PostgreSQL",
                  "Generative AI",
                  "OpenAI",
                  "LangChain"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium transition-transform transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience & Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Experience & Education
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-md md:text-lg">
                  🎯 <Markdown className="ml-2">**Co-Founder | JSF Solutions** (Present)</Markdown>
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-md md:text-lg">
                  🎓 <Markdown className="ml-2">**Bachelor's in Artificial Intelligence | 7th Semester**</Markdown>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
