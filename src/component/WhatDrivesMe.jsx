import { motion } from "framer-motion";
import { FaBolt, FaHeart, FaUsers } from "react-icons/fa";

const drivers = [
    {
        title: "What Excites Me About Tech",
        description:
            "I’m excited by how technology turns ideas into real-world solutions. The ability to build something from scratch, solve problems, and see people use what you create is deeply motivating.",
        icon: FaBolt,
    },
    {
        title: "Why I Enjoy Building Products",
        description:
            "I enjoy the process of building products that are both functional and thoughtful. From refining UI details to improving performance, I care about creating experiences that feel smooth, reliable, and purposeful.",
        icon: FaHeart,
    },
    {
        title: "The Teams I Want to Work With",
        description:
            "I thrive in collaborative teams that value learning, open communication, and shared ownership. I’m eager to grow alongside people who challenge each other, support feedback, and build meaningful products together.",
        icon: FaUsers,
    },
];

const WhatDrivesMe = () => {
    return (
        <section
            id="what-drives-me"
            className="relative duration-500 py-10 px-6 md:px-12 lg:px-20 bg-linear-to-b from-gray-200/50 to-white/50 dark:from-zinc-800/0 dark:to-zinc-900/0"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-lato md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        What Drives Me
                    </h2>
                    <p className="text-gray-600 font-quicksand font-medium mb-8 dark:text-gray-400 max-w-3xl mx-auto">
                        Beyond the code what motivates me is how I approach building, and
                        where I do my best work.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
                    {drivers.map(({ title, description, icon: Icon }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative p-5 rounded-3xl
                            bg-white/40 dark:bg-white/10 dark:border-none dark:shadow-gray-100/10 dark:shadow-sm
                            backdrop-blur-xl border border-white/30
                            shadow-lg hover:shadow-2xl transition"
                        >
                            {/* Icon */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="mb-4"
                            >
                                <Icon className="text-3xl text-rose-500" />
                            </motion.div>

                            <h3 className="text-lg font-lato font-semibold text-gray-900 dark:text-white mb-3">
                                {title}
                            </h3>

                            <p className="text-sm font-quicksand font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                                {description}
                            </p>

                            {/* Glow */}
                            <div
                                className="absolute -inset-1 -z-10 rounded-3xl
                                bg-linear-to-r from-red-50 to-rose-50 dark:from-zinc-900 dark:to-zinc-900
                                opacity-0 group-hover:opacity-30 blur-sm
                                animate-pulse transition"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* ATS Keywords */}
                <div className="sr-only">
                    Passion for Technology Product Development Team Collaboration
                    Continuous Learning Software Engineering Culture Fit Junior Developer
                </div>
            </div>
        </section>
    );
};

export default WhatDrivesMe;