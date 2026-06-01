import { useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import AnimatedHeading from "../components/AnimatedHeading";
import DrawRule from "../components/DrawRule";
import { useIsLoopCopy } from "../context/LoopCopy";

const FULL_FACTS = [
    { pre: "Swam 10 km in",        highlight: "2:52:32",           post: "" },
    { pre: "Avid",                  highlight: "Terraforming Mars", post: "player" },
    { pre: "",                      highlight: "Hip-hop",           post: "is my genre of choice" },
    { pre: "Tokyo is still on the", highlight: "bucket list",       post: "" },
    { pre: "",                      highlight: "Science fiction",   post: "reader at heart" },
    { pre: "Former",                highlight: "Apple Specialist",  post: "" },
];

export default function Bio() {
    const gridRef    = useRef<HTMLDivElement>(null);
    const played     = useRef(false);
    const reduced    = useReducedMotion();
    const isLoopCopy = useIsLoopCopy();
    const inView     = useInView(gridRef, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!inView || reduced || isLoopCopy || played.current || !gridRef.current) return;
        played.current = true;

        const allHighlightChars = gridRef.current.querySelectorAll<HTMLElement>(".bio__highlight-char");

        // Stagger the highlight characters across all facts, delayed so they
        // land after the CSS slide-in of each row has settled
        gsap.from(allHighlightChars, {
            y: 14,
            opacity: 0,
            duration: 0.032,
            stagger: 0.022,
            ease: "power3.out",
            delay: 0.55,
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
                <p>
                    I've worked with databases using tools like Prisma, MongoDB, and Supabase,
                    and I'm comfortable building full-stack applications with React and TypeScript.
                    My experience also includes authentication, payments, and data-heavy interfaces
                    using Clerk, Stripe, and TanStack.
                </p>
                <div className="bio__cta">
                    <Link to="/cv" className="btn btn--outline">
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
                                    {fact.pre && <>{fact.pre} </>}
                                    <span className="bio__fact-highlight">
                                        {fact.highlight.split("").map((char, j) => (
                                            <span
                                                key={j}
                                                className="bio__highlight-char"
                                                style={{ display: "inline-block" }}
                                            >
                                                {char === " " ? " " : char}
                                            </span>
                                        ))}
                                    </span>
                                    {fact.post && <> {fact.post}</>}
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
