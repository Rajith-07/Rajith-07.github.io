"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PROFILE_IMAGE = "profile.jpg";

export function Hero() {
  // const handleScrollToProjects = () => {
  //   const projectsSection = document.getElementById("projects");
  //   projectsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center"
    >
      <motion.div
        className="relative flex w-full max-w-4xl flex-col items-start gap-8 text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative h-64 w-64 overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-xl">
          <Image
            src={PROFILE_IMAGE}
            alt="Portrait of Rajith S"
            fill
            sizes="(max-width: 768px) 176px, 220px"
            className="object-cover"
            priority
          />
        </div>

        {/* <p className="text-sm uppercase tracking-[0.35em] text-slate-500 pl-16">
          Rajith S
        </p> */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="hero-highlight relative inline-block">
              RAJITH S
              <span className="underline-accent" />
            </span>
          </h1>
          <p className="text-xl font-medium tracking-wide text-slate-600 sm:text-2xl">
            Software Developer, Cloud Native & DevOps Engineer
          </p>
        </div>
        <p className="max-w-2xl text-lg text-slate-600">
        Designing modern software systems that integrate high-quality engineering practices, cloud and DevOps workflows, advanced networking, and AI-enhanced intelligence. Dedicated to creating scalable, resilient, and efficient solutions tailored for real-world impact.
        </p>
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open("https://github.com/rajith-07", "_blank")}
          className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-slate-700 transition-all hover:border-slate-400 hover:shadow-md"
        >
          View Projects on GitHub
          <span className="text-lg transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}

