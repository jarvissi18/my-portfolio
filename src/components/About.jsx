import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI Applications",
    description:
      "Building practical AI products with Generative AI, LLMs, RAG, embeddings, semantic search, and AI APIs.",
    tags: ["LLMs", "RAG", "Embeddings"],
  },
  {
    icon: Code2,
    number: "02",
    title: "Full-Stack Engineering",
    description:
      "Developing responsive products across the stack with React, JavaScript, Python, FastAPI, REST APIs, and modern UI systems.",
    tags: ["React", "FastAPI", "REST APIs"],
  },
  {
    icon: Database,
    number: "03",
    title: "Data & Backend Systems",
    description:
      "Designing application data layers with PostgreSQL, SQLite, ChromaDB, SQLAlchemy, and vector-based retrieval workflows.",
    tags: ["PostgreSQL", "SQLAlchemy", "ChromaDB"],
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
          className="max-w-4xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.22em] text-gray-600">
              01 / ABOUT
            </span>
            <span className="h-px w-10 bg-white/10" />
          </div>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            I build practical software
            <span className="text-gray-500"> with AI at the core.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            I&apos;m a Computer Engineering student focused on turning ideas
            into useful, full-stack products. My work combines software
            engineering fundamentals with modern AI technologies.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Engineering Philosophy */}
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
            className="flex flex-col"
          >
            <div className="border-l border-white/10 pl-5 sm:pl-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                Engineering mindset
              </p>

              <p className="mt-5 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                I enjoy working across the stack — from designing interfaces
                and REST APIs to connecting AI models, databases, embeddings,
                and real application workflows.
              </p>

              <p className="mt-5 text-base leading-7 text-gray-500">
                I&apos;m particularly interested in AI-powered software,
                Generative AI, backend development, and intelligent web
                applications that solve practical problems.
              </p>
            </div>

            {/* Education */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <GraduationCap size={20} className="text-gray-400" />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    Education
                  </p>

                  <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                    B.E. Computer Engineering
                  </h3>

                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    Sinhgad College of Engineering, Pune
                  </p>

                  <p className="mt-2 text-xs text-gray-600">
                    2024 — 2027
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Diploma */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <GraduationCap size={20} className="text-gray-400" />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    Diploma
                  </p>

                  <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                    Diploma in Computer Engineering
                  </h3>

                  <p className="mt-1 text-sm text-gray-400 sm:text-base">
                    Rajiv Gandhi Polytechnic Institute, Udgir
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
                    <span>Aug 2021 — May 2024</span>
                    <span className="text-white/10">•</span>
                    <span>87.71%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Capabilities */}
          <div className="grid gap-3">
            {capabilities.map((item, index) => {
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
                    delay: 0.08 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/[0.025] blur-3xl transition duration-500 group-hover:bg-white/[0.06]" />

                  <div className="relative flex gap-4 sm:gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon
                        size={20}
                        className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.18em] text-gray-600">
                            {item.number}
                          </p>
                          <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                            {item.title}
                          </h3>
                        </div>

                        <Layers3
                          size={15}
                          className="mt-1 shrink-0 text-gray-700 transition-colors duration-300 group-hover:text-gray-500"
                        />
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Engineering First */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:mt-12 sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <ShieldCheck size={18} className="text-gray-400" />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                  Engineering first
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Authentication · APIs · Databases · RBAC · Deployment
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "React",
                "FastAPI",
                "PostgreSQL",
                "RAG",
                "Generative AI",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-gray-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
