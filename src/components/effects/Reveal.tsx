"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.001 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}