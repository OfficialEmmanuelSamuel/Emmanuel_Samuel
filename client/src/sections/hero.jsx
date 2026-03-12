/* eslint-disable no-unused-vars */
import React from "react";
import heroImage from "../assets/Emmanuel.PNG";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const ScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const yOffset = -60;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const ScrollToProject = () => {
    const section = document.getElementById("projects");
    if (section) {
      const yOffset = -60;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">

      {/* subtle background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-xl"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="relative z-10 max-w-8xl mx-auto py-14 px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-6"
        >

          <motion.p
            variants={item}
            className="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-rose-400 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-950 to-blue-950 bg-clip-text text-transparent dark:text-white">
              Emmanuel
            </span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl -mt-4 sm:text-2xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
          >
            I build scalable web applications, develop modern user interfaces,
            and craft interactive digital experiences using modern technologies
            to deliver fast, reliable, and user-focused products.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <button
              onClick={ScrollToContact}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-950 to-blue-950 text-white font-medium shadow-lg hover:scale-105 transition lg:px-18"
            >
              HIRE ME
            </button>

            <button
              onClick={ScrollToProject}
              className="px-8 py-3 font-semibold rounded-full border-2 border-blue-950 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-900 hover:text-white transition lg:px-15"
            >
              View Projects
            </button>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <motion.div
            variants={item}
            className="relative"
          >
            <img
              src={heroImage}
              alt="Emmanuel Samuel"
              className="w-72 h-108 lg:w-96 lg:h-140 object-contain rounded-full shadow-2xl border-1 border-white dark:border-zinc-800"
            />

            {/* Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;