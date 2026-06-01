import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useInView, useReducedMotion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import DrawRule from "../components/DrawRule";
import { useIsLoopCopy } from "../context/LoopCopy";

type Project = {
    title: string;
    about: string;
    links: { label: string; href: string }[];
};

const projects: Project[] = [
    {
        title: "This Website",
        links: [{ label: "GitHub", href: "https://github.com/alpsten/web-portfolio-react-frontend" }],
        about: "A personal portfolio showcasing my projects, experience, and technical background, with a focus on backend development, APIs, and modern web applications.",
    },
    {
        title: "Internship Companion",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/internship-companion" },
            { label: "Website", href: "https://alpsten.github.io/internship-companion/" },
        ],
        about: "A companion app for keeping internship work structured, visible, and easier to follow over time.",
    },
    {
        title: "1001 Songs for Majken",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/1001-songs-for-majken" },
            { label: "Website", href: "https://alpsten.github.io/1001-songs-for-majken/" },
        ],
        about: "A long-term digital mixtape for my daughter: a personal archive of songs, artists, albums, and the meanings they carry.",
    },
    {
        title: "TM Scoring Statistics",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/tm-scoring-statistics" },
            { label: "Website", href: "https://alpsten.github.io/tm-scoring-statistics/" },
        ],
        about: "A Terraforming Mars scoring statistics project for tracking results, comparing scores, and making game outcomes easier to explore.",
    },
    {
        title: "Fifteen Puzzle",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/fifteen-puzzle" },
            { label: "Website", href: "https://alpsten.github.io/fifteen-puzzle/" },
        ],
        about: "A polished continuation of a school project: a 15-puzzle with both a Java desktop- and a TypeScript web-version. Slide the tiles into order on a 4×4 board, play locally, or share it online.",
    },
    {
        title: "Daycare For Animals",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/daycare-for-animals" },
            { label: "Website", href: "https://alpsten.github.io/daycare-for-animals/" },
        ],
        about: "A polished continuation of a school project: an animal daycare reception app with a Java core, local CLI, API layer, and TypeScript frontend.",
    },
    {
        title: "Fakestore API",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/fakstore-api" },
            { label: "Website", href: "https://alpsten.github.io/fakstore-api/" },
            { label: "Fakestore API", href: "https://fakestoreapi.com" },
        ],
        about: "Still currently polishing a continuation of a school assignment.",
    },
    {
        title: "Secret Project",
        links: [],
        about: "Currently working on.",
    },
];

function getAnimatedEls(titleEl: HTMLElement, numEl: HTMLElement, descEl: HTMLElement | null, linksEl: HTMLDivElement | null) {
    const chars = Array.from(titleEl.querySelectorAll<HTMLElement>(".proj-char"));
    return [numEl, ...chars, descEl, linksEl].filter(Boolean) as HTMLElement[];
}

function ProjectItem({ project, index, skip }: { project: Project; index: number; skip: boolean }) {
    const itemRef  = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const numRef   = useRef<HTMLSpanElement>(null);
    const descRef  = useRef<HTMLParagraphElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const played   = useRef(false);

    const inView = useInView(itemRef, { once: true, amount: 0.75 });

    // Hide all animated elements before the first browser paint
    useLayoutEffect(() => {
        if (skip || !titleRef.current || !numRef.current) return;
        gsap.set(getAnimatedEls(titleRef.current, numRef.current, descRef.current, linksRef.current), { opacity: 0 });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (skip) {
            if (!titleRef.current || !numRef.current) return;
            gsap.set(getAnimatedEls(titleRef.current, numRef.current, descRef.current, linksRef.current),
                { opacity: 1, y: 0, rotation: 0, scale: 1 });
            return;
        }
        if (!inView || played.current || !titleRef.current || !numRef.current) return;
        played.current = true;

        const chars = titleRef.current.querySelectorAll<HTMLElement>(".proj-char");

        const tl = gsap.timeline();
        tl.fromTo(numRef.current,
            { rotation: -180, scale: 0.4, opacity: 0 },
            { rotation: 0, scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.7)" }
        )
        .fromTo(chars,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.035, stagger: 0.028, ease: "power3.out" },
            "-=0.25"
        )
        .fromTo(descRef.current!,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            "-=0.1"
        )
        .fromTo(linksRef.current ?? [],
            { y: 6, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
            "-=0.2"
        );

        return () => { tl.kill(); };
    }, [inView, skip]);

    return (
        <div ref={itemRef} className="projects__item">
            <DrawRule />
            <div className="projects__body">
                <div className="projects__header">
                    <span ref={numRef} className="projects__num">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 ref={titleRef} className="projects__title" aria-label={project.title}>
                        {project.title.split("").map((char, i) =>
                            char === " " ? (
                                <span key={i}>&nbsp;</span>
                            ) : (
                                <span key={i} className="proj-char" style={{ display: "inline-block" }}>{char}</span>
                            )
                        )}
                    </h3>
                </div>
                <p ref={descRef} className="projects__about">{project.about}</p>
                {project.links.length > 0 && (
                    <div ref={linksRef} className="projects__links" aria-label={`${project.title} links`}>
                        {project.links.map((l) => (
                            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="projects__link">
                                {l.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Projects() {
    const reduced    = useReducedMotion();
    const isLoopCopy = useIsLoopCopy();
    const skip       = !!(reduced || isLoopCopy);

    return (
        <section id="projects" className="projects">
            <AnimatedHeading text="Projects" />
            <div className="projects__list">
                {projects.map((p, i) => (
                    <ProjectItem key={p.title} project={p} index={i} skip={skip} />
                ))}
                <DrawRule />
            </div>
        </section>
    );
}
