"use client";

import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";
import { SKILL_GROUPS } from "@/data/skills";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const badgeStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04 } },
};

const badgeItem = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden px-6 py-5 sm:px-10 lg:px-16 xl:px-24"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
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
                        Skills
                    </span>
                    <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                        What I Work With
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {SKILL_GROUPS.map((group) => (
                        <motion.div key={group.title} variants={fadeUp} className="h-full">
                            <TiltCard className="flex h-full flex-col rounded-2xl border border-accent/20 bg-surface p-6 shadow-sm transition-colors duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20">
                                <span className="text-2xl">{group.icon}</span>
                                <h3 className="mt-3 font-heading text-lg font-semibold">
                                    {group.title}
                                </h3>

                                <motion.div
                                    variants={badgeStagger}
                                    className="mt-4 flex flex-wrap gap-2"
                                >
                                    {group.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={badgeItem}
                                            className="rounded-full border border-accent/20 bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </TiltCard>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}