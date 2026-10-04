import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full min-w-0 overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 sm:py-9 md:flex-row md:items-center md:justify-between lg:px-8">

        {/* Brand */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0"
        >
          <motion.p
            whileHover={{
              y: -1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="w-fit break-words font-semibold text-white"
          >
            Suryawanshi Swapnil
            <span className="text-gray-600">.</span>
          </motion.p>

          <p className="mt-1 break-words text-sm text-gray-600">
            An AI Developer and Full Stack Engineer.
          </p>
        </motion.div>

        {/* Back to top */}
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full items-center md:w-auto"
        >
          <motion.a
            href="#home"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center gap-2 rounded-lg text-sm text-gray-600 transition-colors duration-300 hover:text-white"
          >
            <span>Back to top</span>

            <motion.span
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex"
            >
              <ArrowUp size={16} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <motion.div
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="mx-auto w-full min-w-0 max-w-7xl px-5 py-5 text-center sm:px-6 lg:px-8"
        >
          <p className="break-words text-xs leading-5 text-gray-700">
            © {new Date().getFullYear()} Suryawanshi Swapnil. Built with React.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}