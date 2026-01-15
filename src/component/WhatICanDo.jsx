import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaUsersCog,
} from "react-icons/fa";

const steps = [
  {
    title: "Learn Frontend Development",
    description:
      "Build responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS.",
    icon: FaReact,
  },
  {
    title: "Understand Backend Fundamentals",
    description:
      "Learn how servers work by building simple APIs, handling authentication, and managing application logic with Node.js.",
    icon: FaServer,
  },
  {
    title: "Work with Databases",
    description:
      "Practice storing and retrieving data using SQL and NoSQL databases while understanding data modeling and relationships.",
    icon: FaDatabase,
  },
  {
    title: "Deploy Small Projects",
    description:
      "Host applications online, connect frontend and backend services, and learn basic cloud deployment workflows.",
    icon: FaCloud,
  },
  {
    title: "Improve Code Quality & Performance",
    description:
      "Write clean, maintainable code, fix bugs, and optimize applications for better speed and usability.",
    icon: FaRocket,
  },
  {
    title: "Collaborate & Build a Portfolio",
    description:
      "Use Git and GitHub to collaborate, track changes, and showcase real projects that demonstrate your skills.",
    icon: FaUsersCog,
  },
];

const WhatICanDoFullStack = () => {
  return (
    <section id="capabilities" className="relative py-15 px-6 duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-5"
        >
          <h2 className="text-3xl font-lato md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I Can Do
          </h2>
          <p className="text-gray-600 font-quicksand font-medium dark:text-gray-400 max-w-2xl mx-auto">
            From frontend interfaces to backend logic, I build complete,
            functional web applications.
          </p>
        </motion.div>

        {/* DESKTOP — Horizontal Timeline */}
        <div className="relative hidden lg:block">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500/50" />

          <div className="grid grid-cols-6 gap-10 mt-20">
            {steps.map(({ title, description, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Icon with bounce */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-4 z-10"
                >
                  <Icon className="text-3xl text-red-500" />
                </motion.div>

                {/* Card */}
                <div
                  className="relative p-6 h-50 rounded-3xl
                                    bg-white/40 dark:bg-gray-100/5 dark:border-none dark:shadow-gray-100/10 dark:shadow-sm
                                    backdrop-blur-xl border border-white/30
                                    shadow-lg"
                >
                  <h3 className="text-sm font-lato font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-xs font-quicksand font-medium text-gray-600 dark:text-gray-400">
                    {description}
                  </p>

                  {/* Glow pulse */}
                  <div
                    className="absolute -inset-1 -z-10 rounded-3xl
                                        bg-linear-to-r from-rose-50 to-rose-50 dark:from-gray-900/60 dark:to-gray-900/50
                                        opacity-0 group-hover:opacity-30 blur-sm dark:blur-sm
                                        animate-pulse transition"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE — Compact Stacked Version */}
        <div className="lg:hidden flex flex-col gap-5 max-w-md mx-auto">
          <div className="hidden absolute top-1/3 left-8 w-0.5 h-90 bg-red-500/50" />
          {steps.map(({ title, icon: Icon }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 p-4 rounded-xl
                            bg-white/40 dark:bg-gray-100/5 dark:border-none dark:shadow-gray-100/10 dark:shadow-sm backdrop-blur
                            border border-white/30 shadow"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon className="text-xl text-rose-500" />
              </motion.div>

              <span className="text-sm font-quicksand font-medium text-gray-800 dark:text-gray-200">
                {title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ATS (hidden) */}
        <div className="sr-only">
          Junior Full Stack Developer React JavaScript Tailwind CSS Node.js REST
          APIs Database Integration Cloud Deployment Git Performance
          Optimization
        </div>
      </div>
    </section>
  );
};

export default WhatICanDoFullStack;
