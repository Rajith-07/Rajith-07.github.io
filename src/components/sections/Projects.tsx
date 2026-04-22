"use client";

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { MouseEvent } from "react";

export type Project = {
  title: string;
  description: string;
  tools: string[];
  github: string;
  image?: string;
};

// Separated component for the 3D Parallax Tilt effect on each row
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  // 3D Parallax Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to make the tilt feel heavy and deliberate
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to +0.5 from center
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col items-center gap-10 md:gap-16 lg:gap-24 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* 3D Image Container Pane */}
      <div 
        className="w-full perspective-[1200px] md:w-1/2"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1200px" }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-100 shadow-xl transition-all duration-300 ease-out hover:shadow-2xl sm:aspect-video"
        >
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={project.image} 
              alt={project.title}
              className="h-full w-full object-cover pointer-events-none" 
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-200/50">
              <span className="font-mono text-sm tracking-widest text-slate-400 uppercase">Image Placeholder</span>
            </div>
          )}
          
          {/* Inner Light Reflection Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/30" />
        </motion.div>
      </div>

      {/* Typography & Story Pane */}
      <div className="flex w-full flex-col space-y-6 md:w-1/2">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            {project.title}
          </h3>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg text-pretty">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200/60 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:text-xs"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label={`View ${project.title} Source on GitHub`}
          >
            <FaGithub className="h-5 w-5" />
            View Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative mt-32 space-y-24">
      <div className="space-y-8 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Featured Projects
        </h2>
        <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-900" />
      </div>

      {/* Rhythmic vertical flow of Alternating Rows */}
      <div className="flex flex-col space-y-32 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
