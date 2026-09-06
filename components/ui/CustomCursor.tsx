"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);

    const eyeX = useMotionValue(-100);
    const eyeY = useMotionValue(-100);
    const eyeSpringX = useSpring(eyeX, { damping: 25, stiffness: 220, mass: 0.5 });
    const eyeSpringY = useSpring(eyeY, { damping: 25, stiffness: 220, mass: 0.5 });

    const pupilRawX = useMotionValue(0);
    const pupilRawY = useMotionValue(0);
    const pupilX = useSpring(pupilRawX, { damping: 15, stiffness: 200 });
    const pupilY = useSpring(pupilRawY, { damping: 15, stiffness: 200 });

    const lastPos = useRef({ x: 0, y: 0 });
    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!hasFinePointer) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            eyeX.set(e.clientX);
            eyeY.set(e.clientY);

            const dx = e.clientX - lastPos.current.x;
            const dy = e.clientY - lastPos.current.y;
            lastPos.current = { x: e.clientX, y: e.clientY };

            const dist = Math.hypot(dx, dy);
            if (dist > 1) {
                const maxOffset = 4;
                const angle = Math.atan2(dy, dx);
                pupilRawX.set(Math.cos(angle) * maxOffset);
                pupilRawY.set(Math.sin(angle) * maxOffset);
            }

            // Recenter the pupil once the cursor has been still for a moment
            if (idleTimer.current) clearTimeout(idleTimer.current);
            idleTimer.current = setTimeout(() => {
                pupilRawX.set(0);
                pupilRawY.set(0);
            }, 150);

            const target = e.target as HTMLElement;
            const isInteractive = !!target.closest("a, button, [role='button']");
            if (isInteractive) {
                setIsBlinking(true);
                setTimeout(() => setIsBlinking(false), 200);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            if (idleTimer.current) clearTimeout(idleTimer.current);
        };
    }, [eyeX, eyeY, pupilRawX, pupilRawY]);

    if (!isVisible) return null;

    return (
        <motion.div
            aria-hidden
            style={{ x: eyeSpringX, y: eyeSpringY, translateX: "-50%", translateY: "-50%" }}
            className="pointer-events-none fixed left-0 top-0 z-[9999]"
        >
            <motion.svg
                width="28"
                height="26"
                viewBox="0 0 28 26"
                animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                transition={{ duration: 0.1 }}
            >
                <path
                    d="M1,13 C5,2 23,2 27,13 C23,24 5,24 1,13 Z"
                    fill="var(--color-surface)"
                    stroke="var(--color-foreground)"
                    strokeWidth="1.5"
                />
                <motion.circle
                    cx={14}
                    cy={13}
                    r={4.5}
                    fill="var(--color-foreground)"
                    style={{ x: pupilX, y: pupilY }}
                />
            </motion.svg>
        </motion.div>
    );
}