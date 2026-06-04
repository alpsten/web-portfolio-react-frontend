import { useEffect, useLayoutEffect, useRef } from "react";
import { FaDatabase, FaJava, FaReact, FaServer, FaWrench } from "react-icons/fa";
import {
    SiApachemaven, SiBun, SiClerk, SiDocker, SiExpress, SiFramer,
    SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs,
    SiOpenapiinitiative, SiPostgresql, SiPrisma, SiReact, SiReactquery,
    SiSpring, SiSpringsecurity, SiStripe, SiSupabase, SiTailwindcss,
    SiTypescript, SiVite, SiZod,
} from "react-icons/si";
import { motion, useReducedMotion, useAnimationFrame, useMotionValue, useInView } from "framer-motion";
import gsap from "gsap";
import AnimatedHeading from "../components/AnimatedHeading";
import DrawRule from "../components/DrawRule";
import { useIsLoopCopy } from "../context/LoopCopy";

type TechIcon = React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;

const TECH_COLORS: Record<string, string> = {
    "Java":             "#ED8B00",
    "Spring Boot":      "#6DB33F",
    "Node.js":          "#339933",
    "Express.js":       "#aaaaaa",
    "Spring Security":  "#6DB33F",
    "REST APIs":        "#6BA539",
    "Maven":            "#C71A36",
    "React":            "#61DAFB",
    "TypeScript":       "#3178C6",
    "JavaScript":       "#F7DF1E",
    "HTML":             "#E34F26",
    "Tailwind":         "#06B6D4",
    "Framer Motion":    "#0055FF",
    "Vite":             "#646CFF",
    "Prisma":           "#a5b4fc",
    "MongoDB":          "#47A248",
    "MySQL":            "#4479A1",
    "Supabase":         "#3ECF8E",
    "Zod":              "#3E67B1",
    "PostgreSQL":       "#4169E1",
    "Git":              "#F05032",
    "Bun":              "#f9f1e7",
    "TanStack Query":   "#FF4154",
    "Stripe SDK":       "#635BFF",
    "Clerk":            "#6C47FF",
    "Docker":           "#2496ED",
};

const TECH_ICONS: Record<string, TechIcon> = {
    "Java":             FaJava,
    "Spring Boot":      SiSpring,
    "Node.js":          SiNodedotjs,
    "Express.js":       SiExpress,
    "REST APIs":        SiOpenapiinitiative,
    "Spring Security":  SiSpringsecurity,
    "Maven":            SiApachemaven,
    "React":            SiReact,
    "TypeScript":       SiTypescript,
    "JavaScript":       SiJavascript,
    "HTML":             SiHtml5,
    "Tailwind":         SiTailwindcss,
    "Framer Motion":    SiFramer,
    "Vite":             SiVite,
    "Prisma":           SiPrisma,
    "MongoDB":          SiMongodb,
    "MySQL":            SiMysql,
    "Supabase":         SiSupabase,
    "Zod":              SiZod,
    "PostgreSQL":       SiPostgresql,
    "Git":              SiGit,
    "Bun":              SiBun,
    "TanStack Query":   SiReactquery,
    "Stripe SDK":       SiStripe,
    "Clerk":            SiClerk,
    "Docker":           SiDocker,
};

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
        tech: ["Prisma", "MongoDB", "MySQL", "Supabase", "Zod", "PostgreSQL"],
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
                {items.map((t, i) => {
                    const Icon  = TECH_ICONS[t];
                    const color = TECH_COLORS[t];
                    return (
                        <span key={i} className="item-marquee__item">
                            {Icon && <Icon size={14} className="item-marquee__icon" style={{ color }} />}
                            {t}
                            <span className="item-marquee__dot">✦</span>
                        </span>
                    );
                })}
            </motion.div>
        </div>
    );
}

function getExpertiseEls(titleEl: HTMLElement, iconEl: HTMLElement, textEl: HTMLElement | null, marqueeEl: HTMLDivElement | null) {
    const chars = Array.from(titleEl.querySelectorAll<HTMLElement>(".exp-char"));
    return [iconEl, ...chars, textEl, marqueeEl].filter(Boolean) as HTMLElement[];
}

function ExpertiseItem({ bucket, skip }: { bucket: Bucket; skip: boolean }) {
    const itemRef  = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const iconRef  = useRef<HTMLDivElement>(null);
    const textRef  = useRef<HTMLParagraphElement>(null);
    const techRef  = useRef<HTMLDivElement>(null);
    const played     = useRef(false);

    const inView = useInView(itemRef, { once: true, amount: 0.75 });

    useLayoutEffect(() => {
        if (skip || !titleRef.current || !iconRef.current) return;
        gsap.set(getExpertiseEls(titleRef.current, iconRef.current, textRef.current, techRef.current), { opacity: 0 });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (skip) {
            if (!titleRef.current || !iconRef.current) return;
            gsap.set(getExpertiseEls(titleRef.current, iconRef.current, textRef.current, techRef.current),
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
        .fromTo(techRef.current ?? [],
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
            <div ref={techRef} className="expertise__tech">
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
