import {
  ArrowDown,
  ArrowRight,
  FileDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  /* =========================================
     POINTER SPOTLIGHT
     Desktop pointer devices only
  ========================================= */

  const handlePointerMove = (event) => {
    if (
      !window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      ).matches
    ) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty(
      "--mouse-x",
      `${x}%`
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      `${y}%`
    );
  };

  const resetPointer = (event) => {
    event.currentTarget.style.setProperty(
      "--mouse-x",
      "50%"
    );

    event.currentTarget.style.setProperty(
      "--mouse-y",
      "50%"
    );

    setIsHoveringHero(false);
  };

  /* =========================================
     RESUME DOWNLOAD
  ========================================= */

  const handleResumeDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    try {
      const resumePath =
        `${import.meta.env.BASE_URL}Swapnil_Surywanshi_AI.pdf`;

      const response = await fetch(resumePath);

      if (!response.ok) {
        throw new Error(
          `Resume not found: ${response.status}`
        );
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = "Swapnil_Surywanshi_AI.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Resume download failed:", error);

      /*
        Fallback:
        If browser blocks the download, open the PDF directly.
      */
      const resumePath =
        `${import.meta.env.BASE_URL}Swapnil_Surywanshi_AI.pdf`;

      window.open(resumePath, "_blank");
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
      }, 700);
    }
  };

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHoveringHero(true)}
      onPointerLeave={resetPointer}
      className="relative flex min-h-screen w-full min-w-0 items-center overflow-hidden pt-20"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Main ambient glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl sm:h-[500px] sm:w-[500px] sm:bg-white/[0.04]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.28, 0.45, 0.28],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary glow */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-white/[0.015] blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        animate={{
          backgroundPosition: [
            "0px 0px",
            "60px 60px",
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: `
            radial-gradient(
              420px circle at var(--mouse-x) var(--mouse-y),
              rgba(255,255,255,0.045),
              transparent 72%
            )
          `,
          opacity: isHoveringHero ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto w-full min-w-0 max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="w-full min-w-0 max-w-4xl">

          {/* =================================================
              AVAILABILITY
          ================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -2,
            }}
            className="mb-8 inline-flex max-w-full min-w-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
          >
            <motion.span
              className="relative h-2 w-2 shrink-0 rounded-full bg-green-400"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.55, 1],
                boxShadow: [
                  "0 0 0 rgba(74,222,128,0)",
                  "0 0 12px rgba(74,222,128,0.45)",
                  "0 0 0 rgba(74,222,128,0)",
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="truncate text-xs text-gray-400 sm:text-sm">
              Open to Internships & Opportunities
            </span>
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-full min-w-0 break-words text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Hi, I'm{" "}

            <motion.span
              className="inline-block text-blue-500"
              whileHover={{
                y: -2,
                color: "#2766b7",
              }}
              transition={{
                duration: 0.22,
              }}
            >
              Swapnil.
            </motion.span>

            <br />

            I build{" "}

            <motion.span
              className="relative inline-block text-white"
              animate={{
                opacity: [1, 0.86, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              AI-powered

              {/* Shimmer */}
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: [
                    "200% 0%",
                    "-100% 0%",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              >
                AI-powered
              </motion.span>
            </motion.span>

            <br className="hidden sm:block" />

            <span className="sm:hidden">
              {" "}
            </span>

            full-stack applications.
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 w-full max-w-2xl min-w-0 break-words text-base leading-7 text-gray-400 sm:text-xl sm:leading-8"
          >
            Computer Engineering student and developer focused on
            building AI-powered applications, full-stack systems,
            and practical software solutions using React, Python,
            FastAPI, PostgreSQL, and Generative AI.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >

            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="group inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-medium !text-black shadow-[0_0_0_rgba(255,255,255,0)] transition-shadow duration-300 hover:shadow-[0_10px_35px_rgba(255,255,255,0.13)] sm:w-auto"
            >
              <span className="!text-black">
                View My Projects
              </span>

              <ArrowRight
                size={18}
                className="shrink-0 !text-black transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* Download Resume */}
           <motion.a
            href="https://drive.google.com/file/d/1u_XuF3ym0CMUBt60eUMBsZqYgmMSCqo8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-medium text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.05] sm:w-auto"
          >
            <FileDown size={18} className="shrink-0" />
            <span>View Resume</span>
          </motion.a>
          </motion.div>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <span className="text-sm text-gray-600">
              Find me on
            </span>

            <motion.a
              href="https://github.com/jarvissi18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
              }}
              className="relative text-sm text-gray-500 transition-colors duration-200 hover:text-white"
            >
              GitHub

              <motion.span
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-white"
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.22,
                }}
              />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/swapnil-surywanshi-719245267/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
              }}
              className="relative text-sm text-gray-500 transition-colors duration-200 hover:text-white"
            >
              LinkedIn

              <motion.span
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-white"
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.22,
                }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.a
          href="#about"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.6,
          }}
          whileHover={{
            y: -2,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-white md:flex"
        >
          <span className="text-xs uppercase tracking-[0.25em]">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}