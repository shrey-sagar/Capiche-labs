"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
}

export default function ProjectModal({
  open,
  onClose,
  title,
  description,
  image,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 z-[60] w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#070B17]"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-2 transition hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <img
              src={image}
              alt={title}
              className="h-80 w-full object-cover"
            />

            <div className="p-10">
              <h2 className="text-4xl font-black">{title}</h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {description}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}