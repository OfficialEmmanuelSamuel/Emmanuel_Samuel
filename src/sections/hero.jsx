import React, { useState, useEffect } from "react";
import heroImage from "../assets/Emmanuel.PNG"; // Replace with your image
import { motion } from "framer-motion";


const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
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
    const phrases = [
        "Hi, I'm Emmanuel.",
        "Aspiring Software Developer.",
    ];

    const ScrollToContact = () => {
        const section = document.getElementById("contact");
        if (section) {
            const yOffset = -60;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    const ScrollToProject = () => {
        const section = document.getElementById("projects");
        if (section) {
            const yOffset = -60;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    const [currentText, setCurrentText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typingSpeed = 100; // milliseconds per character
        const pauseTime = 1500; // pause before deleting or next phrase

        let timeout;

        if (charIndex < phrases[phraseIndex].length) {
            // Type next character
            timeout = setTimeout(() => {
                setCurrentText((prev) => prev + phrases[phraseIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else {
            // Finished current phrase, wait then go to next
            timeout = setTimeout(() => {
                setCurrentText("");
                setCharIndex(0);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }, pauseTime);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, phraseIndex]);

    return (
        <section className="relative w-full min-h-screen duration-500 bg-gray-50 dark:bg-zinc-700 flex items-center justify-center overflow-hidden gap-5 sm:flex-col lg:flex-row">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-xl sm:blur-xl brightness-75 dark:brightness-100 lg:blur-xl"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/60 lg:bg-black-70 dark:bg-black/60 "></div>
            
            {/* Content */}
            <div className="relative z-10 text-center p-2 lg:text-left sm:px-6 lg:px-8 lg:w-3xl lg:space-y-5">
                <h1 className="text-3xl font-quicksand font-bold bg-linear-to-r from-blue-900 to-red-500 bg-clip-text text-transparent sm:text-5xl lg:text-4xl drop-shadow-lg min-h-12 dark:from-white dark:to-white">
                    {currentText}
                    <span className="inline-block w-0.5 h-5 bg-white ml-1 animate-blink"></span>
                </h1>
                <h2 className="text-xl bg-linear-to-r from-blue-900 to-red-500 bg-clip-text text-transparent font-quicksand font-bold mt-5 sm:text-5xl lg:text-4xl drop-shadow-lg min-h-12 dark:from-white dark:to-white">
                    Crafting Interactive Web Experiences!
                </h2>

                <p className="mt-2 text-lg bg-linear-to-r from-blue-900 to-red-500 bg-clip-text text-transparent cursor-pointer sm:text-xl font-quicksand lg:text-2xl drop-shadow-md dark:from-white dark:to-white">
                    | Building modern, interactive web experiences.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:items-left">
                    <button onClick={ScrollToContact} className="mt-8 px-10 py-3 font-quicksand border-2 border-rose-200/20 bg-rose-600 shadow-sm shadow-gray-600 text-white rounded-lg font-medium hover:bg-red-400 transition-colors">
                        Contact Me
                    </button>
                    <button onClick={ScrollToProject} className="mt-8 px-8 py-3 font-quicksand filter backdrop-blur-sm border-2 border-red-200/20 bg-transparent shadow-gray-500 shadow-sm text-white rounded-lg font-medium hover:bg-gray-900 transition-colors hover:border-gray-900">
                        View My Work
                    </button>
                </div>

            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="hidden md:flex p-4 gap-5"
            >
                {/* Image / Glass Card */}
                <motion.div variants={item} className="flex justify-center">
                    <div
                        className="relative rounded-full
                        bg-white/10 dark:bg-white/10
                        backdrop-blur-xl border border-white/30
                        shadow-2xl"
                    >
                        <img
                            src={heroImage}
                            alt="Developer"
                            className="w-80 h-80 object-contain rounded-full"
                        />

                        {/* Glow */}
                        <div className="absolute -inset-1 -z-10 rounded-3xl 
                             bg-linear-to-r from-blue-900 to-blue-900 
                             opacity-30 blur-2xl"
                        />
                    </div>
                </motion.div>
            </motion.div>




            {/* Tailwind blink animation */}
            <style>
                {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
            </style>
        </section>
    );
};

export default HeroSection;
