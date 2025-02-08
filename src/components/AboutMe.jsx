import { motion } from "framer-motion";
import myProfile from "../../public/myProfile.png"
const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        {/* Main Content */}
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Left Side: Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={myProfile}
              alt="Profile"
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a **Full Stack Developer** specializing in **MERN, Next.js, and Django**.
              With a passion for building **scalable and high-performance web applications**,  
              I help companies and startups turn their ideas into reality.
            </p>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Django",
                  "JavaScript",
                  "TypeScript",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-orange-500 text-white px-3 py-1 rounded-lg shadow-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience & Education */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Experience & Education</h3>
              <ul className="mt-3 space-y-3">
                <li className="text-gray-600 dark:text-gray-300">
                  🎯 **Co-Founder | Freight Exchange** (Present)
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  🎯 **Backend Developer | Consulting for Businesses**
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  🎓 **Bachelor's in Artificial Intelligence | 6th Semester**
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
