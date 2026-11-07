"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      {/* Aurora Blob 1 */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-200px] top-[-150px] h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Aurora Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 70, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] bottom-[-180px] h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[170px]"
      />

      {/* Aurora Blob 3 */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[150px]"
      />
    </>
  );
}