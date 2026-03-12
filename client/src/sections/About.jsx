/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import FloatingEffects from "../component/FloatingEffects";
import AboutImage from "../assets/Donald.PNG";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  },
};

const About = ({
  variant = "saas", // "portfolio" | "saas" | "startup"
}) => {
  const headingMap = {
    portfolio: "Crafting elegant digital experiences",
    saas: "Building scalable software for modern businesses",
    startup: "Turning bold ideas into powerful products",
  };

  return (
    <section
      id="about"
      className="relative min-h-screen duration-500 py-2 px-6 md:px-12 lg:px-20 lg:py-14 bg-linear-to-b 
      from-gray-50 to-white 
      dark:from-zinc-900/70 dark:to-zinc-900/70"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        {/* Image / Glass Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex justify-center"
        >
          <div
            className="hidden md:flex relative rounded-4xl
            bg-white/10 dark:bg-white/10
            backdrop-blur-xl border border-white/30
            shadow-2xl"
          >
            <img
              src={AboutImage}
              alt="Developer"
              className="w-full h-full sm:h-100 sm:w-full lg:w-full lg:h-120 object-contain shadow-2xl rounded-4xl dark:border-zinc-800"
            />

            {/* Glow */}
            <div
              className="absolute -inset-1 -z-10 rounded-3xl 
              bg-linear-to-r from-blue-900 to-blue-900 
              opacity-30 blur-2xl"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={item}>
          <span
            className="inline-block font-quicksand font-medium mb-4 px-4 py-2 rounded-full text-sm
            bg-linear-to-r from-blue-950 to-blue-950 dark:from-rose-500 dark:to-rose-500 text-white
            dark:bg-indigo-400/10 dark:text-white"
          >
            About Me
          </span>

          <h2
            className="text-3xl md:text-4xl font-lato font-bold mb-6
            text-gray-900 dark:text-white leading-tight"
          >
            {headingMap[variant]}
          </h2>

          <p className="text-gray-600 font-quicksand font-medium dark:text-white text-lg leading-relaxed mb-6">
            I am a Fullstack (MERN) developer focused on building modern,
            responsive, and performance-driven web applications. I enjoy writing
            clean, maintainable code and creating intuitive user experiences
            using technologies like React, Tailwind CSS, and JavaScript. Through
            hands-on projects, I continue to improve my skills while developing
            scalable and efficient web solutions.
          </p>

          <p className="text-gray-600 font-quicksand font-medium dark:text-white text-lg leading-relaxed mb-8">
            From concept to production, I create solutions that scale, perform,
            and deliver real value to users and businesses.
          </p>

          {/* Tech Stack */}
          <motion.div variants={container} className="flex flex-wrap gap-3 mb-8">
            {[
              "Python",
              "React",
              "Tailwind CSS",
              "Framer Motion",
              "TypeScript",
              "Node.js",
              "API Integration",
            ].map((tech) => (
              <motion.span
                key={tech}
                variants={item}
                className="px-4 py-2 rounded-full font-quicksand font-medium text-sm text-black/70
                bg-black/5 dark:bg-white/30 border border-white/30 dark:border-none dark:text-gray-200 backdrop-blur-md
                hover:scale-105 transition-transform"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
