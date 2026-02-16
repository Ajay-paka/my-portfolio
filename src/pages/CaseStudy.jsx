import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

function CaseStudy() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <div className="p-20 text-center">Project Not Found</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#0f172a] text-white px-6 py-20"
        >
            {/* Back Button */}
            <Link
                to="/"
                className="fixed top-6 left-6 bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition"
            >
                ← Back
            </Link>

            <div className="max-w-5xl mx-auto">

                {/* HERO */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-bold mb-6 text-cyan-400">
                        {project.title}
                    </h1>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-purple-400">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-[#1e293b] rounded-full text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Problem */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-cyan-400">
                        The Problem
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        {project.problem}
                    </p>
                </div>

                {/* Solution */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                        The Solution
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        {project.solution}
                    </p>
                </div>

                {/* Impact */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-cyan-400">
                        Impact
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        {project.impact}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-6 mt-10">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:scale-105 transition"
                        >
                            View GitHub
                        </a>
                    )}

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                        >
                            Live Demo
                        </a>
                    )}
                    {project.App && (
                        <a
                            href={project.App}
                            target="_blank"
                            className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                        >
                            Download Desktop App
                        </a>
                    )}
                </div>

            </div>
            {/* Metrics */}
            <div className="mb-20">
                <h2 className="text-3xl font-semibold mb-10 text-purple-400">
                    Key Highlights
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {project.metrics?.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#1e293b] p-8 rounded-2xl text-center hover:scale-105 transition"
                        >
                            <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                                {item.value}
                            </h3>
                            <p className="text-gray-400">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Screenshots */}
            {project.screenshots && (
                <div className="mb-20">
                    <h2 className="text-3xl font-semibold mb-10 text-cyan-400">
                        Screenshots
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">
                        {project.screenshots.map((item, i) => (
                            <div key={i} className="space-y-4">

                                {/* Caption Top (optional) */}
                                {/* <p className="text-gray-400 text-sm">
            {item.caption}
          </p> */}

                                <img
                                    src={item.image}
                                    alt="Project Screenshot"
                                    className="rounded-2xl shadow-lg hover:scale-105 transition duration-300"
                                />

                                {/* Caption Bottom */}
                                <p className="text-gray-500 text-sm text-center italic">
                                    {item.caption}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            )}

        </motion.div>
    );
}

export default CaseStudy;
