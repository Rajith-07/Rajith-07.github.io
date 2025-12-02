"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

export type Project = {
  title: string;
  description: string;
  tools: string[];
  github: string;
};

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Selected Work
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">Projects</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 transition hover:text-slate-900"
                  aria-label={`${project.title} on GitHub`}
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-slate-600">{project.description}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

