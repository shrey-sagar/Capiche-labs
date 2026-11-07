"use client";

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";
import Magnetic from "@/components/effects/Magnetic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = `
    cursor-hover
    group
    relative
    inline-flex
    overflow-hidden
    rounded-full
    p-[1.5px]
    transition-all
    duration-500
    hover:scale-110
    hover:-translate-y-2
    active:scale-95
    focus:outline-none
  `;

  const content = (
    <>
      {/* Animated Border */}
      <span
        className="
          absolute
          inset-0
          animate-[spin_4s_linear_infinite]
          bg-[conic-gradient(from_0deg,#2563eb,#06b6d4,#3b82f6,#8b5cf6,#2563eb)]
        "
      />

      {/* Glow */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-500/30
          blur-xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:scale-125
        "
      />

      {/* Body */}
      <span
        className={`
          relative
          z-10
          flex
          items-center
          justify-center
          rounded-full
          px-8
          py-3
          font-semibold
          tracking-wide
          backdrop-blur-xl
          transition-all
          duration-500
          ${
            variant === "primary"
              ? "bg-slate-950 text-white group-hover:bg-slate-900"
              : "bg-white/80 text-slate-900 group-hover:bg-white"
          }
        `}
      >
        {children}

        <span
          className="
            absolute
            inset-0
            -translate-x-full
            skew-x-12
            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-[220%]
          "
        />
      </span>

      {/* Ring */}
      <span
        className="
          absolute
          inset-[-3px]
          rounded-full
          border
          border-cyan-400/20
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:scale-110
        "
      />
    </>
  );

  if (href) {
    return (
      <Magnetic>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button className={classes} {...props}>
        {content}
      </button>
    </Magnetic>
  );
}