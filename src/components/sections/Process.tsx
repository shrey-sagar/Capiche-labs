"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

import Container from "@/components/ui/Container";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We understand your business, market, users and product goals before writing a single line of code.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Wireframes, premium UI, user experience, prototypes and scalable system architecture.",
  },
  {
    icon: Code2,
    title: "Develop",
    description:
      "Modern software engineering using AI, cloud-native technologies and agile development.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deployment, monitoring, optimization and long-term product growth.",
  },
];
export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-black py-40 text-white"
    >
      {/* Premium Background */}

      <div className="absolute inset-0">

        {/* Grid */}

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

        {/* Left Glow */}

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

        {/* Right Glow */}

        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-60 bottom-0 h-[700px] w-[700px] rounded-full bg-neutral-500 blur-[240px]"
        />

      </div>

      <Container>

        {/* Heading */}

        <div className="relative mx-auto mb-32 max-w-4xl text-center">

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl">

            <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              OUR PROCESS
            </span>

          </div>

          <h2 className="mt-10 text-5xl font-black tracking-[-0.04em] md:text-7xl">

            From Strategy

            <br />

            <span className="text-neutral-500">
              To Launch
            </span>

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-400">

            Every successful digital product follows a structured workflow,
            combining research, design, engineering and continuous
            optimization.

          </p>

        </div>
        <div className="relative">

  {/* Timeline */}

  <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent lg:block" />

  <div className="space-y-24">

    {steps.map((step, index) => {

      const Icon = step.icon;

      return (

        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
          }}
          className={`grid items-center gap-16 lg:grid-cols-2 ${
            index % 2 === 1
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }`}
        >

          {/* Content */}

          <motion.div
            whileHover={{
              y: -6,
            }}
            className="group rounded-[32px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_30px_80px_rgba(255,255,255,.05)]"
          >

            <div className="flex h-18 w-18 items-center justify-center rounded-2xl border border-white/10 bg-white/5">

              <Icon
                size={34}
                className="text-white"
              />

            </div>

            <h3 className="mt-8 text-4xl font-bold tracking-tight">

              {step.title}

            </h3>

            <p className="mt-6 leading-8 text-neutral-400">

              {step.description}

            </p>

          </motion.div>

          {/* Step Number */}

          <div className="relative flex justify-center">

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              className="relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-3xl"
            >

              <span className="text-6xl font-black text-white">

                {String(index + 1).padStart(2, "0")}

              </span>

              <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl" />

            </motion.div>

          </div>

        </motion.div>

      );

    })}

  </div>

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