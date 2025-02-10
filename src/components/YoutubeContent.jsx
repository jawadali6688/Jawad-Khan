import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

const videos = [
  {
    title: "Complete Python Tutorial in 08 Hours",
    url: "https://www.youtube.com/embed/F65LoD97o2M?si=a5RYeBaShl9DyElu",
  },
  {
    title: "Best Technology to Select in 2025",
    url: "https://www.youtube.com/embed/tniSECt9Y4c?si=me3iCnNCIQOQ93OU",
  },
  {
    title: "What is Django | Complete Django Tutorial",
    url: "https://www.youtube.com/embed/XyoKoHSogfQ?si=qorHkekiLJdIONqi",
  },
  {
    title: "JavaScript vs Python: Which one to Select as a Beginner",
    url: "https://www.youtube.com/embed/j2Lvf45OyPs?si=mcBsVdeXoAuBjXX0",
  },
  {
    title: "How to Become AI Engineer",
    url: "https://www.youtube.com/embed/wGeJgheNp40?si=mL4oCuVGa2zxUm9u",
  },
  {
    title: "Object Oriented Programming in Python",
    url: "https://www.youtube.com/embed/yqZEUdNwug8?si=DANFYPt8IEKTlr5Y",
  },
];

const YoutubeContent = () => {
  return (
    <section id="code with me" className="py-20 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <FaYoutube className="hidden md:flex text-red-600 text-5xl" /> My YouTube
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Explore my latest programming tutorials and tech insights on YouTube!
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-red-500/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative w-full h-56">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="https://www.youtube.com/channel/your-channel"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex inline-block bg-red-600 text-white  px-4 md:px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all"
        >
           <span className="flex gap-2 items-center">
           {/* <FaYoutube className="text-gray-100 text-5xl" /> */}
           <span>
           Visit My YouTube Channel
           </span>
           </span>
        </a>
      </div>
    </section>
  );
};

export default YoutubeContent;
