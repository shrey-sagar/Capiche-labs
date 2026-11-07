"use client";

import { motion } from "framer-motion";

export default function FloatingBlobs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed left-[-200px] top-[10%] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed right-[-200px] bottom-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[220px] pointer-events-none"
      />
    </>
  );
}