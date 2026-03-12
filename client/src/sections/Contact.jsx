import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";



const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                "Emmanuel_Samuel",
                "Emmanuel001",
                formRef.current,
                "Au6iMYPaNtMkzDG6n"
            );
            toast.success("Message sent successfully 🚀");
            formRef.current.reset();
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative flex items-center min-h-screen duration-500 py-14 px-6 overflow-hidden md:px-12 lg:px-20
            bg-linear-to-t from-white to-gray-100
            dark:from-zinc-500 dark:to-zinc-900"
        >
            <Toaster position="top-right" />

            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold font-lato text-gray-900 dark:text-white mb-6">
                        Let’s Connect
                    </h2>
                    <p className="text-gray-600 font-quicksand font-medium dark:text-gray-400 text-lg mb-8 max-w-md">
                        Open to roles, internships, freelance projects, and collaborations.
                        Feel free to reach out.
                    </p>

                    <div className="space-y-4">
                        <a href="mailto:official.emmanuel.samuel@gmail.com" className="contact-link flex items-center gap-1 font-quicksand font-medium dark:text-gray-300">
                            <FaEnvelope /> Emmanuel Samuel
                        </a>
                        <a href="https://github.com/OfficialEmmanuelSamuel" className="contact-link flex items-center gap-1 font-quicksand font-medium dark:text-gray-300">
                            <FaGithub /> OfficialEmmanuelSamuel
                        </a>
                        <a href="https://www.linkedin.com/in/emmanuel-samuel-718254273" className="contact-link flex items-center gap-1 font-quicksand font-medium dark:text-gray-300">
                            <FaLinkedin /> Emmanuel Samuel
                        </a>
                    </div>
                </motion.div>

                <p className="text-center font-medium font-quicksand mt-5 uppercase bg-gray-100 rounded-sm p-5 text-black/90 w-full lg:hidden">Send A Massage</p>
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative p-4 py-8
                    dark:bg-white/80
                    border border-white/30 dark:rounded-xl
                    "
                >

                    <form ref={formRef} onSubmit={sendEmail} className="space-y-3 font-quicksand font-medium">
                        <input
                            name="name"
                            required
                            placeholder="Your Name"
                            className="input outline-1 outline-gray-200 p-2 w-full rounded-sm shadow-sm shadow-gray-300 h-12 dark:shadow-gray-500 dark:bg-white"
                        />
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Your Email"
                            className="input outline-1 outline-gray-200 p-2 w-full rounded-sm shadow-sm shadow-gray-300 h-12 dark:shadow-gray-500 dark:bg-white "
                        />
                        <input
                            name="title"
                            type="text"
                            required
                            placeholder="Subject"
                            className="input outline-1 outline-gray-200 p-2 w-full rounded-sm shadow-sm shadow-gray-300 h-12 dark:shadow-gray-500 dark:bg-white"
                        />
                        <textarea
                            name="message"
                            rows="8"
                            required
                            placeholder="Your Message"
                            className="input outline-1 outline-gray-200 p-2 w-full rounded-sm shadow-sm shadow-gray-300 dark:shadow-gray-500 dark:bg-white"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mx-auto px-12 mt-5 rounded-sm bg-linear-to-r from-rose-500 to-rose-500
                            cursor-pointer hover:bg-indigo-700 text-white font-medium py-3
                            flex items-center justify-center gap-2"
                        >
                            {loading && (
                                <motion.span
                                    className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                />
                            )}

                            {!loading && <IoPaperPlane size={18} />}

                            <span>{loading ? "Sending..." : "Send Message"}</span>
                        </button>
                    </form>

                    {/* Glow */}
                    <div className="absolute -inset-1 -z-10 rounded-3xl opacity-30 blur-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;