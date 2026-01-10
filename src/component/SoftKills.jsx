import { motion } from "framer-motion";
import {
    FaUsers,
    FaLightbulb,
    FaComments,
    FaClock,
    FaTasks,
    FaRocket,
} from "react-icons/fa";

const softSkills = [
    {
        title: "Communication",
        description:
            "Able to clearly explain ideas, collaborate with teams, and translate requirements into technical solutions.",
        icon: FaComments,
    },
    {
        title: "Problem Solving",
        description:
            "Approach challenges logically, break down problems, and implement effective solutions.",
        icon: FaLightbulb,
    },
    {
        title: "Team Collaboration",
        description:
            "Comfortable working in team environments, contributing ideas, and supporting shared goals.",
        icon: FaUsers,
    },
    {
        title: "Time Management",
        description:
            "Able to prioritize tasks, meet deadlines, and manage multiple responsibilities efficiently.",
        icon: FaClock,
    },
    {
        title: "Adaptability",
        description:
            "Quick to learn new tools, frameworks, and workflows in fast-paced environments.",
        icon: FaRocket,
    },
    {
        title: "Attention to Detail",
        description:
            "Focused on clean UI, consistent design, and writing maintainable, readable code.",
        icon: FaTasks,
    },
];

const SoftSkills = () => {
    return (
        <section
            id="soft-skills"
            className="relative duration-500 w-full py-10 px-6 md:px-12 lg:px-20
            dark:from-neutral-950 dark:to-neutral-900"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-lato md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Soft Skills
                    </h2>
                    <p className="text-gray-600 font-quicksand font-medium dark:text-gray-400 max-w-2xl mx-auto">
                        The personal strengths that help me collaborate effectively and
                        deliver high-quality work.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {softSkills.map(({ title, description, icon: Icon }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="group relative p-6 rounded-3xl
                            bg-white/40 dark:bg-white/10
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
                                <Icon className="text-3xl text-red-500" />
                            </motion.div>

                            <h3 className="text-lg font-lato font-semibold text-gray-900 dark:text-white mb-2">
                                {title}
                            </h3>

                            <p className="text-sm text-gray-600 font-quicksand font-medium dark:text-gray-400 leading-relaxed">
                                {description}
                            </p>

                            {/* Glow */}
                            <div
                                className="absolute -inset-1 -z-10 rounded-3xl
                                bg-linear-to-r from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800
                                opacity-0 group-hover:opacity-30 blur-2xl
                                animate-pulse transition"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* ATS Keywords */}
                <div className="sr-only">
                    Communication Skills Team Collaboration Problem Solving Time Management
                    Adaptability Attention to Detail Junior Software Developer Soft Skills
                </div>
            </div>
        </section>
    );
};

export default SoftSkills;