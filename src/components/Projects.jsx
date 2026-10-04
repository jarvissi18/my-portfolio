import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  FileSearch,
  FileText,
  Languages,
  MessageSquare,
  Mic,
  ShieldCheck,
  Sparkles,
  Upload,
  Users,
  Activity,
} from "lucide-react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    title: "StudySphere AI",
    subtitle: "AI-Powered Study Assistant",
    description:
      "An AI-powered learning platform that lets users upload study PDFs, ask contextual questions, and generate summaries, notes, flashcards, and quizzes. Built with Retrieval-Augmented Generation using FastAPI, ChromaDB, sentence-transformers, and Google Gemini.",
    icon: BrainCircuit,
    featured: true,
    preview: "studysphere",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Google Gemini",
      "RAG",
      "ChromaDB",
    ],
    github:
      "https://github.com/jarvissi18/StudySphere-AI-Assistant",
  },

  {
    title: "MediVoice AI",
    subtitle: "AI-Powered Hospital Management System",
    description:
      "A full-stack AI-assisted hospital management platform for managing patients, records, authentication, analytics, and voice-driven workflows. Designed with a React frontend, FastAPI backend, PostgreSQL database, JWT authentication, and Gemini AI.",
    icon: Mic,
    featured: true,
    preview: "medivoice",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Gemini AI",
    ],
    github:
      "https://github.com/jarvissi18/MediVoice-AI",
  },

  {
    title: "PolyTranslate AI",
    subtitle: "AI-Powered Multilingual Document Translation",
    description:
      "An AI-powered document translation platform that translates PDF, DOCX, and TXT files into multiple languages while generating downloadable multilingual PDF outputs.",
    icon: Languages,
    featured: false,
    preview: "polytranslate",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Gemini AI",
      "SQLite",
      "ReportLab",
    ],
    github:
      "https://github.com/jarvissi18/PolyTranslate-AI",
  },

  {
    title: "Student Management & Analytics Platform",
    subtitle: "Full-Stack Student Management Platform",
    description:
      "A full-stack student management and analytics platform with student CRUD operations, attendance tracking, authentication, admin dashboards, reports, data visualization, and Excel/PDF export capabilities.",
    icon: FileText,
    featured: false,
    preview: "student",
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "PostgreSQL",
      "Chart.js",
      "Pandas",
      "OpenPyXL",
    ],
    github:
      "https://github.com/jarvissi18/Student-Management-Analytics-System",
  },
];

/* =========================================================
   STUDYSPHERE PREVIEW
========================================================= */

