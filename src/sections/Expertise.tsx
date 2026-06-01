import { useEffect, useLayoutEffect, useRef } from "react";
import { FaDatabase, FaReact, FaServer, FaWrench } from "react-icons/fa";
import { motion, useReducedMotion, useAnimationFrame, useMotionValue, useInView } from "framer-motion";
import gsap from "gsap";
import AnimatedHeading from "../components/AnimatedHeading";
import DrawRule from "../components/DrawRule";
import { useIsLoopCopy } from "../context/LoopCopy";

type Bucket = {
    title: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    text: string;
    tech: string[];
};

const buckets: Bucket[] = [
    {
        title: "Backend",
        Icon: FaServer,
        text: "Core backend technologies I work with most. I focus on building structured services, clear APIs, and systems that stay maintainable as they grow.",
        tech: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "Spring Security", "Maven"],
    },
    {
        title: "Frontend",
        Icon: FaReact,
        text: "Frontend tools I use to build responsive interfaces. I care about usability, clean component structure, and connecting the UI to real application logic.",
        tech: ["React", "TypeScript", "JavaScript", "HTML", "Tailwind", "Framer Motion", "Vite"],
    },
    {
        title: "Data",
        Icon: FaDatabase,
        text: "Data and integration tools I use in real projects. Working with validation, persistence, and external services so the data flow remains reliable end to end.",
        tech: ["Prisma", "MongoDB", "MySQL", "Supabase", "Zod", "PostgreSQL", "Drizzle"],
    },
    {
        title: "Tooling",
        Icon: FaWrench,
        text: "Tools and libraries I rely on for delivery and product work. I use them to keep development practical, reduce friction, and ship with a steady workflow.",
        tech: ["Git", "Vite", "Bun", "TanStack Query", "Stripe SDK", "Clerk", "Docker"],
    },
];

function ItemMarquee({ tech }: { tech: string[] }) {
    const reduced  = useReducedMotion();
    const trackRef = useRef<HTMLDivElement>(null);
    const x        = useMotionValue(0);

    useAnimationFrame((_, delta) => {
        if (!trackRef.current || reduced) return;
        const oneWidth = trackRef.current.scrollWidth / 4;
        if (oneWidth === 0) return;
        const next = x.get() - (40 / 1000) * Math.min(delta, 50);
        x.set(next <= -oneWidth ? next + oneWidth : next);
    });

    const items = [...tech, ...tech, ...tech, ...tech];
    return (
        <div className="item-marquee" aria-hidden="true">
            <motion.div className="item-marquee__track" ref={trackRef} style={{ x }}>
                {items.map((t, i) => (
                    <span key={i} className="item-marquee__item">
                        <span className="item-marquee__dot">✦</span>
                        {t}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

function getExpertiseEls(titleEl: HTMLElement, iconEl: HTMLElement, textEl: HTMLElement | null, marqueeEl: HTMLDivElement | null) {
    const chars = Array.from(titleEl.querySelectorAll<HTMLElement>(".exp-char"));
    return [iconEl, ...chars, textEl, marqueeEl].filter(Boolean) as HTMLElement[];
}

function ExpertiseItem({ bucket, skip }: { bucket: Bucket; skip: boolean }) {
    const itemRef    = useRef<HTMLDivElement>(null);
    const titleRef   = useRef<HTMLHeadingElement>(null);
    const iconRef    = useRef<HTMLDivElement>(null);
    const textRef    = useRef<HTMLParagraphElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const played     = useRef(false);

    const inView = useInView(itemRef, { once: true, amount: 0.75 });

    useLayoutEffect(() => {
        if (skip || !titleRef.current || !iconRef.current) return;
        gsap.set(getExpertiseEls(titleRef.current, iconRef.current, textRef.current, marqueeRef.current), { opacity: 0 });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (skip) {
            if (!titleRef.current || !iconRef.current) return;
            gsap.set(getExpertiseEls(titleRef.current, iconRef.current, textRef.current, marqueeRef.current),
                { opacity: 1, y: 0, rotation: 0, scale: 1 });
            return;
        }
        if (!inView || played.current || !titleRef.current || !iconRef.current) return;
        played.current = true;

        const chars = titleRef.current.querySelectorAll<HTMLElement>(".exp-char");

        const tl = gsap.timeline();
        tl.fromTo(iconRef.current,
            { rotation: -90, scale: 0.3, opacity: 0 },
            { rotation: 0, scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.7)" }
        )
        .fromTo(chars,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.04, stagger: 0.03, ease: "power3.out" },
            "-=0.3"
        )
        .fromTo(textRef.current!,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            "-=0.15"
        )
        .fromTo(marqueeRef.current ?? [],
            { opacity: 0 },
            { opacity: 1, duration: 0.35, ease: "power2.out" },
            "-=0.1"
        );

        return () => { tl.kill(); };
    }, [inView, skip]);

    return (
        <div ref={itemRef} className="expertise__item">
            <DrawRule />
            <div className="expertise__body">
                <div className="expertise__left">
                    <h3
                        ref={titleRef}
                        className="expertise__title"
                        aria-label={bucket.title}
                    >
                        {bucket.title.split("").map((char, i) =>
                            char === " " ? (
                                <span key={i}>&nbsp;</span>
                            ) : (
                                <span key={i} className="exp-char" style={{ display: "inline-block" }}>{char}</span>
                            )
                        )}
                    </h3>
                    <p ref={textRef} className="expertise__text">{bucket.text}</p>
                </div>
                <div ref={iconRef} className="expertise__icon-wrap" aria-hidden="true">
                    <bucket.Icon size={36} className="expertise__icon" />
                </div>
            </div>
            <div ref={marqueeRef} className="expertise__marquee">
                <ItemMarquee tech={bucket.tech} />
            </div>
        </div>
    );
}

export default function Expertise() {
    const reduced    = useReducedMotion();
    const isLoopCopy = useIsLoopCopy();
    const skip       = !!(reduced || isLoopCopy);

    return (
        <section id="expertise" className="expertise">
            <AnimatedHeading text="Expertise" />
            <div className="expertise__list">
                {buckets.map((bucket) => (
                    <ExpertiseItem key={bucket.title} bucket={bucket} skip={skip} />
                ))}
                <DrawRule />
            </div>
        </section>
    );
}
