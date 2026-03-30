
type Project = {
    title: string;
    about: string;
    links: { label: string; href: string }[];
};

const projects: Project[] = [
    {
        title: "This Website",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/web-portfolio-react-frontend" },
        ],
        about: "A personal portfolio showcasing my projects, experience, and technical background, with a focus on backend development, APIs, and modern web applications.",
    },
    {
        title: "Fifteen Puzzle",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/fifteen-puzzle" },
            { label: "Website", href: "https://alpsten.github.io/fifteen-puzzle/" },
        ],
        about: "A polished 15-puzzle with both a Java desktop version and a TypeScript web version. Slide the tiles into order on a 4x4 board, play locally, or share it online through GitHub Pages. Good luck!",
    },
    {
        title: "Daycare For Animals",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/daycare-for-animals" },
            { label: "Website", href: "https://alpsten.github.io/daycare-for-animals/" },
        ],
        about: "A polished continuation of a school project: an animal daycare reception app with a Java core, local CLI, API layer, and TypeScript frontend. Feel free to try it out.",
    },
    {
        title: "Fakestore API",
        links: [
            { label: "GitHub", href: "https://github.com/alpsten/fakestore-api" },
            { label: "Website", href: "https://emilforzberg.github.io" },
            { label: "Fakestore API", href: "https://fakestoreapi.com" },
        ],
        about: "Still currently polishing a continuation of a school assignment.",
    },
    {
        title: "1001 Songs for Majken",
        links: [],
        about: "Currently working on a project called 1001 Songs for Majken which is my long-term digital mixtape for my daughter: a personal archive of songs, artists, albums, and the meanings they carry.",
    },
    {
        title: "Secret Project",
        links: [],
        about: "Currently working on.",
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
                        <p className="muted">{p.about}</p>
                        {p.links.length > 0 && (
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
                        )}

                    </article>
                ))}
            </div>
        </section>
    );
}
