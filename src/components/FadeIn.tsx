import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`fade-in ${inView ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
