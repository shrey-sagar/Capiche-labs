"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  BrainCircuit,
  Smartphone,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

import Container from "@/components/ui/Container";

const projects = [
  {
    title: "Smart Classroom",
    category: "Education Platform",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    icon: BrainCircuit,
    description:
      "A collaborative learning ecosystem that connects teachers, students, and administrators through real-time engagement, performance insights, and streamlined curriculum management.",
    tech: ["Next.js", "TypeScript", "Supabase", "AI Insights"],
    demo: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Healthcare Dashboard",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      
    icon: Code2,
    description:
      "An intuitive clinical operations dashboard that centralizes patient data, resource planning, and metrics for faster, safer decision-making across departments.",
    tech: ["React", "Node.js", "PostgreSQL", "Analytics"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Food Delivery App",
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
    icon: Smartphone,
    description:
      "A high-conversion food ordering experience designed for speed, personalization, and smooth merchant operations from browsing to checkout.",
    tech: ["React Native", "Firebase", "Stripe", "Maps"],
    demo: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Business ERP",
    category: "Enterprise",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
    icon: BrainCircuit,
    description:
      "A unified operational platform that streamlines finance, inventory, HR, and reporting in one scalable system built for modern enterprises.",
    tech: ["Next.js", "Tailwind", "Prisma", "Automation"],
    demo: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
return (
  <section
    id="projects"
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

      <div className="absolute left-[-250px] top-0 h-[700px] w-[700px] rounded-full bg-white/5 blur-[220px]" />

      <div className="absolute right-[-250px] bottom-0 h-[700px] w-[700px] rounded-full bg-neutral-500/5 blur-[220px]" />

    </div>

    <Container>

      {/* Heading */}

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
          duration: .8,
        }}
        className="relative mx-auto mb-24 max-w-4xl text-center"
      >

        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-neutral-300">

          OUR WORK

        </span>

        <h2 className="mt-8 text-6xl font-black tracking-[-0.05em] lg:text-7xl">

          Featured

          <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">

            Case Studies

          </span>

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-400">

          Every project is crafted with innovation,
          precision engineering,
          and exceptional user experience to deliver
          measurable business impact.

        </p>

      </motion.div>

      {/* Projects Grid */}

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => {
  const Icon = project.icon;

  return (
    <motion.article
      key={project.title}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{ y: -10 }}
      className={`group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]
      ${project.featured ? "lg:col-span-2" : ""}`}
    >
      {/* Image */}

      <div className="relative h-[320px] overflow-hidden lg:h-[420px]">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <span className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-xl">
          {project.category}
        </span>

        <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl">
          <Icon size={28} />
        </div>

      </div>

      {/* Content */}

      <div className="p-10">

        <h3 className="text-4xl font-black">
          {project.title}
        </h3>

        <p className="mt-5 max-w-2xl leading-8 text-neutral-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.tech.map((technology) => (

            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300"
            >
              {technology}
            </span>

          ))}

        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-3 gap-6 border-y border-white/10 py-8">

          <div>
            <h4 className="text-3xl font-black text-white">99%</h4>
            <p className="mt-1 text-sm text-neutral-500">
              Performance
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-black text-white">24/7</h4>
            <p className="mt-1 text-sm text-neutral-500">
              Availability
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-black text-white">A+</h4>
            <p className="mt-1 text-sm text-neutral-500">
              Quality
            </p>
          </div>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <a
            href={project.demo}
            className="group/button inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
          >
            Live Preview

            <ExternalLink
              size={18}
              className="transition group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
            />
          </a>

          <a
            href={project.github}
            className="group/button inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            <FaGithub size={18} />

            Source Code

            <ArrowUpRight
              size={18}
              className="transition group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
            />
          </a>

        </div>

      </div>

    </motion.article>
  );
})}

      </div>

    </Container>
  </section>
);
}