"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const STATS = [
    { icon: "🕒", value: "3+", label: "Years Experience" },
    { icon: "📦", value: "4+", label: "Projects Delivered" },
    { icon: "⚙️", value: "10+", label: "Core Technologies" },
];

export default function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6 py-12 sm:px-10 lg:px-16 xl:px-24"
        >
            {/* Ambient glow blobs */}
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[100px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[110px]"
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12 lg:gap-20"
            >
                {/* Text content */}
                <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
                    <motion.span
                        variants={item}
                        className="mb-5 rounded-full border border-accent/30 bg-surface px-4 py-1 text-sm font-medium text-accent"
                    >
                        Available for opportunities
                    </motion.span>

                    <motion.h1
                        variants={item}
                        className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-accent">Prity Karmakar</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-4 text-lg font-medium text-muted sm:text-xl"
                    >
                        Full-Stack Developer (MERN) · Software Developer Level-1
                    </motion.p>

                    <motion.p
                        variants={item}
                        className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg"
                    >
                        I design, build, and ship scalable web applications end-to-end —
                        from database architecture to polished, production-ready
                        interfaces. Over 3+ years at Keross R&amp;D, I&apos;ve worked
                        across the MERN stack and Next.js, building everything from a
                        live GRC compliance platform to AI-powered workflow automations
                        that solve real business problems.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-9 flex flex-wrap items-center justify-center gap-4 md:justify-start"
                    >
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background shadow-md shadow-accent/30 transition-all hover:gap-3 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/40"
                        >
                            View Projects
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </button>

                    <a
                        href="/Prity_Karmakar_Resume.pdf"
                        download
                        className="group inline-flex items-center gap-2 rounded-full border border-accent/30 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-surface"
                    >
                        <span aria-hidden className="transition-transform group-hover:-translate-y-0.5">
                            ⬇
                        </span>
                        Download CV
                    </a>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="group inline-flex items-center gap-2 rounded-full border border-accent/30 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-surface"
                    >
                        Let's Contact
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
            </motion.div>

            <motion.div
                variants={item}
                className="mt-14 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-accent/15 pt-7"
            >
                {STATS.map((stat) => (
                    <motion.div
                        key={stat.label}
                        whileHover={{ y: -4 }}
                        className="flex flex-col items-center text-center sm:items-start sm:text-left"
                    >
                        <span className="text-xl">{stat.icon}</span>
                        <p className="mt-1 font-heading text-3xl font-semibold text-accent">
                            {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-muted sm:text-sm">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>

                {/* Photo — large portrait, glowing border, floating badge */ }
    <motion.div
        variants={item}
        className="order-1 mx-auto md:order-2 md:ml-auto"
    >
        <div className="relative w-full max-w-md">
            <Image
                src="/images/profile.jpeg"
                alt="Prity Karmakar"
                width={420}
                height={560}
                className="w-full rounded-[2.25rem] border-4 border-accent object-cover shadow-2xl shadow-black/20 transition-shadow duration-500 hover:shadow-2xl hover:shadow-accent/50"
                priority
            />
        </div>
    </motion.div>

    {/* Photo — large portrait, glowing border */ }
    {/* <motion.div
                    variants={item}
                    className="order-1 w-full max-w-sm md:order-2 md:ml-auto"
                >
                    <div className="relative w-full">
                        <div
                            aria-hidden
                            className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-accent via-accent-hover to-accent opacity-30 blur-xl"
                        />

                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2.25rem] border-4 border-accent bg-surface shadow-2xl">
                            <Image
                                src="/images/profile.jpeg"
                                alt="Prity Karmakar"
                                fill
                                sizes="(max-width: 768px) 320px, 384px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div> */}

            </motion.div >

        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-muted lg:flex"
        >
            Scroll
            <span>↓</span>
        </motion.div>
        </section >
    );
}