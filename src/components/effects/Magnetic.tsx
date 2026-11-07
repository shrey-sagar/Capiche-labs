"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Magnetic({ children }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const moveX = e.clientX - rect.left - rect.width / 2;
    const moveY = e.clientY - rect.top - rect.height / 2;

    x.set(moveX * 0.25);
    y.set(moveY * 0.25);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}