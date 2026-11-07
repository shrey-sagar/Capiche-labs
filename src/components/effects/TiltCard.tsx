"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const glareX = useTransform(rotateY, [-15, 15], ["20%", "80%"]);
  const glareY = useTransform(rotateX, [-15, 15], ["20%", "80%"]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = -((y / rect.height) - 0.5) * 18;
    const ry = ((x / rect.width) - 0.5) * 18;

    rotateX.set(rx);
    rotateY.set(ry);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.04,
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className={`relative overflow-hidden rounded-3xl ${className}`}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[1px]">
        <div className="h-full w-full rounded-3xl bg-[#0A0F1F]" />
      </div>

      {/* Moving Glare */}
      <motion.div
        style={{
          left: glareX,
          top: glareY,
        }}
        className="
          absolute
          h-44
          w-44
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/20
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
        "
        style={{
          transform: "translateZ(60px)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}