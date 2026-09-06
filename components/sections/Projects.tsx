"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb,
    SiPostgresql, SiPrisma, SiN8N, SiJavascript, SiJquery, SiHtml5,
    SiCss, SiReact,
} from "react-icons/si";

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

const PROJECTS = [
    {
        icon: "🛡️",
        title: "Autokrator.ai",
        subtitle: "GRC Platform",
        desc: "Helps organizations manage compliance frameworks like ISO 27001 — tracking risks, audits, policies, and remediation tasks in one dashboard.",
        tech: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "n8n"],
    },
    {
        icon: "🩺",
        title: "DocFinder",
        subtitle: "Doctor Appointment Booking Platform",
        desc: "Patients book doctors by specialty and location, while each center gets a full overview — managing doctors, availability, bookings, and earnings from one dashboard.",
        tech: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    },
    {
        icon: "🗂️",
        title: "Issue Tracker",
        subtitle: "Issue Management System",
        desc: "An internal Jira-style tool for tracking issues using Agile practices — sprints, scrums, and backlogs.",
        tech: ["JavaScript", "jQuery", "HTML5", "CSS3"],
    },
    {
        icon: "🕘",
        title: "Attendance Portal",
        subtitle: "Attendance Management System",
        desc: "An employee attendance portal handling sign-in/out, leave requests, WFH approvals, and admin dashboards.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
    },
];

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
                {/* Carousel */}
                <div className="relative mx-auto flex max-w-5xl items-center justify-center">
                    <button
                        onClick={() => paginate(-1)}
                        aria-label="Previous project"
                        className="absolute left-0 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface text-lg transition-colors hover:border-accent hover:bg-accent hover:text-background"
                    >
                        ←
                    </button>

                    <div className="relative h-[460px] w-full max-w-2xl overflow-hidden sm:h-[420px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={project.title}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute inset-0 flex flex-col rounded-3xl border border-accent/20 bg-surface p-9 shadow-sm transition-colors duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 sm:p-10"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-3xl">
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
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => paginate(1)}
                        aria-label="Next project"
                        className="absolute right-0 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-surface text-lg transition-colors hover:border-accent hover:bg-accent hover:text-background"
                    >
                        →
                    </button>
                </div>

                <div className="mt-8 flex justify-center gap-2">
                    {PROJECTS.map((p, i) => (
                        <button
                            key={p.title}
                            onClick={() => setIndex([i, i > index ? 1 : -1])}
                            aria-label={`Go to ${p.title}`}
                            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-2 bg-accent/30"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}