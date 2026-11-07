"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

const navItems = [
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Process",
    href: "#process",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Logo() {
  return (
    <Link
      href="/"
      className="group relative flex items-center gap-5"
    >
      {/* Animated Symbol */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative flex h-14 w-14 items-center justify-center"
      >
        {/* Outer Glow */}

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent blur-xl" />

        {/* Glass Box */}

        <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-3xl">

          {/* Animated Border */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-white/60" />
          </motion.div>

          {/* Logo */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-20" />

            <div className="relative h-6 w-6 rotate-45 rounded-md border border-white bg-white/10" />

          </div>

        </div>

      </motion.div>

      {/* Brand */}

      <div className="leading-none">

        <motion.h1
          whileHover={{
            letterSpacing: "-0.04em",
          }}
          className="text-[34px] font-black tracking-[-0.06em] text-white"
        >
          Capiche

          <span className="ml-2 bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
            Labs
          </span>

        </motion.h1>

        <p className="mt-1 text-[10px] uppercase tracking-[0.7em] text-neutral-500">
          AI • SOFTWARE • CLOUD
        </p>

      </div>

    </Link>
  );
}
export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#services");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "#services";

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const top =
          (section as HTMLElement).offsetTop - 120;

        if (window.scrollY >= top) {
          current = item.href;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-[999]">

      <motion.div
        animate={{
          scale: scrolled ? 0.985 : 1,
          y: scrolled ? -2 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`mx-auto w-[98%] max-w-[1500px] rounded-[28px] transition-all duration-500 ${
          scrolled
            ? "border border-white/10 bg-black/65 shadow-[0_20px_80px_rgba(0,0,0,.55)] backdrop-blur-3xl"
            : "border border-white/5 bg-black/30 backdrop-blur-xl"
        }`}
      >

        {/* Ambient Glow */}

        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.03]" />

        <Container>

          <div
            className={`relative flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-[74px]" : "h-[86px]"
            }`}
          >

            {/* Logo */}

            <Logo />

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-2xl">

              {navItems.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    active === item.href
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >

                  {/* Active Background */}

                  {active === item.href && (

                    <motion.div
                      layoutId="navbar-active"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      className="absolute inset-0 rounded-full bg-white/10"
                    />

                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>

                </a>

              ))}

            </nav>

            {/* CTA */}

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="hidden lg:flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black shadow-[0_10px_35px_rgba(255,255,255,.18)] transition-all duration-300 hover:bg-neutral-200"
            >

              Start Project

              <motion.div
                whileHover={{
                  x: 3,
                  y: -3,
                }}
              >

                <ArrowUpRight size={18} />

              </motion.div>

            </motion.a>

            {/* Mobile Button */}

            <button
              onClick={() => setMobile(!mobile)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] lg:hidden"
            >

              {mobile ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}

            </button>

          </div>

        </Container>
                {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>

          {mobile && (

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
                duration: 0.35,
              }}
              className="overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-3xl lg:hidden"
            >

              <div className="p-6">

                <div className="space-y-2">

                  {navItems.map((item, index) => (

                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobile(false)}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                      }}
                      whileHover={{
                        x: 6,
                      }}
                      className="group flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                    >

                      <span className="text-lg font-medium text-white">
                        {item.name}
                      </span>

                      <ChevronRight
                        size={18}
                        className="text-neutral-500 transition group-hover:translate-x-1 group-hover:text-white"
                      />

                    </motion.a>

                  ))}

                </div>

                {/* CTA */}

                <motion.a
                  href="#contact"
                  onClick={() => setMobile(false)}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-white py-4 text-lg font-semibold text-black shadow-[0_20px_50px_rgba(255,255,255,.2)]"
                >

                  Start Your Project

                  <ArrowUpRight size={20} />

                </motion.a>

              </div>

            </motion.div>

          )}

        </AnimatePresence>
              </motion.div>

    </header>
  );
}