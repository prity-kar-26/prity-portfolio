"use client";

import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { HiOutlineMail, HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-accent/15 bg-surface px-6 py-12 sm:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Name + tagline */}
          <div>
            <button
              onClick={() => scrollToSection("home")}
              className="font-heading text-lg font-semibold text-accent transition-transform hover:scale-105"
            >
              Prity Karmakar
            </button>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Thanks for stopping by — let&apos;s build something together.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:pritykar26@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-background text-lg text-accent transition-all hover:-translate-y-1 hover:border-accent"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://www.linkedin.com/in/prity-k-75a808222/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-background text-lg text-accent transition-all hover:-translate-y-1 hover:border-accent"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/prity-kar-26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 bg-background text-lg text-accent transition-all hover:-translate-y-1 hover:border-accent"
            >
              <SiGithub />
            </a>
          </div>
        </div>

        {/* Bottom row: back to top + copyright (centered) + spacer for balance */}
        <div className="grid grid-cols-[2.25rem_1fr_2.25rem] items-center border-t border-accent/10 pt-6">
          <div />
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Prity Karmakar. All rights reserved.
          </p>
          <button
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center justify-self-end rounded-full border border-accent/20 bg-background text-accent transition-all hover:-translate-y-1 hover:border-accent"
          >
            <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}