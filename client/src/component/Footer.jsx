import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="relative duration-500 bg-gray-300 dark:bg-neutral-950 px-6 md:px-12 lg:px-20 py-8 lg:py-12 flex flex-col justify-center">

            <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-30 items-start">

                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-monoton text-xl font-bold bg-linear-to-r from-blue-900 to-red-500 bg-clip-text text-transparent cursor-pointer dark:from-blue-300 dark:to-rose-500 mb-2">
                        Emmanuel Samuel
                    </h2>
                    <p className="text-gray-600 font-quicksand font-medium dark:text-gray-400 text-sm max-w-xs">
                        Software developer building high-performance, visually refined web apps.
                    </p>

                    {/* Resume Download */}
                    <a
                        href="/Emmanuel_Samuel_Resume.pdf"
                        download
                        className="mt-6 inline-flex items-center gap-2 text-black/50 shadow-sm bg-gray-200 py-2 px-4 font-quicksand rounded-full dark:text-rose-500 font-medium hover:bg-red-200 hover:text-gray-900 hover:scale-105 transition-transform"
                    >
                        <FaDownload /> Download Resume
                    </a>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col space-y-2"
                >
                    <span className="font-semibold font-quicksand text-gray-900 dark:text-white mb-2">Quick Links</span>
                    {["About", "Skills", "Projects", "Contact"].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="relative text-gray-700 font-quicksand dark:text-gray-300 hover:text-red-500 dark:hover:text-rose-400 transition font-medium group"
                        >
                            {link}
                            {/* Animated underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-300 dark:bg-rose-400 group-hover:w-5 transition-all duration-300"></span>
                        </a>
                    ))}
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col space-y-4"
                >
                    <span className="font-semibold font-quicksand text-gray-900 dark:text-white mb-2">Follow Me</span>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://github.com/OfficialEmmanuelSamuel" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/emmanuel-samuel-718254273" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>

            </div>

            {/* Bottom copyright */}
            <div className="mt-12 text-center font-quicksand font-medium text-gray-500 dark:text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Emmanuel Samuel. All rights reserved.
            </div>

            {/* Sticky Glow / Glassmorphism */}
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-linear-to-r from-indigo-500 to-purple-600 opacity-10 blur-3xl" />
        </footer>
    )
}
export default Footer;