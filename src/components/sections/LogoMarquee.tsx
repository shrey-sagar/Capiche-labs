"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import Container from "@/components/ui/Container";

const logos = [
  { name: "Next.js", file: "nextjs.svg" },
  { name: "React", file: "react.svg" },
  { name: "TypeScript", file: "typescript.svg" },
  { name: "Node.js", file: "nodejs.svg" },
  { name: "Python", file: "python.svg" },
  { name: "Firebase", file: "firebase.svg" },
  { name: "MongoDB", file: "mongodb.svg" },
  { name: "Docker", file: "docker.svg" },
  { name: "AWS", file: "aws.svg" },
];

export default function LogoMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black py-28">

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

        <div className="absolute left-[-250px] top-[-150px] h-[600px] w-[600px] rounded-full bg-white/5 blur-[220px]" />

        <div className="absolute right-[-250px] bottom-[-150px] h-[600px] w-[600px] rounded-full bg-white/5 blur-[220px]" />

      </div>

      <Container>

        <div className="relative mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.35em] text-neutral-400 backdrop-blur-xl">
            OUR TECHNOLOGIES
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-[-0.04em] text-white md:text-6xl">

            Powered By

            <br />

            <span className="text-neutral-500">
              Modern Engineering
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            We build secure, scalable and high-performance software
            using trusted technologies and industry-leading frameworks.
          </p>

        </div>

      </Container>

      <Marquee
        speed={35}
        pauseOnHover
        gradient={false}
      >

        {[...logos, ...logos].map((logo, index) => (

          <div
            key={`${logo.name}-${index}`}
            className="group mx-5 flex min-w-[260px] items-center gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] px-8 py-7 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_25px_70px_rgba(255,255,255,.05)]"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:scale-110">

              <Image
                src={`/logos/${logo.file}`}
                alt={logo.name}
                width={36}
                height={36}
                className="object-contain brightness-100"
              />

            </div>

            <div>

              <h3 className="text-xl font-bold text-white">

                {logo.name}

              </h3>

              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-neutral-500">

                Technology

              </p>

            </div>

          </div>

        ))}

      </Marquee>

    </section>
  );
}