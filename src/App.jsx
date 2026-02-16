import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <div className="bg-[#0f172a] text-white">
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold text-cyan-400">
            Ajay Paka
          </h1>

          <div className="flex gap-6 text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

        </div>
      </div>

      {/* HERO SECTION */}
      <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* Animated Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
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
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </p>


          <div className="flex justify-center gap-6">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-110 transition-transform duration-300"
            >
              View My Work
            </a>

            <a
              href="/Ajay_Resume.pdf"
              download
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </motion.div>
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="py-24 px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Fresho Career Job Board
            </h3>
            <p className="text-gray-400 mb-4">
              A web platform for freshers to track and find entry-level jobs easily.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Ajay-paka/fresho-career-job-board"
                target="_blank"
                className="px-4 py-2 bg-cyan-400 text-black rounded-lg text-sm font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://fresho-career-job-board.onrender.com"
                className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm hover:bg-cyan-400 hover:text-black transition"
              >
                Live Demo
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1e293b] p-6 rounded-2xl shadow-lg hover:shadow-purple-400/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Python Expense Tracker
            </h3>
            <p className="text-gray-400 mb-4">
              Desktop app built using Tkinter & SQLite to track and analyze expenses.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Ajay-paka/expense-tracker-desktop"
                target="_blank"
                className="px-4 py-2 bg-purple-400 text-black rounded-lg text-sm font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg text-sm hover:bg-purple-400 hover:text-black transition"
              >
                Live Demo
              </a>
            </div>

          </motion.div>

        </div>
      </div>
      {/* CONTACT SECTION */}
      <div id="contact" className="py-24 px-6 bg-[#0f172a] text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#1e293b] p-10 rounded-2xl shadow-lg text-center"
        >
          <p className="text-gray-400 mb-6">
            I'm open to opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">

            <a
              href="mailto:ajaypaka47023@gmail.com"
              className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Ajay-paka"
              target="_blank"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ajaypaka"
              target="_blank"
              className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition"
            >
              LinkedIn
            </a>

          </div>
        </motion.div>
      </div>


    </div>
  );
}


export default App;

