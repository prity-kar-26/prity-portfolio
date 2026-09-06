"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiPrisma, SiN8N, SiJavascript, SiJquery, SiHtml5,
  SiCss, SiReact,
} from "react-icons/si";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { PROJECTS } from "@/data/projects";

const TECH_ICONS: Record<string, React.ElementType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  n8n: SiN8N,
  JavaScript: SiJavascript,
  jQuery: SiJquery,
  HTML5: SiHtml5,
  CSS3: SiCss,
  React: SiReact,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function Projects() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      const next = (prev + dir + PROJECTS.length) % PROJECTS.length;
      return [next, dir];
    });
  };

  const project = PROJECTS[index];

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-4 rounded-full border border-accent/30 bg-surface px-4 py-1 text-sm font-medium text-accent">
            Projects
          </span>
          <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            What I&apos;ve Built
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl">
          {/* Card + side arrows (desktop) */}
          <div className="relative flex items-center justify-center">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous project"
              className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-surface text-lg transition-colors hover:border-accent hover:bg-accent hover:text-background md:flex"
            >
              ←
            </button>

            <div className="relative mx-auto w-full max-w-2xl">
              {/* Blurry glow behind the card */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent via-accent-hover to-accent opacity-25 blur-2xl"
              />

              <div className="relative h-[480px] w-full overflow-hidden sm:h-[420px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={project.title}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <SpotlightCard className="flex h-full flex-col rounded-3xl border border-accent/20 bg-surface p-9 shadow-sm transition-colors duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-10">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-3xl">
                        {project.icon}
                      </div>

                      <h3 className="mt-6 font-heading text-2xl font-semibold sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                        {project.subtitle}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                        {project.desc}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-3 pt-6">
                        {project.tech.map((t) => {
                          const Icon = TECH_ICONS[t];
                          return (
                            <span
                              key={t}
                              title={t}
                              className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/20 bg-background text-base text-foreground/70"
                            >
                              {Icon ? <Icon /> : t.slice(0, 2)}
                            </span>
                          );
                        })}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-surface text-lg transition-colors hover:border-accent hover:bg-accent hover:text-background md:flex"
            >
              →
            </button>
          </div>

          {/* Arrows below the card (mobile only) */}
          <div className="mt-6 flex items-center justify-center gap-6 md:hidden">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-surface text-lg transition-colors hover:border-accent hover:bg-accent hover:text-background"
            >
              ←
            </button>
            <button
              onClick={() => paginate(1)}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-surface text-lg transition-colors hover:border-accent hover:bg-accent hover:text-background"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {PROJECTS.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              aria-label={`Go to ${p.title}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-accent/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}