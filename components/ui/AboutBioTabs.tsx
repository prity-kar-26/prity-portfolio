"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
    {
        id: "background",
        label: "Background",
        lead: "Where it started",
        content:
            "I completed my B.Tech in Information Technology from RCC Institute of Information Technology, Kolkata — that's where my interest in building real, working software first took shape.",
    },
    {
        id: "now",
        label: "Now",
        lead: "What I do today",
        content:
            "I'm a Software Developer Level-1 at Keross R&D, working across the MERN stack and Next.js — building everything from database schemas to polished, production-ready interfaces.",
    },
    {
        id: "beyond",
        label: "Beyond Code",
        lead: "What else I bring",
        content:
            "I also work with AI-powered automation using n8n and the OpenAI API, and have working knowledge of Docker, Kubernetes, and CI/CD pipelines — I like understanding how code becomes a real, running system.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AboutBioTabs() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const active = TABS.find((t) => t.id === activeTab)!;

    return (
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-3">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${activeTab === tab.id
                                ? "border-accent bg-accent text-background"
                                : "border-accent/20 bg-surface text-foreground/70 hover:border-accent/40"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="relative mt-6 min-h-[140px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                            {active.lead}
                        </p>
                        <p className="mt-2 text-base leading-relaxed text-foreground/80 sm:text-lg">
                            {active.content}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}