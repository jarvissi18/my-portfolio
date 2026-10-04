import {
  Award,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Python Programming Intern",
    company: "CodSoft",
    period: "Jan 2026 – Feb 2026",
    description:
      "Completed practical Python programming tasks including a To-Do List, Calculator, and Password Generator while strengthening programming fundamentals and problem-solving skills.",
    certificate:
      "https://drive.google.com/file/d/1spcXN7G8JYrs7l_AONJ1EXwgrtjY2cL9/view?usp=drive_link",
  },
];

const certifications = [
  {
    title: "AI Upskilling – Technical Foundation",
    issuer: "AI Upskilling Program",
    description:
      "Completed technical foundation training focused on artificial intelligence and related technical concepts.",
    certificate:
      "https://drive.google.com/file/d/1tueL4_h2CgKKE4qHuyObO2aPTVnMSP-G/view?usp=sharing",
  },
  {
    title: "Python Essentials",
    issuer: "Python Training",
    description:
      "Completed Python training covering fundamental programming concepts and practical Python development.",
    certificate:
      "https://drive.google.com/file/d/1gidON1dD0qdSwjU4yo9IPfSSN5RG68Vt/view?usp=drive_link",
  },
];

const education = [
  {
    degree: "B.E. Computer Engineering",
    institution: "Sinhgad College of Engineering, Pune",
    period: "2024 – 2027",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Rajiv Gandhi Polytechnic Institute, Udgir",
    period: "2021 – 2024",
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

function SectionTitle({ label, title, description }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
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
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="mb-3 text-xs font-medium uppercase text-gray-500 sm:text-sm"
      >
        {label}
      </motion.p>

      <h2 className="w-full break-words text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 w-full max-w-2xl break-words text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function CertificateButton({ link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="group/button mt-5 inline-flex w-fit max-w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-white/20 hover:bg-white hover:text-black"
    >
      <span>View Certificate</span>

      <ArrowUpRight
        size={16}
        className="shrink-0 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
      />
    </motion.a>
  );
}

function ExperienceCard({ item, index }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-7"
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
      />

      <div className="relative flex min-w-0 flex-col gap-5 sm:flex-row sm:gap-6">
        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: -5,
            scale: 1.06,
          }}
          transition={{
            duration: 0.2,
          }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
        >
          <BriefcaseBusiness
            size={21}
            className="text-gray-400 transition-colors duration-300 group-hover:text-white"
          />
        </motion.div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <h3 className="break-words text-lg font-semibold text-white sm:text-xl">
              {item.role}
            </h3>

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.92,
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
                delay: 0.18 + index * 0.1,
              }}
              className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-500"
            >
              {item.period}
            </motion.span>
          </div>

          <p className="mt-1 text-sm text-gray-400 sm:text-base">
            {item.company}
          </p>

          <p className="mt-4 max-w-2xl break-words text-sm leading-7 text-gray-500 sm:text-base">
            {item.description}
          </p>

          <CertificateButton link={item.certificate} />
        </div>
      </div>
    </motion.div>
  );
}

function CertificationCard({ certificate, index }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6"
    >
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/[0.02] blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.22, 0.42, 0.22],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
      />

      <div className="relative flex min-w-0 items-start gap-4 sm:gap-5">
        {/* Icon */}
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.06,
          }}
          transition={{
            duration: 0.2,
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
        >
          <Award
            size={20}
            className="text-gray-400 transition-colors duration-300 group-hover:text-white"
          />
        </motion.div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-start justify-between gap-3">
            <h3 className="min-w-0 break-words font-semibold leading-6 text-white">
              {certificate.title}
            </h3>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
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
                delay: 0.2 + index * 0.1,
              }}
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-gray-600 transition-colors duration-300 group-hover:text-gray-400"
              />
            </motion.div>
          </div>

          <p className="mt-1 break-words text-sm text-gray-500">
            {certificate.issuer}
          </p>

          <p className="mt-3 break-words text-sm leading-6 text-gray-500">
            {certificate.description}
          </p>

          <CertificateButton link={certificate.certificate} />
        </div>
      </div>
    </motion.div>
  );
}

function EducationCard({ item, index }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className="group relative flex w-full min-w-0 gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:gap-5 sm:p-6"
    >
      {/* Timeline icon */}
      <motion.div
        whileHover={{
          scale: 1.06,
          rotate: -4,
        }}
        transition={{
          duration: 0.2,
        }}
        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#050505]"
      >
        <GraduationCap
          size={20}
          className="text-gray-400 transition-colors duration-300 group-hover:text-white"
        />

        {/* Tiny pulse */}
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-xl border border-white/20"
          animate={{
            opacity: [0, 0.45, 0],
            scale: [0.95, 1.12, 1.18],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3 className="break-words text-base font-semibold text-white sm:text-lg">
          {item.degree}
        </h3>

        <p className="mt-2 break-words text-sm leading-6 text-gray-400 sm:text-base">
          {item.institution}
        </p>

        <div className="mt-3 flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
          <CalendarDays
            size={15}
            className="shrink-0"
          />

          <span>{item.period}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <div id="experience" className="w-full min-w-0">
          <SectionTitle
            label="Experience"
            title="Practical experience."
            description="Experience gained through internships and hands-on development work."
          />

          <div className="mt-10 w-full max-w-4xl sm:mt-12">
            {experience.map((item, index) => (
              <ExperienceCard
                key={`${item.company}-${item.role}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            CERTIFICATIONS
        ===================================================== */}

        <div
          id="certifications"
          className="mt-20 w-full min-w-0 border-t border-white/10 pt-20 sm:mt-28 sm:pt-28"
        >
          <SectionTitle
            label="Certifications"
            title="Continuous learning."
            description="Certifications and training that support my technical growth."
          />

          <div className="mt-10 grid w-full min-w-0 gap-5 md:grid-cols-2 sm:mt-12">
            {certifications.map((certificate, index) => (
              <CertificationCard
                key={certificate.title}
                certificate={certificate}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <div
          id="education"
          className="mt-20 w-full min-w-0 border-t border-white/10 pt-20 sm:mt-28 sm:pt-28"
        >
          <SectionTitle
            label="Education"
            title="Academic foundation."
            description="My academic journey in Computer Engineering."
          />

          <div className="relative mt-10 w-full min-w-0 sm:mt-12">

            {/* Timeline */}
            <motion.div
              initial={{
                opacity: 0,
                scaleY: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "top",
              }}
              className="absolute left-[22px] top-5 hidden h-[calc(100%-40px)] w-px bg-white/10 sm:block"
            />

            <div className="w-full space-y-5 sm:space-y-6">
              {education.map((item, index) => (
                <EducationCard
                  key={item.degree}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}