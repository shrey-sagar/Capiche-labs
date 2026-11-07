"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  BrainCircuit,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import Container from "@/components/ui/Container";

const stats = [
  {
    value: "150+",
    label: "Projects",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
  {
    value: "24/7",
    label: "Support",
  },
  {
    value: "AI",
    label: "Native",
  },
];

const floatingCards = [
  {
    icon: BrainCircuit,
    title: "AI Assistant",
    subtitle: "Running • 99.8%",
    top: "10%",
    left: "5%",
  },
  {
    icon: Rocket,
    title: "Cloud Deploy",
    subtitle: "Live Production",
    top: "55%",
    right: "0%",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    subtitle: "Enterprise Ready",
    bottom: "8%",
    left: "15%",
  },
];

export default function Hero() {
return (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-black pt-32 text-white"
  >
    {/* ================= Background ================= */}

    <div className="absolute inset-0 overflow-hidden">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute left-[-250px] top-[-150px] h-[700px] w-[700px] rounded-full bg-white blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
        }}
        className="absolute right-[-250px] bottom-[-200px] h-[700px] w-[700px] rounded-full bg-neutral-400 blur-[220px]"
      />

    </div>

    <Container>

      <div className="relative grid items-center gap-20 lg:grid-cols-2">

        {/* ================= Left ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">

            <Sparkles
              size={18}
              className="text-white"
            />

            <span className="text-sm uppercase tracking-[0.3em] text-neutral-300">
              AI Software Studio
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-10 text-6xl font-black leading-[0.95] tracking-[-0.06em] lg:text-8xl">

            Building

            <span className="block text-neutral-400">
              the Future
            </span>

            <span className="block bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">

              with AI

            </span>

          </h1>

          {/* Description */}

          <p className="mt-10 max-w-2xl text-xl leading-9 text-neutral-400">

            Capiche Labs designs and builds intelligent software,
            AI-powered platforms, cloud-native applications,
            enterprise solutions, and modern digital experiences
            that help businesses scale faster.

          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-5">

            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="#contact"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-semibold text-black shadow-[0_20px_60px_rgba(255,255,255,.18)]"
            >

              Start Project

              <ArrowUpRight size={20} />

            </motion.a>

            <a
              href="#projects"
              className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-5 text-lg transition hover:bg-white/[0.08]"
            >
              View Portfolio
            </a>

          </div>
                    {/* ================= Stats ================= */}

            <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">

              {stats.map((item) => (

                <div key={item.label}>

                  <h3 className="text-4xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative hidden h-[720px] lg:block"
          >

            {/* Main Dashboard */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
              className="absolute right-10 top-24 w-[430px] rounded-[34px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-3xl"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    LIVE DASHBOARD
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    AI Analytics
                  </h3>

                </div>

                <div className="h-4 w-4 rounded-full bg-green-400 shadow-[0_0_20px_#22c55e]" />

              </div>

              <div className="mt-10 space-y-6">

                <div className="rounded-2xl bg-white/[0.05] p-5">

                  <div className="flex items-center justify-between">

                    <span className="text-neutral-400">
                      Accuracy
                    </span>

                    <span className="font-bold">
                      99.8%
                    </span>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "99%",
                      }}
                      transition={{
                        duration: 2,
                      }}
                      className="h-full rounded-full bg-white"
                    />

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-5">

                  <div className="rounded-2xl bg-white/[0.05] p-5">

                    <p className="text-neutral-500">
                      Projects
                    </p>

                    <h3 className="mt-2 text-3xl font-black">
                      150+
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-white/[0.05] p-5">

                    <p className="text-neutral-500">
                      Clients
                    </p>

                    <h3 className="mt-2 text-3xl font-black">
                      98%
                    </h3>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* Floating Cards */}

            {floatingCards.map((card) => {

              const Icon = card.icon;

              return (

                <motion.div
                  key={card.title}
                  animate={{
                    y: [-8, 8, -8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                  style={{
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    bottom: card.bottom,
                  }}
                  className="absolute w-64 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">

                    <Icon size={26} />

                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-400">
                    {card.subtitle}
                  </p>

                </motion.div>

              );

            })}

          </motion.div>

      </div>

    </Container>
          {/* ================= Scroll Indicator ================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center"
      >
        <span className="mb-4 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-white/15">
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-2 h-3 w-3 rounded-full bg-white"
          />
        </div>
      </motion.div>

      {/* ================= Decorative Blur ================= */}

      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">

        <motion.div
          animate={{
            x: [-40, 40, -40],
            y: [-20, 20, -20],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
          }}
          className="absolute left-10 top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-[120px]"
        />

        <motion.div
          animate={{
            x: [40, -30, 40],
            y: [20, -20, 20],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
          }}
          className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-neutral-400/[0.04] blur-[160px]"
        />

      </div>

  </section>
);
}