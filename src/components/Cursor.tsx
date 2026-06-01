import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const rawX = useMotionValue(-200);
    const rawY = useMotionValue(-200);

    const ringX = useSpring(rawX, { stiffness: 120, damping: 18 });
    const ringY = useSpring(rawY, { stiffness: 120, damping: 18 });

    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            rawX.set(e.clientX);
            rawY.set(e.clientY);
        };

        const expand = () => {
            if (ringRef.current) {
                animate(ringRef.current, { width: 52, height: 52, opacity: 0.9, borderColor: "var(--a)" }, { duration: 0.2 });
            }
        };
        const contract = () => {
            if (ringRef.current) {
                animate(ringRef.current, { width: 32, height: 32, opacity: 0.5, borderColor: "var(--a)" }, { duration: 0.2 });
            }
        };

        const interactives = document.querySelectorAll("a, button");
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", expand);
            el.addEventListener("mouseleave", contract);
        });

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            interactives.forEach((el) => {
                el.removeEventListener("mouseenter", expand);
                el.removeEventListener("mouseleave", contract);
            });
        };
    }, [rawX, rawY]);

    return (
        <motion.div
            ref={ringRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                x: ringX,
                y: ringY,
                translateX: "-50%",
                translateY: "-50%",
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "1px solid var(--a)",
                opacity: 0.5,
                zIndex: 10000,
                pointerEvents: "none",
            }}
        />
    );
}
