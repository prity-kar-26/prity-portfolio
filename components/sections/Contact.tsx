"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const CONTACT_LINKS = [
    {
        icon: HiOutlineMail,
        label: "Email",
        value: "pritykar26@gmail.com",
        href: "mailto:pritykar26@gmail.com",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "prity-k-75a808222",
        href: "https://www.linkedin.com/in/prity-k-75a808222/",
    },
    {
        icon: SiGithub,
        label: "GitHub",
        value: "prity-kar-26",
        href: "https://github.com/prity-kar-26",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const contactSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Please enter a valid email"),
    message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Swap this URL for your own Formspree/EmailJS endpoint
        await fetch("https://formspree.io/f/moeqnbaj", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(data),
        });
        reset();
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 xl:px-24"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-accent/15 blur-[110px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
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
                        Contact
                    </span>
                    <h2 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mt-4 max-w-lg text-base text-foreground/80">
                        Have an opportunity? My inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-16">
                    {/* Left column: intro + contact links */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                        className="flex flex-col gap-6"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-base leading-relaxed text-foreground/80 sm:text-lg"
                        >
                            I&apos;m currently exploring new full-stack opportunities.
                            If you&apos;re hiring or collaborating — reach out directly through any of these, or use the form.
                        </motion.p>

                        {/* Email, LinkedIn, GitHub — same row */}
                        <motion.div variants={fadeUp} className="flex items-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/prity-k-75a808222/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-surface text-2xl text-accent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                            >
                                <FaLinkedin />
                            </a>
                            <a

                                href="https://github.com/prity-kar-26"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-surface text-2xl text-accent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                            >
                                <SiGithub />
                            </a>
                            <a
                                href="mailto:pritykar26@gmail.com"
                                className="flex flex-1 items-center gap-4 rounded-2xl border border-accent/20 bg-surface p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-background text-xl text-accent">
                                    <HiOutlineMail />
                                </span>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                                        Email
                                    </p>
                                    <p className="mt-0.5 font-medium text-foreground">
                                        pritykar26@gmail.com
                                    </p>
                                </div>
                            </a>

                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-surface px-5 py-4"
                        >
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500" />
                            <p className="text-sm text-foreground/80">
                                Currently open to new opportunities — immediate availability for full-time roles.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="flex flex-col gap-5 rounded-3xl border border-accent/20 bg-surface p-8 shadow-sm sm:p-9"
                    >
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-foreground">
                                Name
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-xl border border-accent/20 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                            />
                            {errors.name && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-foreground">
                                Email
                            </label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-accent/20 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                            />
                            {errors.email && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                {...register("message")}
                                rows={5}
                                placeholder="Tell me a bit about the opportunity or what's on your mind..."
                                className="w-full resize-none rounded-xl border border-accent/20 bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                            />
                            {errors.message && (
                                <p className="mt-1.5 text-xs text-red-600">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background shadow-md shadow-accent/30 transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/40 disabled:opacity-60"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {isSubmitSuccessful && (
                            <p className="text-center text-sm font-medium text-green-700">
                                Thanks! Your message has been sent.
                            </p>
                        )}
                    </motion.form>
                </div >
            </div >
        </section >
    );
}