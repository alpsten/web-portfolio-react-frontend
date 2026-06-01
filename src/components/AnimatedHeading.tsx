import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { useIsLoopCopy } from "../context/LoopCopy";

interface AnimatedHeadingProps {
    text: string;
    as?: "h1" | "h2" | "h3";
    className?: string;
}

export default function AnimatedHeading({ text, as: Tag = "h2", className }: AnimatedHeadingProps) {
    const ref = useRef<HTMLElement>(null);
    const reduced = useReducedMotion();
    const isLoopCopy = useIsLoopCopy();
    const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.5 });

    return (
        <Tag className={className} ref={ref as React.RefObject<HTMLHeadingElement>}>
            {(reduced || isLoopCopy) ? text : <ScrambleText text={text} trigger={inView} speed={130} delay={200} />}
        </Tag>
    );
}
