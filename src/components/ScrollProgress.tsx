import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
    const { scrollY } = useScroll();
    const [cycleH, setCycleH] = useState(1);

    useEffect(() => {
        function measure() {
            const el = document.getElementById("loop-cycle");
            if (el) setCycleH(el.offsetHeight || 1);
        }
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // Modulo arithmetic: handles the jump from cycleH→0 without spring lag
    const scaleX = useTransform(scrollY, (y) => {
        if (cycleH <= 1) return 0;
        return (y % cycleH) / cycleH;
    });

    return (
        <motion.div
            style={{
                scaleX,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "var(--a)",
                transformOrigin: "0%",
                zIndex: 1000,
            }}
        />
    );
}
