"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import Container from "@/components/ui/Container";

const stats = [
  {
    number: 150,
    suffix: "+",
    title: "Projects Delivered",
    description: "Successfully completed across AI, Web & Cloud.",
  },
  {
    number: 98,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Trusted by startups and enterprise businesses.",
  },
  {
    number: 24,
    suffix: "/7",
    title: "Support",
    description: "Continuous monitoring and technical assistance.",
  },
  {
    number: 12,
    suffix: "+",
    title: "Core Technologies",
    description: "Modern frameworks powering every solution.",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black py-40 text-white"
    >
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
            OUR IMPACT
          </span>

          <h2 className="mt-10 text-5xl font-black tracking-[-0.04em] md:text-7xl">

            Numbers That

            <br />

            <span className="text-neutral-500">
              Speak For Themselves
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-400">
            We combine engineering excellence, AI innovation and
            premium digital experiences to deliver measurable results.
          </p>

        </div>

        {/* Stats */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_30px_80px_rgba(255,255,255,.05)]"
            >

              <h3 className="text-6xl font-black tracking-tight">

                {inView && (
                  <CountUp
                    end={item.number}
                    duration={2}
                  />
                )}

                {item.suffix}

              </h3>

              <h4 className="mt-6 text-2xl font-bold">

                {item.title}

              </h4>

              <p className="mt-4 leading-7 text-neutral-400">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}