function StudySpherePreview() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#080d1c] sm:h-[230px]">
      <div className="flex h-11 min-w-0 items-center justify-between border-b border-white/10 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-600">
            <BrainCircuit size={13} />
          </div>

          <span className="truncate text-[10px] font-semibold text-gray-200 sm:text-[11px]">
            StudySphere AI
          </span>
        </div>

        <span className="ml-2 shrink-0 rounded-full border border-violet-400/20 bg-violet-500/10 px-2 py-1 text-[7px] text-violet-300 sm:text-[8px]">
          AI WORKSPACE
        </span>
      </div>

      <div className="flex h-[calc(100%-44px)] min-w-0">
        <div className="hidden w-[28%] shrink-0 border-r border-white/10 p-3 sm:block">
          <p className="mb-3 text-[8px] uppercase tracking-wider text-gray-600">
            Documents
          </p>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
            <div className="flex min-w-0 items-center gap-2">
              <FileText
                size={11}
                className="shrink-0 text-violet-400"
              />

              <span className="truncate text-[9px] text-gray-400">
                Operating Systems.pdf
              </span>
            </div>
          </div>

          <div className="mt-2 rounded-lg border border-dashed border-white/10 p-2 text-center">
            <Upload
              size={12}
              className="mx-auto text-gray-600"
            />

            <p className="mt-1 text-[8px] text-gray-600">
              Upload PDF
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-2.5 sm:p-3">
          <div className="mb-3 flex min-w-0 gap-1.5 overflow-hidden sm:gap-2">
            {["Chat", "Quiz", "Summary", "Notes"].map(
              (tab, index) => (
                <span
                  key={tab}
                  className={`shrink-0 rounded-md px-2 py-1 text-[7px] sm:text-[8px] ${
                    index === 0
                      ? "bg-violet-600 text-white"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </span>
              )
            )}
          </div>

          <div className="min-h-0 flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-500/20">
                <Sparkles
                  size={12}
                  className="text-violet-400"
                />
              </div>

              <span className="text-[9px] font-medium text-gray-300 sm:text-[10px]">
                AI Assistant
              </span>
            </div>

            <div className="mt-3 rounded-lg bg-white/[0.03] p-2">
              <p className="text-[7px] leading-4 text-gray-500 sm:text-[8px]">
                What is virtualization?
              </p>
            </div>

            <div className="mt-2 rounded-lg border border-white/5 bg-violet-500/[0.04] p-2">
              <p className="text-[7px] leading-4 text-gray-400 sm:text-[8px]">
                Virtualization allows a physical resource to be
                represented as multiple logical resources...
              </p>
            </div>
          </div>

          <div className="mt-2 flex min-w-0 items-center rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-2 sm:px-3">
            <MessageSquare
              size={11}
              className="shrink-0 text-gray-600"
            />

            <span className="ml-2 truncate text-[7px] text-gray-600 sm:text-[8px]">
              Ask anything about your PDFs...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MEDIVOICE PREVIEW
========================================================= */

function MediVoicePreview() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#08100f] sm:h-[230px]">
      <div className="flex h-11 min-w-0 items-center justify-between border-b border-white/10 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-500/20">
            <Mic
              size={13}
              className="text-emerald-400"
            />
          </div>

          <span className="truncate text-[10px] font-semibold text-gray-200 sm:text-[11px]">
            MediVoice AI
          </span>
        </div>

        <div className="ml-2 flex shrink-0 items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

          <span className="hidden text-[8px] text-emerald-400 min-[400px]:block">
            SYSTEM ONLINE
          </span>
        </div>
      </div>

      <div className="grid h-[calc(100%-44px)] min-w-0 grid-cols-[0.85fr_1.15fr] gap-2 p-2.5 sm:grid-cols-[1fr_1.4fr] sm:gap-3 sm:p-3">
        <div className="min-w-0 space-y-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 sm:p-3">
            <div className="flex items-center justify-between">
              <Users
                size={13}
                className="text-emerald-400"
              />

              <span className="text-[8px] text-emerald-400">
                +12%
              </span>
            </div>

            <p className="mt-2 text-[7px] text-gray-600 sm:text-[8px]">
              Patients
            </p>

            <p className="mt-1 text-base font-semibold sm:text-lg">
              1,248
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5 sm:p-3">
            <Activity
              size={13}
              className="text-cyan-400"
            />

            <p className="mt-2 text-[7px] text-gray-600 sm:text-[8px]">
              Active Sessions
            </p>

            <p className="mt-1 text-base font-semibold sm:text-lg">
              84
            </p>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-2.5 sm:p-4">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
              <Mic
                size={13}
                className="text-emerald-400"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[8px] font-medium text-gray-300 sm:text-[9px]">
                AI Voice Assistant
              </p>

              <p className="text-[7px] text-gray-600">
                Ready to assist
              </p>
            </div>
          </div>

          <div className="mt-5 flex h-10 items-center justify-center gap-1">
            {[18, 28, 38, 24, 34, 20, 30, 16].map(
              (height, index) => (
                <motion.div
                  key={index}
                  initial={{ scaleY: 0.5 }}
                  animate={{
                    scaleY: [0.5, 1, 0.65, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: index * 0.08,
                    ease: "easeInOut",
                  }}
                  className="w-1 origin-bottom rounded-full bg-emerald-400/70"
                  style={{
                    height: `${height}%`,
                  }}
                />
              )
            )}
          </div>

          <div className="mt-4 rounded-lg bg-black/20 p-2">
            <p className="break-words text-[7px] leading-4 text-gray-500 sm:text-[8px]">
              "Show today's appointments and patient status."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   POLYTRANSLATE PREVIEW
========================================================= */

function PolyTranslatePreview() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12] sm:h-[230px]">
      <div className="flex h-11 min-w-0 items-center justify-between border-b border-white/10 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-500/20">
            <Languages
              size={13}
              className="text-blue-400"
            />
          </div>

          <span className="truncate text-[10px] font-semibold text-gray-200 sm:text-[11px]">
            PolyTranslate AI
          </span>
        </div>

        <span className="ml-2 hidden shrink-0 text-[8px] text-gray-600 min-[420px]:block">
          DOCUMENT TRANSLATOR
        </span>
      </div>

      <div className="grid h-[calc(100%-44px)] min-w-0 grid-cols-2 gap-2 p-2.5 sm:gap-3 sm:p-4">
        <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-3">
          <div className="flex items-center justify-between">
            <span className="text-[7px] uppercase text-gray-600 sm:text-[8px]">
              Source
            </span>

            <FileSearch
              size={12}
              className="shrink-0 text-gray-600"
            />
          </div>

          <div className="mt-3 rounded-lg border border-white/10 bg-black/20 p-2 sm:p-3">
            <div className="flex min-w-0 items-center gap-2">
              <FileText
                size={13}
                className="shrink-0 text-blue-400"
              />

              <span className="truncate text-[7px] text-gray-400 sm:text-[9px]">
                Research-Paper.pdf
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-1.5 w-full rounded bg-white/10" />
              <div className="h-1.5 w-[85%] rounded bg-white/10" />
              <div className="h-1.5 w-[65%] rounded bg-white/10" />
            </div>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-3">
          <div className="flex items-center justify-between">
            <span className="text-[7px] uppercase text-gray-600 sm:text-[8px]">
              Translation
            </span>

            <span className="shrink-0 rounded bg-blue-500/10 px-1.5 py-1 text-[6px] text-blue-400 sm:px-2 sm:text-[7px]">
              Hindi
            </span>
          </div>

          <div className="mt-3 rounded-lg border border-blue-500/10 bg-blue-500/[0.03] p-2 sm:p-3">
            <p className="break-words text-[7px] leading-4 text-gray-400 sm:text-[9px] sm:leading-5">
              यह दस्तावेज़ कृत्रिम बुद्धिमत्ता
              का उपयोग करके अनुवादित किया गया है।
            </p>

            <div className="mt-4 flex min-w-0 items-center justify-between gap-1">
              <span className="truncate text-[6px] text-gray-600 sm:text-[7px]">
                AI TRANSLATION
              </span>

              <motion.span
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="shrink-0 rounded-md bg-blue-500 px-1.5 py-1 text-[6px] text-white sm:px-2 sm:text-[7px]"
              >
                PDF Ready
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STUDENT MANAGEMENT PREVIEW
========================================================= */

function StudentPreview() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d11] sm:h-[230px]">
      <div className="flex h-11 min-w-0 items-center justify-between border-b border-white/10 px-3 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-500/20">
            <BarChart3
              size={13}
              className="text-orange-400"
            />
          </div>

          <span className="truncate text-[10px] font-semibold text-gray-200 sm:text-[11px]">
            Student Analytics
          </span>
        </div>

        <span className="ml-2 hidden shrink-0 text-[8px] text-gray-600 min-[420px]:block">
          ADMIN DASHBOARD
        </span>
      </div>

      <div className="grid grid-cols-3 gap-1.5 p-2.5 sm:gap-2 sm:p-3">
        <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <Users
            size={12}
            className="text-blue-400"
          />

          <p className="mt-2 truncate text-[6px] text-gray-600 sm:text-[7px]">
            Students
          </p>

          <p className="text-xs font-semibold sm:text-sm">
            482
          </p>
        </div>

        <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <CalendarDays
            size={12}
            className="text-emerald-400"
          />

          <p className="mt-2 truncate text-[6px] text-gray-600 sm:text-[7px]">
            Attendance
          </p>

          <p className="text-xs font-semibold sm:text-sm">
            91.4%
          </p>
        </div>

        <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <Activity
            size={12}
            className="text-violet-400"
          />

          <p className="mt-2 truncate text-[6px] text-gray-600 sm:text-[7px]">
            Active
          </p>

          <p className="text-xs font-semibold sm:text-sm">
            438
          </p>
        </div>
      </div>

      <div className="mx-2.5 min-w-0 rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:mx-3 sm:p-3">
        <div className="flex items-center justify-between">
          <span className="text-[7px] text-gray-500 sm:text-[8px]">
            Attendance Overview
          </span>

          <BarChart3
            size={12}
            className="shrink-0 text-gray-600"
          />
        </div>

        <div className="mt-3 flex h-[60px] items-end justify-around gap-1.5 sm:mt-4 sm:h-[72px] sm:gap-2">
          {[45, 65, 52, 78, 62, 88, 72, 92].map(
            (height, index) => (
              <motion.div
                key={index}
                initial={{
                  scaleY: 0.2,
                }}
                whileInView={{
                  scaleY: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[7%] origin-bottom rounded-t bg-orange-400/50"
                style={{
                  height: `${height}%`,
                }}
              />
            )
          )}
        </div>

        <div className="mt-2 flex justify-between text-[6px] text-gray-700 sm:text-[7px]">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>

      <div className="mx-2.5 mt-2 flex min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-2 sm:mx-3 sm:px-3">
        <ShieldCheck
          size={11}
          className="shrink-0 text-emerald-400"
        />

        <span className="truncate text-[7px] text-gray-500 sm:text-[8px]">
          Secure admin authentication enabled
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   PREVIEW SELECTOR
========================================================= */

function ProjectPreview({ type }) {
  switch (type) {
    case "studysphere":
      return <StudySpherePreview />;

    case "medivoice":
      return <MediVoicePreview />;

    case "polytranslate":
      return <PolyTranslatePreview />;

    case "student":
      return <StudentPreview />;

    default:
      return null;
  }
}

/* =========================================================
   ADVANCED PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const rotateX = useSpring(0, {
    stiffness: 180,
    damping: 18,
    mass: 0.8,
  });

  const rotateY = useSpring(0, {
    stiffness: 180,
    damping: 18,
    mass: 0.8,
  });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const [canTilt, setCanTilt] = useState(false);

  const handlePointerEnter = (event) => {
    const isPointerFine = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    setCanTilt(isPointerFine);

    if (!isPointerFine || !cardRef.current) {
      return;
    }

    updatePointer(event);
  };

  const updatePointer = (event) => {
    if (!cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();

    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateYValue = (px - 0.5) * 7;
    const rotateXValue = (0.5 - py) * 7;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const resetPointer = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
    setCanTilt(false);
  };

  const Icon = project.icon;

  return (
    <motion.article
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={canTilt ? updatePointer : undefined}
      onPointerLeave={resetPointer}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-5 lg:p-6"
    >
      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            220px circle at ${glowX.get()}% ${glowY.get()}%,
            rgba(255,255,255,0.08),
            transparent 70%
          )`,
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.025] blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      />

      {/* Preview */}
      <motion.div
        whileHover={{
          scale: 1.012,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full min-w-0 overflow-hidden rounded-2xl"
        style={{
          transform: "translateZ(18px)",
        }}
      >
        <ProjectPreview type={project.preview} />
      </motion.div>

      {/* Header */}
      <div
        className="relative mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
        style={{
          transform: "translateZ(12px)",
        }}
      >
        <div className="flex min-w-0 items-start gap-3">
          <motion.div
            whileHover={{
              rotate: -4,
              scale: 1.06,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
          >
            <Icon
              size={19}
              className="text-gray-400 transition-colors duration-300 group-hover:text-white"
            />
          </motion.div>

          <div className="min-w-0">
            <p className="break-words text-xs text-gray-600">
              {project.subtitle}
            </p>

            <h3 className="mt-1 break-words text-xl font-bold leading-tight tracking-tight text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {project.featured && (
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.35,
              delay: 0.15 + index * 0.08,
            }}
            className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-400"
          >
            Featured
          </motion.span>
        )}
      </div>

      {/* Description */}
      <div
        className="relative mt-5 min-w-0"
        style={{
          transform: "translateZ(9px)",
        }}
      >
        <p className="break-words text-sm leading-7 text-gray-500">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div
        className="relative mt-5 flex min-w-0 flex-wrap gap-2"
        style={{
          transform: "translateZ(10px)",
        }}
      >
        {project.technologies.map((technology, techIndex) => (
          <motion.span
            key={technology}
            initial={{
              opacity: 0,
              y: 6,
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
              delay: 0.15 + techIndex * 0.035,
            }}
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            className="max-w-full break-words rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-gray-200"
          >
            {technology}
          </motion.span>
        ))}
      </div>

      {/* CTA */}
      <div
        className="relative mt-8 flex flex-wrap items-center gap-3"
        style={{
          transform: "translateZ(16px)",
        }}
      >
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} source code on GitHub`}
          whileHover={{
            y: -2,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group/cta inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors duration-200 hover:bg-gray-200"
        >
          <span>View Code</span>

          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
          />
        </motion.a>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN PROJECTS SECTION
========================================================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full min-w-0"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
            Selected Work
          </p>

          <h2 className="w-full max-w-3xl break-words text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Projects that turn{" "}
            <span className="text-white-200">
              ideas into software.
            </span>
          </h2>

          <p className="mt-5 w-full max-w-2xl break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
            A selection of AI and full-stack applications I've built
            while learning, experimenting, and solving practical
            problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid w-full min-w-0 gap-5 sm:gap-6 lg:mt-14 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* All repositories */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-10 text-center"
        >
          <motion.a
            href="https://github.com/jarvissi18?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
            }}
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-200 hover:text-white"
          >
            <FileText size={16} />

            <span>View all repositories</span>

            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}