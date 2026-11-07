"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
  });

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    const interactiveElements =
      "button, a, input, textarea, select, .chatbot-container";

    const hideCursor = () => setHidden(true);
    const showCursor = () => setHidden(false);

    const elements = document.querySelectorAll(interactiveElements);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", hideCursor);
      el.addEventListener("mouseleave", showCursor);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", hideCursor);
        el.removeEventListener("mouseleave", showCursor);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        style={{ x, y }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400"
      />

      {/* Cursor Glow */}
      <motion.div
        style={{ x, y }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-xl"
      />
    </>
  );
}