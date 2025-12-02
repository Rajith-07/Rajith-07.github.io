"use client";

import { motion } from "framer-motion";

export type ResearchItem = {
  title: string;
  status: string;
  summary: string;
};

export function Research({ studies }: { studies: ResearchItem[] }) {
  return (
    <section id="research" className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Research
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">Current Focus</h2>
      </div>
      <div className="grid gap-4">
        {studies.map((study, index) => (
          <motion.article
            key={study.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="border-l-4 border-slate-900/50 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-900">
                {study.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {study.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{study.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

