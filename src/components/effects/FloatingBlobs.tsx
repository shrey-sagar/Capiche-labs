"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingBlobs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  // Disable heavy animated blobs on mobile
  if (isMobile) return null;

  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-500/8 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed right-[-180px] bottom-[10%] h-[450px] w-[450px] rounded-full bg-blue-600/8 blur-[120px]"
      />
    </>
  );
}