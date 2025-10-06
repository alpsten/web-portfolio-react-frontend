
type Project = {
    title: string;
    description: string;
    links: { label: string; href: string }[];
    image?: string;
};

import puzzleImg from "../assets/projects/fifteen-puzzle.webp";
import siteImg   from "../assets/projects/fakestore-api.webp";

const projects: Project[] = [
    {
        title: "Fifteen Puzzle (Java)",
        description: "Classic sliding 15-puzzle implemented in Java.",
        links: [
            { label: "GitHub", href: "https://github.com/EmilForzberg/fifteen-puzzle" }],
        image: puzzleImg,
    },
    {
        title: "Fakestore Shop",
        description:
            "Simple 'fakestore' built in Bootstrap with Fakestore API.",
        links: [
            { label: "Fakestore API", href: "https://fakestoreapi.com" },
            { label: "GitHub", href: "https://github.com/EmilForzberg/fakstore-api}"},
            { label: "Website", href: "https://emilforzberg.github.io" }
        ],
        image: siteImg
    },
];

export default function Projects() {
    return (
        <section id="projects" className="container projects">
            <h2>Projects</h2>
            <div className="projects__grid">
                {projects.map((p) => (
                    <article key={p.title} className="project">

                        {p.image && (
                            <div className="project__cover">
                                <img
                                    src={p.image}
                                    alt={`${p.title} cover`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        )}

                        <h3 className="project__title">{p.title}</h3>
                        <p className="muted">{p.description}</p>

                        <div className="project__links">
                            {p.links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn--ghost"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>

                    </article>
                ))}
            </div>
        </section>
    );
}
