"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
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
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[260px]"
        />

      </div>

      <Container>

        <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.04] px-10 py-24 text-center backdrop-blur-3xl md:px-20">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.35em] text-neutral-400">
            START YOUR PROJECT
          </span>

          <h2 className="mx-auto mt-10 max-w-5xl text-5xl font-black tracking-[-0.04em] md:text-7xl">

            Ready To Build

            <br />

            <span className="text-neutral-500">

              Something Exceptional?

            </span>

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-400">

            Whether you're launching an AI startup, modernizing your
            business, or building enterprise software, Capiche Labs
            delivers world-class digital experiences engineered for
            growth.

          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Button href="#contact">

              <span className="flex items-center gap-3">

                Start Your Project

                <ArrowUpRight size={18} />

              </span>

            </Button>

            <a
              href="#projects"
              className="rounded-full border border-white/10 px-8 py-4 transition duration-300 hover:border-white/20 hover:bg-white/5"
            >
              View Portfolio
            </a>

          </div>

        </div>

      </Container>

    </section>
  );
}