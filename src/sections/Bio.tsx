import { useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import AnimatedHeading from "../components/AnimatedHeading";
import DrawRule from "../components/DrawRule";
import { useIsLoopCopy } from "../context/LoopCopy";

type Seg = { text: string; hl?: boolean };

const FULL_FACTS: Seg[][] = [
    [{ text: "Swam 10 km", hl: true }, { text: " in " }, { text: "2:52:32", hl: true }],
    [{ text: "Avid " }, { text: "Terraforming Mars", hl: true }, { text: " player" }],
    [{ text: "Hip-hop", hl: true }, { text: " is my genre of choice" }],
    [{ text: "Tokyo", hl: true }, { text: " is still on the " }, { text: "bucket list", hl: true }],
    [{ text: "Science fiction", hl: true }, { text: " reader at heart" }],
    [{ text: "Former " }, { text: "Apple Specialist", hl: true }],
];

export default function Bio() {
    const gridRef    = useRef<HTMLDivElement>(null);
    const played     = useRef(false);
    const reduced    = useReducedMotion();
    const isLoopCopy = useIsLoopCopy();
    const inView     = useInView(gridRef, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!inView || reduced || isLoopCopy || played.current || !gridRef.current) return;
        played.current = true;

        const allHighlightChars = gridRef.current.querySelectorAll<HTMLElement>(".bio__highlight-char");

        gsap.from(allHighlightChars, {
            y: 14,
            opacity: 0,
            duration: 0.032,
            stagger: 0.022,
            ease: "power3.out",
            delay: 0.9,
        });
    }, [inView, reduced, isLoopCopy]);

    return (
        <section id="about" className="bio">

            <AnimatedHeading text="About Me" />

            <div className="bio__text">
                <p className="bio__lead">
                    I'm a software developer based in Stockholm,
                    focused on building backend systems and modern web applications.
                    I primarily work with Java and Spring Boot, as well as Node.js and Express,
                    designing APIs and services with a focus on structure, clarity, and long-term maintainability.
                </p>
                <p className="bio__lead">
                    I've worked with databases using tools like Prisma, MongoDB, and Supabase,
                    and I'm comfortable building full-stack applications with React and TypeScript.
                    My experience also includes authentication, payments, and data-heavy interfaces
                    using Clerk, Stripe, and TanStack.
                </p>
                <div className="bio__cta">
                    <Link to="/cv" className="btn btn--primary">
                        <FaFileAlt />
                        View My CV
                        <span className="btn__orbit" aria-hidden="true">
                            <span className="btn__planet" />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="bio__facts">
                <p className="bio__facts-label">Quick facts</p>
                <div className="bio__facts-grid" ref={gridRef}>
                    {FULL_FACTS.map((fact, i) => (
                        <div
                            key={i}
                            className={`bio__fact ${inView ? "bio__fact--visible" : ""}`}
                            style={{ "--fact-i": i } as React.CSSProperties}
                        >
                            <DrawRule />
                            <div className="bio__fact-inner">
                                <span className="bio__fact-num">0{i + 1}</span>
                                <span className="bio__fact-text">
                                    {fact.map((seg, j) =>
                                        seg.hl ? (
                                            <span key={j} className="bio__fact-highlight">
                                                {seg.text.split("").map((char, k) => (
                                                    <span
                                                        key={k}
                                                        className="bio__highlight-char"
                                                        style={{ display: "inline-block" }}
                                                    >
                                                        {char === " " ? " " : char}
                                                    </span>
                                                ))}
                                            </span>
                                        ) : (
                                            <span key={j}>{seg.text}</span>
                                        )
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <DrawRule />
            </div>
        </section>
    );
}
