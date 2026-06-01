import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";
import { useIsLoopCopy } from "../context/LoopCopy";

export default function DrawRule() {
    const ref = useRef<HTMLDivElement>(null);
    const reduced = useReducedMotion();
    const isLoopCopy = useIsLoopCopy();

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (reduced || isLoopCopy) {
            gsap.set(el, { scaleX: 1 });
            return;
        }

        const trigger = gsap.fromTo(
            el,
            { scaleX: 0 },
            {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top 92%",
                    end: "top 40%",
                    scrub: 0.6,
                },
            }
        );

        return () => { trigger.scrollTrigger?.kill(); };
    }, [reduced, isLoopCopy]);

    return (
        <div
            ref={ref}
            style={{
                height: "1px",
                background: "var(--border)",
                width: "100%",
                transformOrigin: "0%",
            }}
        />
    );
}
