"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Rocket,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Rapid development cycles powered by modern engineering practices.",
  },
  {
    icon: BrainCircuit,
    title: "AI First",
    description:
      "Artificial Intelligence is integrated into every solution we build.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Built with security, scalability and reliability from day one.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Design",
    description:
      "Minimal interfaces focused on performance and exceptional UX.",
  },
];

export default function About() {
  return (
    <section
  id="about"
  className="relative overflow-hidden bg-black py-40 text-white"
>

  {/* Premium Background */}

  <div className="absolute inset-0">

    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "70px 70px",
      }}
    />

    <motion.div
      animate={{
        opacity: [0.03, 0.08, 0.03],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -left-60 top-0 h-[700px] w-[700px] rounded-full bg-white blur-[220px]"
    />

    <motion.div
      animate={{
        opacity: [0.02, 0.06, 0.02],
        scale: [1.05, 1, 1.05],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -right-60 bottom-0 h-[700px] w-[700px] rounded-full bg-neutral-500 blur-[240px]"
    />

  </div>

  <Container>

    <div className="grid items-center gap-24 lg:grid-cols-2"></div>
    <motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

  {/* Badge */}

  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl">

    <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">
      ABOUT CAPICHE LABS
    </span>

  </div>

  {/* Heading */}

  <h2 className="mt-10 text-5xl font-black leading-[0.92] tracking-[-0.04em] lg:text-7xl">

    Building

    <br />

    <span className="text-neutral-500">
      Software

    </span>

    <br />

    That Matters.

  </h2>

  {/* Description */}

  <p className="mt-10 max-w-xl text-lg leading-9 text-neutral-400">

    Capiche Labs partners with startups, enterprises and ambitious founders
    to build AI-powered software, premium digital products and scalable
    cloud solutions. Every product is designed with performance,
    security and exceptional user experience at its core.

  </p>

  {/* Divider */}

  <div className="mt-12 h-px w-40 bg-gradient-to-r from-white via-neutral-500 to-transparent" />

  {/* Stats */}

  <div className="mt-16 grid grid-cols-3 gap-10">

    <div>

      <h3 className="text-5xl font-black">
        AI
      </h3>

      <p className="mt-3 text-neutral-500">
        First
      </p>

    </div>

    <div>

      <h3 className="text-5xl font-black">
        24/7
      </h3>

      <p className="mt-3 text-neutral-500">
        Support
      </p>

    </div>

    <div>

      <h3 className="text-5xl font-black">
        100%
      </h3>

      <p className="mt-3 text-neutral-500">
        Quality
      </p>

    </div>

  </div>

</motion.div>
<div className="grid gap-8">

  {features.map((feature, index) => {

    const Icon = feature.icon;

    return (

      <motion.div
        key={feature.title}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
        }}
        whileHover={{
          y: -8,
        }}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_30px_80px_rgba(255,255,255,.05)]"
      >

        {/* Hover Glow */}

        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/5 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

        {/* Icon */}

        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-500 group-hover:scale-110 group-hover:rotate-6">

          <Icon
            size={30}
            className="text-white"
          />

        </div>

        {/* Title */}

        <h3 className="relative z-10 mt-8 text-3xl font-bold tracking-tight">

          {feature.title}

        </h3>

        {/* Description */}

        <p className="relative z-10 mt-5 leading-8 text-neutral-400">

          {feature.description}

        </p>

        {/* Bottom Line */}

        <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-white via-neutral-500 to-transparent opacity-40" />

      </motion.div>

    );

  })}

</div>

  </Container>

  {/* Bottom Ambient Glow */}

  <motion.div
    animate={{
      opacity: [0.03, 0.08, 0.03],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute bottom-[-350px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white blur-[260px]"
  />

</section>
);
}