import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";


function CaseStudy() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    const navigate = useNavigate();

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
            <button onClick={() => navigate("/#projects")}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 
             bg-slate-800 hover:bg-slate-700 
             text-slate-200 hover:text-white 
             rounded-lg transition-all duration-300 
             border border-slate-600">
                ← Back
            </button>

            <div className="max-w-6xl mx-auto">

                {/* HERO */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-bold mb-7 text-cyan-400">
                        {project.title}
                    </h1>

                    <p className="text-gray-400 mb-15 text-lg max-w-1xl mx-auto">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 mt-6">
                        {project.tech?.map((tech, i) => (
                            <span
                                key={i}
                                /*className="px-4 py-2 bg-[#1e293b] rounded-full text-sm text-cyan-400"*/
                                className="bg-[#1e293b] p-3 rounded-2xl text-cyan-400 text-center hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 transition duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>

                {/* Overview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-cyan-400">
                        Project Overview
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        {project.Overview ? project.Overview.join(" ") : "No overview available."}
                    </p>
                </div>

                {/* Features */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-cyan-400">
                        Features Implemented
                    </h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2">
                        {project.features?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Technical Implementation */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                        Technical Implementation
                    </h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2">
                        {project.implementation?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Challenges */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-red-400">
                        Challenges Faced
                    </h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2">
                        {project.challenges?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>


                {/* What I Learned */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-cyan-400">
                        What I Learned
                    </h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2">
                        {project.learned?.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* skills strengthened */}
                <div className="mt-16">
                    <h2 className="text-3xl font-semibold mb-4 text-purple-400">
                        Skills Strengthened
                    </h2>

                    <div className="flex flex-wrap gap-5">
                        {project.skills?.map((skill, i) => (
                            <span
                                key={i}
                                className="bg-[#1e293b] p-4 rounded-2xl text-purple-400 text-center hover:scale-105 hover:shadow-lg hover:shadow-[0_0_30px_#22d3ee] hover:shadow-purple-400/40 transition duration-300" >

                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-7 mt-12">
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



                {/* Screenshots */}
                {project.screenshots && (
                    <div className=" mt-8 mb-20">
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

                {/* Metrics */}
                {project.metrics && (
                    <div className="mb-20">
                        <h2 className="text-4xl font-semibold mb-10 text-purple-400">
                            Project Metrics
                        </h2>

                        <div className="grid md:grid-cols-4 max-h-3xl gap-5">
                            {project.metrics.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[#1e293b] p-8 rounded-2xl text-center hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 transition duration-300"
                                >
                                    <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                                        {item.value}
                                    </h3>
                                    <p className="text-gray-400">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>


        </motion.div>
    );
}

export default CaseStudy;
