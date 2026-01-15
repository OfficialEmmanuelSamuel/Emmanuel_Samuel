import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import SOHP from "../assets/SOHP.jpg";
import SOHP1 from "../assets/SohpImage.png";
import DchImage from "../assets/DCH.png";
import DchImage1 from "../assets/DCHome.JPG";
import EmanelTravel from "../assets/emanel-travelbox.PNG";
import EmanelTravel1 from "../assets/EmanelTravelHome.png";
import Luciahairs from "../assets/luciaHairs.png";
import Luciahairs1 from "../assets/LuciaHairs2.png";
import SoftSkills from "../component/SoftKills";
import toast from "react-hot-toast";

const projects = [
  {
    title: "Donald Catering Home",
    description:
      "Donald Catering Home is a personal project where I showcase my passion for building clean and functional web landing pages. I started with this concept to practice design, layout, and user experience while bringing a simple business idea to life. Built with HTML, CSS and JavaScript. ",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/OfficialEmmanuelSamuel/donald-catering-home",
    live: "https://officialemmanuelsamuel.github.io/donald-catering-home/",
    images: [DchImage, DchImage1],
  },
  {
    title: "Emanel Travels",
    description:
      "Emanel Travel is also a personal project that involves API integration to fetch real-time flight data and enable flight search functionality. Through this project, I demonstrate my ability to work with external APIs, handle dynamic data, and build interactive, user-focused web experiences.",
    tech: ["React", "JavaScript", "Tailwindcss", "API Integration", "Node.js"],
    github: "https://github.com/OfficialEmmanuelSamuel/",
    live: "Still Building",
    images: [EmanelTravel, EmanelTravel1],
  },
  {
    title: "SOHP'25 Registration Page",
    description:
      "The SOHP’25 Registration Page is a real-time event registration project designed to manage attendee sign-ups efficiently. It includes a registration system and QR codes for registration, and an admin dashboard that displays registered users in real time. This project demonstrates practical experience in building full event workflows, real-time data handling, and admin management features.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/OfficialEmmanuelSamuel/",
    live: "https://sohp-attendance.web.app",
    images: [SOHP, SOHP1],
  },
  {
    title: "LuciaHairs",
    description:
      "LuciaHairs is a web project focused on showcasing wigs available for purchase and pre-order. It includes a full CRUD system with an admin dashboard, allowing products to be created, updated, managed, and removed easily. This project demonstrates my ability to build functional e-commerce features, admin management tools, and user-friendly interfaces.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/OfficialEmmanuelSamuel/",
    live: "Still Building",
    images: [Luciahairs, Luciahairs1],
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
        <h2 className="text-4xl font-bold font-lato text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-gray-600 font-quicksand font-medium dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A selection of projects demonstrating my skills in building web
          applications using modern technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-3xl p-4 bg-white dark:bg-gray-100/10 dark:border-none dark:shadow-sm dark:shadow-gray-100/20 backdrop-blur-xl border border-white/30 shadow-lg hover:shadow-2xl cursor-pointer transition-all"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-48 object-contain rounded-4xl w-full mb-4"
            />

            {/* Title */}
            <h3 className="text-xl font-bold font-lato text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 font-quicksand font-medium dark:text-gray-300 text-sm mb-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 font-quicksand rounded-full text-xs font-medium bg-black/10 dark:bg-white/10 border border-white/30 text-gray-800 dark:text-gray-200 backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 justify-between mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center font-quicksand font-medium gap-2 text-gray-600 dark:text-white transition"
                  onClick={(e) => e.stopPropagation()} // prevent modal open
                >
                  <FaGithub /> Code
                </a>
              )}

              {/* Live Link / Alert if still building */}
              {project.live &&
                (project.live === "Still Building" ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toast("🚧 This site will be available soon!");
                    }}
                    className="flex items-center bg-rose-500 py-2 rounded-full text-xs px-5 font-quicksand font-medium gap-2 text-white dark:text-white transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </button>
                ) : (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()} // prevent modal open
                    className="flex items-center bg-rose-500 py-2 rounded-full text-xs px-5 font-quicksand font-medium gap-2 text-white dark:text-white transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                ))}
            </div>

            {/* Glow */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-linear-to-r from-white/50 to-white-50 opacity-20 blur-xl" />
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

            <p className="text-gray-600 font-quicksand font-medium dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 font-quicksand font-medium rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/30 text-gray-800 dark:text-gray-200 backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedProject.title} ${i + 1}`}
                  className="w-full h-48 object-contain rounded-2xl"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}

      <SoftSkills />
    </section>
  );
};

export default Projects;
