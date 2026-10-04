import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

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

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient background */}
      <motion.div
        className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-white/[0.02] blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid w-full min-w-0 gap-12 sm:gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* =================================================
              LEFT
          ================================================= */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
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
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-3 text-xs font-medium uppercase text-gray-500 sm:text-sm"
            >
              Contact
            </motion.p>

            <h2 className="w-full max-w-3xl break-words text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Let's build something{" "}
              <motion.span
                initial={{
                  opacity: 0.45,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="text-white-200"
              >
                meaningful.
              </motion.span>
            </h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="mt-6 w-full max-w-xl break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8"
            >
              I'm open to internship opportunities, collaborative projects,
              and conversations about software development and AI.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=swapnilsurywanshi90@gmail.com&su=Portfolio%20Contact"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="group relative mt-8 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-200 sm:px-6 sm:text-base"
            >
              {/* Button glow */}
              <motion.span
                className="pointer-events-none absolute inset-0 bg-black/[0.04]"
                initial={{
                  x: "-100%",
                }}
                whileHover={{
                  x: "100%",
                }}
                transition={{
                  duration: 0.55,
                  ease: "easeInOut",
                }}
              />

              <Mail
                size={18}
                className="relative z-10 shrink-0 transition-transform duration-300 group-hover:rotate-6"
              />

              <span className="relative z-10">
                Send me an email
              </span>

              <ArrowUpRight
                size={17}
                className="relative z-10 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </motion.div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex w-full min-w-0 flex-col justify-end"
          >
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="mb-5 text-sm text-gray-600"
            >
              Connect with me
            </motion.p>

            <div className="grid w-full min-w-0 gap-3">

              {/* GitHub */}
              <motion.a
                href="https://github.com/jarvissi18"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.99,
                }}
                className="group relative flex w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-5"
              >
                <motion.div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.03] blur-2xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10 flex min-w-0 items-center gap-4">
                  <motion.span
                    whileHover={{
                      scale: 1.06,
                      rotate: -3,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-xs font-semibold text-gray-400"
                  >
                    GH
                  </motion.span>

                  <div className="min-w-0">
                    <p className="font-medium text-white">
                      GitHub
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-600">
                      @jarvissi18
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="relative z-10 shrink-0 text-gray-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/swapnil-suryawanshi-719245267/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.99,
                }}
                className="group relative flex w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-5"
              >
                <motion.div
                  className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/[0.03] blur-2xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                <div className="relative z-10 flex min-w-0 items-center gap-4">
                  <motion.span
                    whileHover={{
                      scale: 1.06,
                      rotate: 3,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm font-semibold text-gray-400"
                  >
                    in
                  </motion.span>

                  <div className="min-w-0">
                    <p className="font-medium text-white">
                      LinkedIn
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-600">
                      swapnil suryawanshi
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="relative z-10 shrink-0 text-gray-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}