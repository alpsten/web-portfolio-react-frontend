
type Project = {
    title: string;
    description: string;
    links: { label: string; href: string }[];
    highlights: string[];
};

const projects: Project[] = [
    {
        title: "Fifteen Puzzle (Java)",
        description: "Classic sliding 15-puzzle implemented in Java.",
        highlights: [
            "Built in Java with focus on core logic and clean structure.",
            "Simple game implementation with a clear repository-first presentation.",
        ],
        links: [
            { label: "GitHub Repository", href: "https://github.com/alpsten/fifteen-puzzle" },
            { label: "Website", href: "https://alpsten.github.io/fifteen-puzzle/" },
        ],
    },
    {
        title: "Fakestore Shop",
        description: "A simple storefront built against the Fakestore API.",
        highlights: [
            "Frontend project focused on layout, API integration, and product flow.",
            "Built as a lightweight web experience with clear external links.",
        ],
        links: [
            { label: "GitHub Repository", href: "https://github.com/alpsten/fakestore-api" },
            { label: "Website", href: "https://emilforzberg.github.io" },
            { label: "Fakestore API", href: "https://fakestoreapi.com" }
        ]
    },
];

export default function Projects() {
    return (
        <section id="projects" className="container projects">
            <h2>Projects</h2>
            <div className="projects__grid">
                {projects.map((p) => (
                    <article key={p.title} className="project">
                        <h3 className="project__title">{p.title}</h3>
                        <p className="muted">{p.description}</p>
                        <ul className="project__highlights">
                            {p.highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <div className="project__links" aria-label={`${p.title} links`}>
                            {p.links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project__link"
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
