import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building responsive web applications with React and JavaScript on the frontend, and Python-based backend APIs using FastAPI and Flask.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Generative AI",
    description:
      "Developing practical AI applications using Generative AI, NLP, RAG, embeddings, semantic search, and AI APIs.",
  },
  {
    icon: Layers3,
    title: "RAG & Intelligent Systems",
    description:
      "Working with document processing, embeddings, vector databases, and retrieval-based systems to build context-aware applications.",
  },
  {
    icon: Database,
    title: "Backend & Databases",
    description:
      "Designing REST APIs and working with SQLite, PostgreSQL, ChromaDB, and application data management.",
  },
];

const revealUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full min-w-0"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
            About Me
          </p>

          <h2 className="w-full max-w-4xl break-words text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            I build{" "}
            <span className="text-white-500">
              practical software
            </span>{" "}
            with AI at the core.
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid w-full min-w-0 gap-12 sm:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Introduction */}
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full min-w-0"
          >
            <p className="w-full break-words text-base leading-7 text-white-200 sm:text-lg sm:leading-8">
              I'm a Computer Engineering student and developer who enjoys
              turning ideas into functional, real-world applications. My
              development work combines{" "}
              <span className="text-white">
                Python, React, JavaScript, FastAPI, and databases
              </span>{" "}
              with modern AI technologies.
            </p>

            <p className="mt-6 w-full break-words text-base leading-7 text-white-200 sm:text-lg sm:leading-8">
              Through my projects, I've worked on full-stack applications,
              AI-powered document processing, voice-based systems, and
              Retrieval-Augmented Generation (RAG). I enjoy working across
              the stack—from designing React interfaces and building REST
              APIs to connecting AI models, embeddings, and vector databases.
            </p>

            <p className="mt-6 w-full break-words text-base leading-7 text-white-200 sm:text-lg sm:leading-8">
              I'm particularly interested in{" "}
              <span className="text-gray-200">
                AI-powered software, Generative AI, backend development,
                and intelligent web applications
              </span>
              . My goal is to keep improving my engineering fundamentals
              while building software that solves practical problems.
            </p>

            {/* Education */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="mt-8 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:mt-10 sm:p-6"
            >
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <GraduationCap
                    size={21}
                    className="text-gray-400"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-500">
                    Currently pursuing
                  </p>

                  <h3 className="mt-1 break-words text-base font-semibold text-white sm:text-lg">
                    B.E. Computer Engineering
                  </h3>

                  <p className="mt-1 break-words text-sm text-gray-400 sm:text-base">
                    Sinhgad College of Engineering, Pune
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    2024 – 2027
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <div className="grid w-full min-w-0 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3 }}
                  className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/[0.02] blur-3xl transition duration-500 group-hover:bg-white/[0.05]" />

                  <div className="relative flex min-w-0 items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon
                        size={20}
                        className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="break-words text-base font-semibold sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 break-words text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Technology Focus */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mt-10 w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:mt-12 sm:p-6"
        >
          <div className="flex min-w-0 flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="mr-1 flex shrink-0 items-center gap-2 text-sm text-gray-500 sm:mr-2">
              <Rocket size={17} />
              Current focus
            </div>

            {[
              "Python",
              "React",
              "FastAPI",
              "JavaScript",
              "Generative AI",
              "RAG",
              "ChromaDB",
              "PostgreSQL",
            ].map((technology) => (
              <motion.span
                key={technology}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white sm:px-3 sm:text-sm"
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}