"use client";

import { motion } from "framer-motion";

type AboutProps = {
  summary: string;
  interests: string[];
  highlights: string[];
};

export function About({ summary, interests, highlights }: AboutProps) {
  return (
    <motion.section
      id="about"
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="relative mx-auto h-24 w-24 rounded-full border border-slate-200 bg-white shadow-sm md:mx-0">
          <div className="absolute inset-2 rounded-full border border-dashed border-slate-300">
            <span className="flex h-full items-center justify-center text-xl font-semibold text-slate-700">
              RS
            </span>
          </div>
        </div>
        <div className="space-y-4 text-slate-600">
          <p className="text-base">{summary}</p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs uppercase tracking-widest text-slate-500"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
        {highlights.map((highlight) => (
          <p
            key={highlight}
            className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >
            {highlight}
          </p>
        ))}
      </div>
    </motion.section>
  );
}

