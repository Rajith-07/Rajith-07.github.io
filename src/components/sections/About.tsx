"use client";

import { motion } from "framer-motion";

type AboutProps = {
  summary: React.ReactNode;
};

export function About({ summary }: AboutProps) {
  return (
    <motion.section
      id="about"
      className="relative mx-auto mt-12 max-w-5xl scroll-mt-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">About Me</h2>
        <div className="mt-3 h-1.5 w-12 rounded-full bg-slate-900" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-xl backdrop-blur-sm">
        {/* Clean IDE Header */}
        <div className="flex items-end gap-2 border-b border-slate-200/60 bg-slate-50/80 px-4 pt-3">
          <div className="rounded-t-lg border-x border-t border-slate-200/60 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
            about.tsx
          </div>
          <div className="rounded-t-lg px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-slate-400 transition-colors hover:bg-slate-200/50 hover:text-slate-600">
            rajith.config.js
          </div>
        </div>

        {/* Content Split */}
        <div className="grid md:grid-cols-2">
          {/* Left Pane: Professional Executive Summary */}
          <div className="flex flex-col border-r border-slate-200/60 bg-white p-8 sm:p-10">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Executive Profile
            </h3>
            <div className="text-[15px] font-normal leading-loose text-slate-600">
              {summary}
            </div>
          </div>

          {/* Right Pane: Code/JSON Snippet */}
          <div className="overflow-x-auto bg-[#fafafa] p-8 font-mono text-[13px] text-slate-600 sm:p-10">
            <div className="flex min-w-[400px] flex-col gap-1.5 leading-relaxed">
              
              {/* Box Header */}
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">1</span>
                <div>
                  <span className="font-medium text-pink-600">const</span>
                  <span className="ml-2 font-medium text-blue-600">rajith</span>
                  <span className="ml-2">=</span>
                  <span className="ml-2">{`{`}</span>
                </div>
              </div>
              
              {/* Role */}
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">2</span>
                <div className="ml-4">
                  <span className="font-medium text-emerald-600">role:</span>
                  <span className="ml-2 text-amber-600">"Software Developer"</span>,
                </div>
              </div>

              {/* Blank Line */}
              <div className="flex"><span className="w-8 shrink-0 select-none text-slate-300">3</span></div>

              {/* Focus */}
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">4</span>
                <div className="ml-4">
                  <span className="font-medium text-emerald-600">focus:</span>
                  <span className="ml-2">{`[`}</span>
                </div>
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">5</span>
                <span className="ml-10 text-amber-600">"Building scalable backend systems"</span>,
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">6</span>
                <span className="ml-10 text-amber-600">"Designing cloud-native architectures"</span>,
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">7</span>
                <span className="ml-10 text-amber-600">"Applying AI to real-world problems"</span>
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">8</span>
                <span className="ml-4">{`],`}</span>
              </div>

              {/* Blank Line */}
              <div className="flex"><span className="w-8 shrink-0 select-none text-slate-300">9</span></div>

              {/* Current Work */}
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">10</span>
                <div className="ml-4">
                  <span className="font-medium text-emerald-600">current_work:</span>
                  <span className="ml-2">{`[`}</span>
                </div>
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">11</span>
                <span className="ml-10 text-amber-600">"ChargeIQ - EV Charging Station Finder"</span>,
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">12</span>
                <span className="ml-10 text-amber-600">"Smart Toll System Featuring Zigbee"</span>,
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">13</span>
                <span className="ml-10 text-amber-600">"UniVeritas"</span>,
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">14</span>
                <span className="ml-10 text-amber-600">"System design + backend problem solving"</span>
              </div>
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">15</span>
                <span className="ml-4">{`],`}</span>
              </div>

              {/* Blank Line */}
              <div className="flex"><span className="w-8 shrink-0 select-none text-slate-300">16</span></div>
              
              {/* Mindset */}
              <div className="flex">
                <span className="w-8 shrink-0 select-none text-slate-300">17</span>
                <div className="ml-4">
                  <span className="font-medium text-emerald-600">mindset:</span>
                  <span className="ml-2 text-amber-600">"Build → Test → Deploy → Scale"</span>
                </div>
              </div>

              {/* Close */}
              <div className="flex mt-1">
                <span className="w-8 shrink-0 select-none text-slate-300">18</span>
                <span>{`};`}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
