import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface MagneticIconProps {
    children: ReactNode;
    strength?: number;
}

export default function MagneticIcon({ children, strength = 0.4 }: MagneticIconProps) {
    const ref = useRef<HTMLDivElement>(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, { stiffness: 200, damping: 20 });
    const y = useSpring(rawY, { stiffness: 200, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        rawX.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        rawY.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    };

    const handleMouseLeave = () => {
        rawX.set(0);
        rawY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x, y, display: "inline-flex" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
}
