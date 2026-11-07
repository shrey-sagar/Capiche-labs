"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [.15,.3,.15],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute h-[500px] w-[500px] rounded-full bg-white blur-[180px]"
          />

          <div className="relative text-center">

            {/* Line */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 220,
              }}
              transition={{
                duration: .8,
              }}
              className="mx-auto mb-10 h-px bg-white"
            />

            {/* Logo */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .4,
              }}
              className="text-6xl font-black tracking-[0.25em] text-white md:text-8xl"
            >
              CAPICHE
            </motion.h1>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .8,
              }}
              className="mt-2 text-4xl font-light tracking-[0.55em] text-neutral-300 md:text-5xl"
            >
              LABS
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.3,
              }}
              className="mt-8 text-sm uppercase tracking-[0.7em] text-neutral-500"
            >
              AI • SOFTWARE • CLOUD
            </motion.p>

            {/* Progress */}

            <div className="mx-auto mt-14 h-[2px] w-60 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="h-full bg-white"
              />

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}