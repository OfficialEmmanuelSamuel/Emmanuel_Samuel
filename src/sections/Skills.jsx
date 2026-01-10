import { motion } from "framer-motion";
import WhatICanDoFullStack from "../component/WhatICanDo";
import WhatDrivesMe from "../component/WhatDrivesMe";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaGitAlt,
    FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiFirebase } from "react-icons/si";

const skillsByRole = {
    frontend: [
        { name: "React", icon: FaReact, color: "#f62650ff" },
        { name: "JavaScript (ES6+)", icon: FaJs, color: "#f5da0dff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
    fullstack: [
        { name: "React", icon: FaReact, color: "#f0486aff" },
        { name: "JavaScript (ES6+)", icon: FaJs, color: "#f5da0dff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Databases", icon: FaDatabase, color: "#4DB33D" },
        { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
    ],
};

const Skills = ({ role = "fullstack" }) => {
    const skills = skillsByRole[role];

    return (
        <section
            id="skills"
            className="relative w-full duration-500 min-h-screen py-10 px-2 md:px-12 lg:px-20
            bg-linear-to-b from-gray-50 to-white
            dark:from-zinc-700/40 dark:to-zinc-600/70"
        >
            <div className="mx-auto mt-1 mb-5 max-w-6xl lg:mt-1">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-lato md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-600 font-quicksand font-medium dark:text-gray-400 max-w-2xl mx-auto">
                        Technologies I use to build clean, scalable, and user-focused web
                        applications.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 mx-auto p-2 sm:grid-cols-3 md:grid-cols-4 lg:w-4xl lg:h-90 gap-8">
                    {skills.map(({ name, icon: Icon, color }) => (
                        <motion.div
                            key={name}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative flex flex-col items-center justify-center
                            rounded-2xl p-6 text-center
                            bg-white/40 dark:bg-gray-100/5 dark:border-none dark:shadow-gray-100/10 dark:shadow-sm
                            backdrop-blur-xl border border-white/30
                            shadow-lg hover:shadow-2xl"
                        >
                            <Icon
                                className="text-4xl mb-3 transition-transform group-hover:rotate-6"
                                style={{ color }}
                            />
                            <span className="text-sm font-quicksand font-medium text-gray-800 dark:text-gray-200">
                                {name}
                            </span>

                            {/* Glow */}
                            <div
                                className="absolute -inset-1 -z-10 rounded-2xl
                                bg-linear-to-r from-red-200 to-orange-200
                                opacity-0 group-hover:opacity-30 blur-xl transition"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* ATS-Optimized Keywords (hidden visually, readable by bots) */}
                <div className="sr-only">
                    Frontend Developer React JavaScript TypeScript Tailwind CSS HTML CSS
                    Node.js Firebase REST APIs Git GitHub Responsive Design Clean Code
                    Component Architecture Web Performance
                </div>
            </div>
            <WhatICanDoFullStack />
            <WhatDrivesMe />
        </section>
    );
};

export default Skills;