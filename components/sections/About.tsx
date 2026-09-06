"use client";

import { motion } from "framer-motion";

const HIGHLIGHTS = [
    {
        icon: "🧩",
        title: "Full-Stack Ownership",
        desc: "Comfortable owning a feature end-to-end — from schema design to a deployed, polished UI.",
    },
    {
        icon: "🏗️",
        title: "Clean Architecture",
        desc: "RESTful API design, role-based access control, and maintainable, well-structured code.",
    },
    {
        icon: "🤖",
        title: "AI + Automation",
        desc: "Building smart workflows on top of core apps — like n8n + OpenAI pipelines that cut manual work.",
    },
    {
        icon: "🐳",
        title: "DevOps Awareness",
        desc: "Working knowledge of Docker, Kubernetes, and CI/CD pipelines to support scalable, production-ready delivery.",
    },
];

const JOURNEY = [
    { year: "2019 – 2023", label: "B.Tech in IT", sub: "RCC Institute of Information Technology, Kolkata" },
    { year: "2023 – Present", label: "Software Developer", sub: "Keross Research & Development" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
};

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
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
                        About
                    </span>
                    <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                        Who I Am
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
                    {/* Left column: Bio + Journey */}
                    <div className="flex flex-col gap-12">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeUp}
                            className="flex flex-col gap-5 text-base leading-relaxed text-foreground/80 sm:text-lg"
                        >
                            <p>
                                I completed my B.Tech in Information Technology from RCC
                                Institute of Information Technology, Kolkata. My full-stack
                                journey properly began when I joined Keross Research and
                                Development as a Software Engineer Trainee — that&apos;s
                                where I got hands-on with real production systems for the
                                first time.
                            </p>
                            <p>
                                Over the past 3+ years, I&apos;ve grown into a Software
                                Developer Level-1 role, working across the entire stack —
                                React and Next.js on the frontend, Node.js and Express on
                                the backend, and MongoDB and PostgreSQL with Prisma for
                                data. I&apos;ve also worked on AI-powered workflow
                                automation using n8n and the OpenAI API to cut down manual
                                effort in real client systems.
                            </p>
                            <p>
                                Alongside core development, I have working knowledge of
                                containerization and deployment workflows — Docker,
                                Kubernetes, and CI/CD pipelines — that support taking an
                                application from code to a reliable, production-ready
                                release.
                            </p>
                            <p>
                                I enjoy owning problems end-to-end — from the first schema
                                decision to the last pixel of a shipped UI — and I&apos;m
                                always looking to bring that ownership mindset to solving
                                real business problems.
                            </p>
                        </motion.div>

                        {/* Journey — now inside the left column */}
                        {/* Journey — now inside the left column */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 gap-6 border-t border-accent/15 pt-8"
                        >
                            {JOURNEY.map((step) => (
                                <motion.div
                                    key={step.label}
                                    variants={fadeUp}
                                    className="relative pl-6"
                                >
                                    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                                        {step.year}
                                    </p>
                                    <p className="mt-1 font-heading text-base font-semibold">
                                        {step.label}
                                    </p>
                                    <p className="mt-1 text-sm text-muted">{step.sub}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right column: Highlight cards */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="flex flex-col gap-5"
                    >
                        {HIGHLIGHTS.map((h) => (
                            <motion.div
                                key={h.title}
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                                className="rounded-2xl border border-accent/20 bg-surface p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                            >
                                <span className="text-2xl">{h.icon}</span>
                                <h3 className="mt-3 font-heading text-lg font-semibold">
                                    {h.title}
                                </h3>
                                <p className="mt-1.5 text-sm text-muted">{h.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}