"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {

    // Disable smooth scroll on mobile
    if (window.innerWidth < 768) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };

  }, []);

  return <>{children}</>;
}