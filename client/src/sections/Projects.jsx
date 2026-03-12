/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Portfolio_mockup from "../assets/mockups/portfolio_desktop_mockup.png";
import DchImage from "../assets/DCH.png";
import WhatICanDo from "../component/WhatICanDo";
import WhatDrivesMe from "../component/WhatDrivesMe";
import EmanelTravel from "../assets/emanel-travelbox.PNG";
import Luciahairs from "../assets/mockups/luciahair_mockup.png";
import SoftSkills from "../component/SoftKills";
import toast from "react-hot-toast";

const projects = [
  {
    title: "LuciaHairs",
    description:
      "LuciaHairs is a web project focused on showcasing wigs available for purchase and pre-order. It includes a full CRUD system with an admin dashboard, allowing products to be created, updated, managed, and removed easily. This project demonstrates my ability to build functional e-commerce features, admin management tools, and user-friendly interfaces.",
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/OfficialEmmanuelSamuel/",
    live: "https://luciahairs.vercel.app/",
    images: [Luciahairs],
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website built to showcase skills, projects, and professional experience in a modern and responsive design. The portfolio focuses on clean UI/UX, accessibility, and smooth navigation across devices, serving as a professional online presence for personal branding and career growth.",
    tech: ["React", "Tailwind CSS"],
    github:
      "https://github.com/OfficialEmmanuelSamuel/Bakare_Christianah_Portfolio",
    live: "https://bakare-christianah.vercel.app",
    images: [Portfolio_mockup],
  },
  {
    title: "Donald Catering Home",
    description:
      "Donald Catering Home is a personal project where I showcase my passion for building clean and functional web landing pages. I started with this concept to practice design, layout, and user experience while bringing a simple business idea to life. Built with HTML, CSS and JavaScript. ",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/OfficialEmmanuelSamuel/donald-catering-home",
    live: "https://officialemmanuelsamuel.github.io/donald-catering-home/",
    images: [DchImage],
  },
  {
    title: "Emanel Travels",
    description:
      "Emanel Travel is also a personal project that involves API integration to fetch real-time flight data and enable flight search functionality. Through this project, I demonstrate my ability to work with external APIs, handle dynamic data, and build interactive, user-focused web experiences.",
    tech: [
      "React",
      "JavaScript",
      "Tailwindcss",
      "API Integration",
      "Express.js",
    ],
    github: "https://github.com/OfficialEmmanuelSamuel/",
    live: "Still Building",
    images: [EmanelTravel],
  },
  
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-10 duration-500 px-6 md:px-12 lg:px-20 bg-linear-to-b from-gray-50 to-white dark:from-zinc-600 dark:to-zinc-900/70"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-7xl text-center mb-16">
        <h2 className="text-4xl font-bold font-lato text-gray-900 dark:text-white mb-4 decoration-rose-500 decoration-2">
          Projects
        </h2>
        <p className="text-gray-600 font-quicksand font-medium dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A curated showcase of work that highlights my ability to craft clean,
          modern web applications using today's top technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Image with overlay title on hover */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Card body */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Description truncated */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 h-16 overflow-hidden">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 font-quicksand rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center font-quicksand font-medium gap-2 text-gray-600 dark:text-white transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()} // prevent modal open
                  >
                    <FaGithub /> Code
                  </a>
                )}

                {project.live &&
                  (project.live === "Still Building" ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toast("🚧 This site will be available soon!");
                      }}
                      className="flex items-center bg-rose-500 py-1.5 rounded-full text-xs px-4 font-quicksand font-medium gap-2 text-white shadow-sm hover:bg-rose-600 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt /> Live
                    </button>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()} // prevent modal open
                      className="flex items-center bg-rose-500 py-1.5 rounded-full text-xs px-4 font-quicksand font-medium gap-2 text-white shadow-sm hover:bg-rose-600 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          className="fixed top-5 inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="relative bg-white dark:bg-neutral-900 rounded-3xl p-6 max-w-3xl w-full overflow-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-lato font-bold text-gray-900 dark:text-white mb-4">
              {selectedProject.title}
            </h3>

            <p className="text-gray-600 font-quicksand font-medium dark:text-gray-300 mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 font-quicksand font-medium rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons in modal */}
            <div className="flex flex-wrap gap-4 mb-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                  <FaGithub /> View Code
                </a>
              )}
              {selectedProject.live &&
                (selectedProject.live === "Still Building" ? (
                  <button
                    onClick={() =>
                      toast("🚧 This site will be available soon!")
                    }
                    className="flex items-center gap-2 bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </button>
                ) : (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-rose-500 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition"
                  >
                    <FaExternalLinkAlt /> Live Site
                  </a>
                ))}
            </div>

            {/* Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedProject.title} ${i + 1}`}
                  className="w-full h-48 object-cover rounded-2xl"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
       <WhatICanDo />
      <WhatDrivesMe />
    </section>
  );
};

export default Projects;
