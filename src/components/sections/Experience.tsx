"use client";

import { motion } from "framer-motion";

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
};

export function ExperienceTimeline({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <section id="experience" className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Professional
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">Experience</h2>
      </div>
      <div className="relative border-l border-slate-200 pl-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative mb-8 pl-6 last:mb-0"
          >
            <span className="absolute left-0 top-2 -translate-x-[37px] rounded-full border border-slate-300 bg-white p-2 text-xs text-slate-500">
              <span className="block h-2 w-2 rounded-full bg-slate-900" />
            </span>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              {exp.period}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              {exp.role}
            </h3>
            <p className="text-sm font-medium text-slate-600">{exp.org}</p>
            <p className="mt-3 text-sm text-slate-600">{exp.summary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

