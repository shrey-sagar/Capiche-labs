"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <>
      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-white/40 blur-sm"
      />

      {/* Main Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[10000] h-[2px] w-full origin-left bg-gradient-to-r from-white via-neutral-300 to-white"
      />
    </>
  );
}