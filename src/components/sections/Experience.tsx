"use client";

import { motion } from "framer-motion";

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
  ongoing?: boolean;
};

export function ExperienceTimeline({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  return (
    <section id="experience" className="relative mt-32 space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Professional Experience
        </h2>
        <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-900" />
      </div>

      <div className="relative mx-auto max-w-4xl py-12">
        {/* The Glowing Gradient Line */}
        <div className="absolute bottom-0 left-[19px] top-6 w-[2px] bg-gradient-to-b from-slate-200 via-slate-300 to-transparent sm:left-[43px]" />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pl-12 pr-4 sm:pl-24"
            >
              {/* The Tech Node */}
              <div className="absolute left-[20px] top-10 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-slate-300 bg-white transition-all duration-300 group-hover:scale-[1.6] group-hover:border-blue-500 group-hover:bg-blue-50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] sm:left-[44px]">
                <div className="h-1.5 w-1.5 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-blue-500" />
              </div>

              {/* The Experience Card */}
              <div className="relative flex flex-col gap-2 overflow-hidden rounded-3xl border border-slate-200/50 bg-white/40 p-6 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:bg-white/80 group-hover:shadow-xl sm:p-10">
                
                {/* Horizontal hover beam */}
                <div className="pointer-events-none absolute -inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-500/40" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-950 sm:text-3xl">
                        {exp.role}
                      </h3>
                      {exp.ongoing && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          </span>
                          Active
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-500 transition-colors group-hover:text-slate-700">
                      {exp.org}
                    </h4>
                  </div>
                  <span className="inline-flex w-fit shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 sm:text-xs">
                    {exp.period}
                  </span>
                </div>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
                  {exp.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
