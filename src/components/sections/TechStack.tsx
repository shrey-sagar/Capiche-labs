"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Globe,
  Shield,
} from "lucide-react";

const technologies = [
  {
    title: "Next.js",
    subtitle: "React Framework",
    description:
      "High-performance web applications with server rendering and exceptional SEO.",
    icon: Globe,
  },
  {
    title: "React",
    subtitle: "Modern UI",
    description:
      "Interactive interfaces built using reusable and scalable components.",
    icon: Code2,
  },
  {
    title: "TypeScript",
    subtitle: "Type Safe",
    description:
      "Enterprise-grade development with reliability and maintainability.",
    icon: Code2,
  },
  {
    title: "Node.js",
    subtitle: "Backend",
    description:
      "Fast APIs and scalable backend systems for modern cloud applications.",
    icon: Cpu,
  },
  {
    title: "Python",
    subtitle: "Artificial Intelligence",
    description:
      "Machine learning, automation and intelligent software development.",
    icon: Cpu,
  },
  {
    title: "Firebase",
    subtitle: "Backend Platform",
    description:
      "Authentication, cloud database and real-time application services.",
    icon: Database,
  },
  {
    title: "MongoDB",
    subtitle: "NoSQL Database",
    description:
      "Flexible document database designed for high scalability.",
    icon: Database,
  },
  {
    title: "PostgreSQL",
    subtitle: "SQL Database",
    description:
      "Reliable enterprise-grade relational database with exceptional performance.",
    icon: Database,
  },
  {
    title: "Docker",
    subtitle: "Containers",
    description:
      "Consistent deployment across development, testing and production.",
    icon: Cloud,
  },
  {
    title: "AWS",
    subtitle: "Cloud Platform",
    description:
      "Reliable hosting, infrastructure and deployment solutions.",
    icon: Cloud,
  },
  {
    title: "Google Cloud",
    subtitle: "Cloud Services",
    description:
      "Enterprise cloud computing and AI infrastructure platform.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    subtitle: "Security",
    description:
      "Protecting applications through secure engineering practices.",
    icon: Shield,
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-black py-40 text-white">

      {/* Background */}

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

        <div className="absolute left-[-250px] top-[-150px] h-[700px] w-[700px] rounded-full bg-white/5 blur-[220px]" />

        <div className="absolute right-[-250px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-white/5 blur-[220px]" />

      </div>

      <Container>

        {/* Heading */}

        <div className="relative mx-auto mb-24 max-w-4xl text-center">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.35em] text-neutral-400 backdrop-blur-xl">
            TECH STACK
          </span>

          <h2 className="mt-10 text-5xl font-black tracking-[-0.04em] md:text-7xl">

            Technology

            <br />

            <span className="text-neutral-500">
              That Powers Innovation
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-400">

            We leverage industry-leading technologies, AI frameworks,
            cloud platforms and modern engineering tools to build
            secure, scalable and high-performance digital products.

          </p>

        </div>

        {/* Infinite Slider */}

        <div className="relative overflow-hidden">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear",
            }}
            className="flex w-max gap-8"
          >

            {[...technologies, ...technologies].map((tech, index) => {

              const Icon = tech.icon;

              return (

                <div
                  key={index}
                  className="group flex min-w-[360px] gap-6 rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-3 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_30px_80px_rgba(255,255,255,.05)]"
                >

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:scale-110 group-hover:bg-white/10">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">

                      {tech.title}

                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-neutral-500">

                      {tech.subtitle}

                    </p>

                    <p className="mt-5 leading-7 text-neutral-400">

                      {tech.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </motion.div>

        </div>

      </Container>

    </section>
  );
}