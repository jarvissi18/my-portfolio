import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "AI & Intelligence",
    description:
      "Technologies I use to build practical AI-powered applications and intelligent workflows.",
    skills: [
      "Generative AI",
      "NLP",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "ChromaDB",
    ],
  },
  {
    icon: Code2,
    number: "02",
    title: "Programming",
    description:
      "Languages I use for application development, problem solving, and data-driven systems.",
    skills: ["Python", "C++", "JavaScript","TypeScript"],
  },
  {
    icon: Globe,
    number: "03",
    title: "Frontend Engineering",
    description:
      "Building responsive, interactive interfaces with a focus on clean product experiences.",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    icon: Server,
    number: "04",
    title: "Backend Engineering",
    description:
      "Building REST APIs and server-side applications with Python-based backend technologies.",
    skills: ["FastAPI", "Flask", "REST APIs", "Python"],
  },
  {
    icon: Database,
    number: "05",
    title: "Data & Databases",
    description:
      "Working with relational, application, and vector data across full-stack and AI workflows.",
    skills: ["PostgreSQL", "SQLite", "ChromaDB"],
  },
  {
    icon: GitBranch,
    number: "06",
    title: "Engineering Foundations",
    description:
      "Core computer engineering concepts and development tools used throughout my projects.",
    skills: ["Git", "GitHub", "VS Code", "OOP", "DBMS", "OS", "CN", "DSA"],
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.22em] text-gray-600">
              02 / ENGINEERING STACK
            </span>
            <span className="h-px w-10 bg-white/10" />
          </div>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Technologies I use to
            <span className="text-gray-500"> build and experiment.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            A practical engineering stack spanning AI applications,
            full-stack development, backend systems, and data.
          </p>
        </motion.div>

        {/* Skill Matrix */}
        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
              >
                <motion.div
                  className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-white/[0.025] blur-3xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{
                          rotate: -5,
                          scale: 1.06,
                        }}
                        transition={{ duration: 0.2 }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                      >
                        <Icon
                          size={20}
                          className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                        />
                      </motion.div>

                      <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-gray-600">
                          {group.number}
                        </p>
                        <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-gray-700">
                      STACK
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-gray-500">
                    {group.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay:
                            0.15 +
                            index * 0.07 +
                            skillIndex * 0.035,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          y: -2,
                          scale: 1.03,
                        }}
                        className="max-w-full break-words rounded-md border border-white/10 bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-gray-500 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:text-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:mt-10 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                Currently building
              </p>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
                Strengthening DSA, backend engineering, Generative AI, and
                system-building skills through hands-on projects.
              </p>
            </div>

            <div className="shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[10px] text-gray-500">
              BUILD → LEARN → ITERATE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
