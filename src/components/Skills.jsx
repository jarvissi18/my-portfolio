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
    icon: Code2,
    title: "Programming",
    description: "Languages I use to build and solve problems.",
    skills: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces.",
    skills: ["React", "HTML5", "CSS3", "JavaScript"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building APIs and server-side applications.",
    skills: ["FastAPI", "Flask", "REST APIs", "Python"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Technologies I've used in my AI-powered projects.",
    skills: [
      "Generative AI",
      "NLP",
      "RAG",
      "Embeddings",
      "Semantic Search",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Managing application and vector data.",
    skills: ["SQLite", "PostgreSQL", "ChromaDB"],
  },
  {
    icon: GitBranch,
    title: "Tools & Core Concepts",
    description:
      "Development tools and computer engineering fundamentals.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "OOP",
      "DBMS",
      "OS",
      "CN",
      "DSA",
    ],
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
      className="w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full min-w-0"
        >
          <motion.p
            initial={{
              opacity: 0,
              letterSpacing: "0.12em",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.25em",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="mb-3 text-xs font-medium uppercase text-gray-500 sm:text-sm"
          >
            Technical Skills
          </motion.p>

          <h2 className="w-full max-w-4xl min-w-0 break-words text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Technologies I use to{" "}
            <span className="text-white-200">
              build and experiment.
            </span>
          </h2>

          <p className="mt-5 w-full max-w-2xl min-w-0 break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            A practical toolkit developed through projects, internships,
            coursework, and continuous learning.
          </p>
        </motion.div>

        {/* =================================================
            SKILLS GRID
        ================================================= */}

        <div className="mt-12 grid w-full min-w-0 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
              >
                {/* Ambient glow */}
                <motion.div
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/[0.02] blur-3xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />

                {/* Icon + title */}
                <div className="relative flex min-w-0 items-start gap-4">
                  <motion.div
                    whileHover={{
                      rotate: -5,
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
                  >
                    <Icon
                      size={21}
                      className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                    />
                  </motion.div>

                  <div className="min-w-0 flex-1">
                    <h3 className="break-words text-base font-semibold sm:text-lg">
                      {group.title}
                    </h3>

                    <p className="mt-1 break-words text-xs leading-5 text-gray-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="relative mt-5 flex min-w-0 flex-wrap gap-2 sm:mt-6">
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
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.3,
                        delay:
                          0.18 +
                          index * 0.08 +
                          skillIndex * 0.035,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      className="max-w-full break-words rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-gray-400 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:px-3 sm:text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          whileHover={{
            y: -2,
          }}
          className="group relative mt-8 flex w-full min-w-0 items-start gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:mt-10 sm:p-5"
        >
          {/* Subtle glow */}
          <motion.div
            className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/[0.02] blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            animate={{
              rotate: [0, 4, -4, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative shrink-0"
          >
            <BrainCircuit
              size={18}
              className="mt-0.5 text-gray-500 transition-colors duration-300 group-hover:text-white"
            />
          </motion.div>

          <p className="relative min-w-0 break-words text-sm leading-6 text-white-200">
            Currently focusing on strengthening my{" "}
            <span className="text-white-200">
              DSA, backend development, Generative AI, and system-building
              skills
            </span>{" "}
            through hands-on projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}