"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

import Container from "@/components/ui/Container";

const links = [
  { title: "Home", href: "#" },
  { title: "Services", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Process", href: "#process" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* Ambient Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/5 blur-[220px]" />

      </div>

      <Container>

        <div className="relative py-24">

          <div className="grid gap-20 lg:grid-cols-3">

            {/* Brand */}

            <div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">

                  <span className="text-lg font-black">
                    C
                  </span>

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    Capiche Labs
                  </h2>

                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                    AI • SOFTWARE
                  </p>

                </div>

              </div>

              <p className="mt-8 max-w-md leading-8 text-neutral-400">

                We design premium AI products, scalable cloud
                platforms, modern web applications and digital
                experiences engineered for ambitious businesses.

              </p>

            </div>

            {/* Navigation */}

            <div>

              <h3 className="text-xl font-bold">
                Navigation
              </h3>

              <div className="mt-8 space-y-5">

                {links.map((link) => (

                  <Link
                    key={link.title}
                    href={link.href}
                    className="group flex items-center justify-between text-neutral-400 transition hover:text-white"
                  >

                    {link.title}

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />

                  </Link>

                ))}

              </div>

            </div>

            {/* Social */}

            <div>

              <h3 className="text-xl font-bold">
                Connect
              </h3>

              <div className="mt-8 flex gap-4">

                {[
                  {
                    icon: <FaGithub size={20} />,
                    href: "https://github.com",
                  },
                  {
                    icon: <FaLinkedin size={20} />,
                    href: "https://linkedin.com",
                  },
                  {
                    icon: <FaInstagram size={20} />,
                    href: "https://instagram.com",
                  },
                ].map((item, index) => (

                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
                  >

                    {item.icon}

                  </Link>

                ))}

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom */}

          <div className="flex flex-col items-center justify-between gap-6 text-sm text-neutral-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Capiche Labs. All rights reserved.
            </p>

            <div className="flex gap-8">

              <Link
                href="#"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="transition hover:text-white"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </footer>
  );
}