"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Globe,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
  ArrowUpRight,
  Check,
} from "lucide-react";

import Container from "@/components/ui/Container";

const services = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Custom AI solutions, LLM integrations, intelligent automation, chatbots and predictive analytics.",
    features: [
      "AI Assistants",
      "Generative AI",
      "Workflow Automation",
      "Machine Learning",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, high-performance web applications built with the latest technologies.",
    features: [
      "Next.js",
      "React",
      "TypeScript",
      "SEO Optimized",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps designed for speed, scalability and beautiful user experiences.",
    features: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure, DevOps pipelines and deployment automation.",
    features: [
      "AWS",
      "Docker",
      "CI/CD",
      "Google Cloud",
    ],
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description:
      "Secure backend architecture, APIs, databases and enterprise integrations.",
    features: [
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Enterprise-grade security, authentication and infrastructure protection.",
    features: [
      "Authentication",
      "Encryption",
      "Security Audit",
      "Monitoring",
    ],
  },
];

export default function Services() {
  return (
  <section
    id="services"
    className="relative overflow-hidden bg-black py-40 text-white"
  >
    {/* Background */}

    <div className="absolute inset-0 overflow-hidden">

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute left-[-250px] top-20 h-[650px] w-[650px] rounded-full bg-white/5 blur-[180px]" />

      <div className="absolute right-[-250px] bottom-0 h-[650px] w-[650px] rounded-full bg-neutral-400/5 blur-[200px]" />

    </div>

    <Container>

      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="relative mx-auto mb-24 max-w-4xl text-center"
      >

        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-300">

          OUR SERVICES

        </span>

        <h2 className="mt-8 text-6xl font-black leading-tight tracking-[-0.05em] lg:text-7xl">

          Engineering

          <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">

            Digital Excellence

          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-400">

          We combine Artificial Intelligence,
          cloud technologies,
          modern software engineering,
          and exceptional design
          to create world-class digital experiences.

        </p>

      </motion.div>

      {/* Services Grid */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => {
  const Icon = service.icon;

  return (
    <motion.div
      key={service.title}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]"
    >

      {/* Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        className="relative flex h-18 w-18 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
      >
        <Icon
          size={34}
          className="text-white"
        />
      </motion.div>

      {/* Title */}

      <h3 className="mt-8 text-3xl font-bold tracking-tight">
        {service.title}
      </h3>

      {/* Description */}

      <p className="mt-5 leading-8 text-neutral-400">
        {service.description}
      </p>

      {/* Divider */}

      <div className="my-8 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      {/* Features */}

      <div className="space-y-4">

        {service.features.map((feature) => (

          <div
            key={feature}
            className="flex items-center gap-3"
          >

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">

              <Check
                size={14}
                className="text-white"
              />

            </div>

            <span className="text-neutral-300">
              {feature}
            </span>

          </div>

        ))}

      </div>

      {/* Learn More */}

      <motion.button
        whileHover={{
          x: 6,
        }}
        className="mt-10 flex items-center gap-3 font-semibold text-white"
      >

        Learn More

        <ArrowUpRight
          size={18}
          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </motion.button>

    </motion.div>
  );
})}
      </div>

      {/* ================= Bottom CTA ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="relative mt-32 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-12 backdrop-blur-3xl lg:p-16"
      >

        {/* Background Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-[140px]" />

        <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">

          <div className="max-w-2xl">

            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Let's Work Together
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
              Ready to Build
              <br />
              Something Extraordinary?
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Whether you're launching a startup, scaling your business,
              or integrating Artificial Intelligence into your workflow,
              Capiche Labs is ready to build your next digital product.
            </p>

          </div>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:bg-neutral-200"
          >

            Start Your Project

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </motion.a>

        </div>

      </motion.div>

    </Container>

  </section>
  );
}