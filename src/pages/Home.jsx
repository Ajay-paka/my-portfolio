import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="bg-[#0f172a] text-white"
        >

            {/* NAVBAR */}
            <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-cyan-400">Ajay Paka</h1>

                    <div className="flex gap-6 text-gray-300">
                        <a href="#home" className="hover:text-cyan-400">Home</a>
                        <a href="#about" className="hover:text-cyan-400">About</a>
                        <a href="#projects" className="hover:text-cyan-400">Projects</a>
                        <a href="#contact" className="hover:text-cyan-400">Contact</a>
                    </div>
                </div>
            </div>

            {/* HERO */}
            <div id="home" className="relative min-h-screen flex items-center justify-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I'm <span className="text-cyan-400">Ajay</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-8">
                        <span className="text-cyan-400 font-semibold">
                            <Typewriter
                                words={[
                                    "Software Developer",
                                    "React Developer",
                                    "Python Developer",
                                    "Full Stack Enthusiast"
                                ]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={30}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="#projects"
                            className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-110 transition"
                        >
                            View My Work
                        </a>

                        <a href="/Ajay_Resume.pdf" download className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition duration-300" >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* ABOUT */}
            <div id="about" className="py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-12">
                    About <span className="text-cyan-400">Me</span>
                </h2>

                <div className="max-w-4xl mx-auto text-center text-gray-400 text-lg leading-relaxed">
                    I am a passionate Software Developer focused on building modern,
                    responsive, and scalable web applications using React and Python.
                    I enjoy solving real-world problems and continuously improving my
                    development skills through hands-on projects and deployments.
                </div>
            </div>

            {/* SKILLS SECTION */} <div className="py-24 px-6 bg-[#0f172a]">
                <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16" >
                    My
                    <span className="text-cyan-400">
                        Skills</span>
                </motion.h2>
                <div className="max-w-5xl mx-auto space-y-12">

                    {/* Frontend */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                            Frontend</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {["HTML", "CSS", "Tailwind CSS", "React"].map((skill, i) => (<div key={i}
                                className="bg-[#1e293b] p-4 rounded-lg text-center hover:scale-105 hover:shadow-lg hover:shadow-[0_0_30px_#22d3ee] hover:shadow-cyan-400/40 transition duration-300" >
                                {skill} </div>))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                            Backend</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {["Python", "REST APIs", "PostgreSQL"].map((skill, i) => (<div key={i}
                                className="bg-[#1e293b] p-4 rounded-lg text-center hover:scale-105 hover:shadow-lg hover:shadow-[0_0_30px_#22d3ee] hover:shadow-purple-400/40 transition duration-300" >
                                {skill} </div>))}
                        </div>
                    </div>

                </div>
            </div>

            {/* PROJECTS */}
            <div section id="projects" className="py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="text-cyan-400">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                    <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Fresho Career Job Board
                        </h3>
                        <p className="text-gray-400 mb-4">
                            A web platform for freshers to track entry-level jobs.
                        </p>

                        <Link
                            to="/projects/fresho-career"
                            className="px-4 py-2 bg-cyan-400 align-middle text-black rounded-lg text-sm font-semibold"
                        >
                            👁 project overview
                        </Link>
                    </div>

                    <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            Python Expense Tracker
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Desktop app built using Tkinter & SQLite.
                        </p>

                        <Link
                            to="/projects/expense-tracker"
                            className="px-4 py-2 bg-purple-400 text-black rounded-lg text-sm font-semibold"
                        >
                            project overview 👁
                        </Link>
                    </div>

                </div>
            </div>

            {/* CONTACT */}
            <div id="contact" className="py-24 px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Get In <span className="text-cyan-400">Touch</span>
                </h2>

                <div className="max-w-3xl mx-auto bg-[#1e293b] p-10 rounded-2xl shadow-lg text-center">
                    <p className="text-gray-400 mb-6">
                        I'm open to opportunities and collaborations.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-6">

                        <a
                            href="mailto:ajaypaka47023@gmail.com"
                            className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold"
                        >
                            Email Me
                        </a>

                        <a
                            href="https://github.com/Ajay-paka"
                            target="_blank"
                            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/ajaypaka"
                            target="_blank"
                            className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg"
                        >
                            LinkedIn
                        </a>

                    </div>
                </div>
            </div>

        </motion.div>
    );
}

export default Home;
