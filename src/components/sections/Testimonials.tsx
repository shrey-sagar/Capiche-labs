"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  Quote,
  Star,
  BadgeCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder",
    company: "Nexora Technologies",
    image: "/testimonials/rahul.jpg",
    review:
      "Capiche Labs transformed our idea into a polished AI-powered platform. Their communication, speed, and technical expertise exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Priya Shah",
    role: "Director",
    company: "PixelEdge Solutions",
    image: "/testimonials/priya.jpg",
    review:
      "From UI/UX to deployment, the entire process was seamless. The team delivered exactly what we envisioned with outstanding quality.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "CEO",
    company: "FlowSync Digital",
    image: "/testimonials/arjun.jpg",
    review:
      "Their AI automation solution reduced our manual work significantly. We were impressed by the performance and professionalism.",
    rating: 5,
  },
  {
    name: "Neha Desai",
    role: "Operations Head",
    company: "CloudVista Systems",
    image: "/testimonials/neha.jpg",
    review:
      "Professional, reliable and highly skilled. Capiche Labs built a scalable cloud platform that perfectly fits our growing business.",
    rating: 5,
  },
  {
    name: "Karan Malhotra",
    role: "Founder",
    company: "GrowthForge Media",
    image: "/testimonials/karan.jpg",
    review:
      "The website they built is fast, modern and optimized for conversions. Their attention to detail made all the difference.",
    rating: 5,
  },
];

function Card({
  name,
  role,
  review,
}: {
  name: string;
  role: string;
  review: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group mx-5 w-[430px] rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_30px_80px_rgba(255,255,255,.05)]"
    >
      <Quote
        size={40}
        className="text-white/80"
      />

      <p className="mt-8 leading-8 text-neutral-300">
        "{review}"
      </p>

      <div className="my-8 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-bold">

            {name}

          </h3>

          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-neutral-500">

            {role}

          </p>

        </div>

        <BadgeCheck
          size={24}
          className="text-white"
        />

      </div>

      <div className="mt-8 flex gap-2">

        {[...Array(5)].map((_, i) => (

          <Star
            key={i}
            size={16}
            className="fill-white text-white"
          />

        ))}

      </div>

    </motion.div>
  );
}

export default function Testimonials() {
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

        <div className="relative mx-auto mb-24 max-w-4xl text-center">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.35em] text-neutral-400 backdrop-blur-xl">
            TESTIMONIALS
          </span>

          <h2 className="mt-10 text-5xl font-black tracking-[-0.04em] md:text-7xl">

            Trusted By

            <br />

            <span className="text-neutral-500">
              Visionary Teams
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-400">

            We help startups, enterprises and ambitious founders
            build exceptional digital products that deliver real
            business impact.

          </p>

        </div>

      </Container>

      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover
      >

        {testimonials.map((item) => (

          <Card
            key={item.name}
            {...item}
          />

        ))}

      </Marquee>

      <div className="mt-10">

        <Marquee
          direction="right"
          speed={32}
          gradient={false}
          pauseOnHover
        >

          {testimonials.map((item) => (

            <Card
              key={`${item.name}-2`}
              {...item}
            />

          ))}

        </Marquee>

      </div>

    </section>
  );
}