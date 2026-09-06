"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));

    const handleLinkClick = (id: string) => {
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-accent/10 bg-background/80 backdrop-blur-md">
            {/* <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"> */}
            <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16 xl:px-24">
                <button
                    onClick={() => handleLinkClick("home")}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-heading text-sm font-semibold text-background transition-transform hover:scale-105"
                    aria-label="Go to home"
                >
                    PK
                </button>

                {/* Desktop links */}
                <ul className="hidden gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id} className="relative">
                            <button
                                onClick={() => handleLinkClick(link.id)}
                                className={`text-sm font-medium transition-colors ${activeId === link.id
                                    ? "text-accent"
                                    : "text-foreground/70 hover:text-foreground"
                                    }`}
                            >
                                {link.label}
                            </button>
                            {activeId === link.id && (
                                <motion.span
                                    layoutId="active-nav-underline"
                                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-accent"
                                />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex flex-col gap-1.5 md:hidden"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-foreground transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-accent/10 md:hidden"
                    >
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`block w-full px-6 py-3 text-left text-sm font-medium ${activeId === link.id ? "text-accent" : "text-foreground/70"
                                        }`}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}