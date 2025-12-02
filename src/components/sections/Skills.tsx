"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import {
  FiActivity,
  FiBox,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiServer,
  FiSettings,
} from "react-icons/fi";

export type SkillCategory = {
  category: string;
  items: string[];
};

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Programming: FiCode,
  Frontend: FiLayers,
  Backend: FiServer,
  Databases: FiDatabase,
  "ML & AI": FiActivity,
  "IoT & Embedded": FiBox,
  Tools: FiSettings,
};

export function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Core Skills
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Multidisciplinary Stack
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map(({ category, items }) => {
          const Icon = iconMap[category] ?? FiCpu;
          return (
            <motion.article
              key={category}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-slate-900">{category}</p>
                <span className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-600">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs uppercase tracking-wide text-slate-600 transition group-hover:border-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

