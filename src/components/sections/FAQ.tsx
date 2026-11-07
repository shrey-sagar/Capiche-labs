"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "What services does Capiche Labs provide?",
    answer:
      "We specialize in Artificial Intelligence, custom software development, modern web platforms, mobile applications, cloud infrastructure, UI/UX design and enterprise digital transformation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Every project is different. MVPs typically take 3–6 weeks, while enterprise platforms usually require 2–6 months depending on complexity.",
  },
  {
    question: "Do you build AI-powered solutions?",
    answer:
      "Yes. We build AI assistants, LLM integrations, automation systems, intelligent chatbots, predictive analytics and custom machine learning solutions.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Absolutely. We offer continuous support, monitoring, cloud maintenance, feature enhancements, security updates and performance optimization.",
  },
  {
    question: "Can you work with startups as well as enterprises?",
    answer:
      "Yes. Whether you're validating an MVP or scaling an enterprise platform, we tailor every solution to your business goals.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
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
            FAQ
          </span>

          <h2 className="mt-10 text-5xl font-black tracking-[-0.04em] md:text-7xl">

            Frequently Asked

            <br />

            <span className="text-neutral-500">
              Questions
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-400">

            Everything you need to know before starting your next
            software, AI or cloud project with Capiche Labs.

          </p>

        </div>

        {/* FAQ */}

        <div className="relative mx-auto max-w-5xl space-y-6">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <motion.div
                key={faq.question}
                whileHover={{ y: -3 }}
                className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]"
              >

                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-10 py-8 text-left"
                >

                  <h3 className="text-xl font-bold">

                    {faq.question}

                  </h3>

                  <motion.div
                    animate={{
                      rotate: open ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
                  >

                    <Plus
                      size={22}
                      className="text-white"
                    />

                  </motion.div>

                </button>

                <AnimatePresence>

                  {open && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >

                      <div className="border-t border-white/10 px-10 pb-8 pt-7">

                        <p className="leading-8 text-neutral-400">

                          {faq.answer}

                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}