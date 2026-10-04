import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

const navContainer = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const navLinks = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.12,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          aria-label="Swapnil - Home"
          whileHover={{
            y: -1,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            duration: 0.2,
          }}
          className="group flex items-center gap-3"
          
        >
          
          <motion.img
            src="/favicon.svg"
            alt="Swapnil"
            className="h-9 w-9 rounded-xl"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          

          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
            SWAPNIL<span className="text-gray-600">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          variants={navLinks}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-7 md:flex"
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              variants={navItem}
              href={link.href}
              whileHover={{
                y: -1,
              }}
              transition={{
                duration: 0.2,
              }}
              className="group relative py-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white opacity-0 transition-all duration-200 group-hover:scale-x-100 group-hover:opacity-100" />
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop Actions */}
        <motion.div
          variants={navLinks}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-2 md:flex"
        >
          <motion.a
            variants={navItem}
            href="https://github.com/jarvissi18"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
          >
            GitHub
          </motion.a>

          <motion.a
            variants={navItem}
            href="https://www.linkedin.com/in/swapnil-suryawanshi-719245267/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
          >
            LinkedIn
          </motion.a>

          
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          whileTap={{
            scale: 0.92,
          }}
          whileHover={{
            y: -1,
          }}
          className="rounded-lg border border-white/10 p-2 text-gray-300 transition-colors duration-200 hover:border-white/20 hover:text-white md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-white/10 bg-[#050505] md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0.05,
                  },
                },
              }}
              className="flex flex-col px-5 py-5 sm:px-6"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -12,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                  }}
                  href={link.href}
                  onClick={closeMenu}
                  whileHover={{
                    x: 4,
                    color: "#ffffff",
                  }}
                  className={`border-b border-white/5 py-3.5 text-sm text-gray-400 transition-colors ${
                    index === 0 ? "border-t border-white/5" : ""
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                    },
                  },
                }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-gray-200"
              >
                Resume
                <ArrowUpRight size={15} />
              </motion.a>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                    },
                  },
                }}
                className="mt-5 flex gap-3 border-t border-white/10 pt-5"
              >
                <motion.a
                  href="https://github.com/jarvissi18"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
                >
                  GitHub
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/swapnil-suryawanshi-719245267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
                >
                  LinkedIn
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
