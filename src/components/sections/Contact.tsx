"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import {
  ContactSchema,
  ContactFormData,
} from "@/types/contact";

const info = [
  {
    icon: Mail,
    title: "Email",
    value: "capichelabs@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 63523 47023 / +91 94093 37993",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ahmedabad, Gujarat, India",
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-40 text-white"
    >
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
          className="absolute -left-60 top-0 h-[700px] w-[700px] rounded-full bg-white blur-[220px]"
        />

        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-60 bottom-0 h-[700px] w-[700px] rounded-full bg-neutral-500 blur-[240px]"
        />
      </div>

      <Container>
        <div className="relative">

          <div className="mx-auto mb-28 max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-xl">
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                CONTACT US
              </span>
            </div>

            <h2 className="mt-10 text-5xl font-black leading-[0.92] tracking-[-0.04em] md:text-7xl">
              Let's Build
              <br />
              <span className="text-neutral-500">
                Something Great
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-400">
              Have an idea, startup or enterprise project?
              Let's discuss how we can design and engineer
              a premium digital experience together.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="space-y-8"
            >
              {info.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl"
                  >
                    <div className="relative flex items-center gap-6">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon size={28} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-neutral-400">
                          {item.value}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl"
            >
              <div className="grid gap-6">
                                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-white/30"
                />
                {errors.name && (
                  <p className="text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}

                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-white/30"
                />
                {errors.email && (
                  <p className="text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}

                <input
                  {...register("phone")}
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-white/30"
                />
                {errors.phone && (
                  <p className="text-sm text-red-400">
                    {errors.phone.message}
                  </p>
                )}

                <input
                  {...register("company")}
                  type="text"
                  placeholder="Company Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-white/30"
                />

                <select
                  {...register("service")}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-white/30"
                >
                  <option value="" className="bg-black">
                    Select Service
                  </option>

                  <option value="AI Development" className="bg-black">
                    AI Development
                  </option>

                  <option value="Web Development" className="bg-black">
                    Web Development
                  </option>

                  <option value="Mobile App" className="bg-black">
                    Mobile App
                  </option>

                  <option value="Cloud Solutions" className="bg-black">
                    Cloud Solutions
                  </option>

                  <option value="UI/UX Design" className="bg-black">
                    UI / UX Design
                  </option>

                  <option value="Cyber Security" className="bg-black">
                    Cyber Security
                  </option>
                </select>

                {errors.service && (
                  <p className="text-sm text-red-400">
                    {errors.service.message}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-6">
                  <select
                    {...register("budget")}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
                  >
                    <option value="" className="bg-black">
                      Budget
                    </option>

                    <option value="Below ₹50K" className="bg-black">
                      Below ₹50K
                    </option>

                    <option value="₹50K - ₹1L" className="bg-black">
                      ₹50K - ₹1L
                    </option>

                    <option value="₹1L - ₹5L" className="bg-black">
                      ₹1L - ₹5L
                    </option>

                    <option value="₹5L+" className="bg-black">
                      ₹5L+
                    </option>
                  </select>

                  <select
                    {...register("timeline")}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
                  >
                    <option value="" className="bg-black">
                      Timeline
                    </option>

                    <option value="Immediately" className="bg-black">
                      Immediately
                    </option>

                    <option value="Within 1 Month" className="bg-black">
                      Within 1 Month
                    </option>

                    <option value="2-3 Months" className="bg-black">
                      2-3 Months
                    </option>

                    <option value="Flexible" className="bg-black">
                      Flexible
                    </option>
                  </select>
                </div>

                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-white/30"
                />

                {errors.message && (
                  <p className="text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}

                {/* Honeypot */}
                <input
                  {...register("website")}
                  type="text"
                  autoComplete="off"
                  className="hidden"
                />

                <Button
                  type="submit"
                  disabled={loading}
                >
                  <span className="flex items-center gap-3">
                    {loading ? "Sending..." : "Send Message"}

                    <Send size={18} />
                  </span>
                </Button>

              </div>
            </motion.form>

          </div>

        </div>
      </Container>

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[-350px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white blur-[260px]"
      />
    </section>
  );
}