
import { FaDatabase, FaReact, FaServer, FaWrench } from "react-icons/fa";

type Bucket = {
    title: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    text: string;
    stack: string[];
};

export default function Expertise() {
    const buckets: Bucket[] = [
        {
            title: "Backend",
            Icon: FaServer,
            text: "Core backend technologies I work with most. I focus on building structured services, clear APIs, and systems that stay maintainable as they grow.",
            stack: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "and more..."],
        },
        {
            title: "Frontend",
            Icon: FaReact,
            text: "Frontend tools I use to build responsive interfaces. I care about usability, clean component structure, and connecting the UI to real application logic in a straightforward way.",
            stack: ["React", "TypeScript", "JavaScript", "HTML", "Tailwind", "and more..."],
        },
        {
            title: "Data",
            Icon: FaDatabase,
            text: "Data and integration tools I use in real projects. That includes working with validation, persistence, and external services so the data flow remains reliable end to end.",
            stack: ["Prisma", "MongoDB", "MySQL", "Supabase", "Zod", "and more..."],
        },
        {
            title: "Tooling",
            Icon: FaWrench,
            text: "Tools and libraries I rely on for delivery and product work. I use them to keep development practical, reduce friction, and ship features with a steady workflow.",
            stack: ["Git", "Vite", "Bun", "TanStack Query", "Stripe SDK", "and more..."],
        },
    ];

    return (
        <section id="expertise" className="container expertise">
            <h2>Expertise</h2>
            <div className="cards">
                {buckets.map(({ title, Icon, text, stack }) => (
                    <article key={title} className="card">
                        <div className="card-head">
                            <Icon size={32} className="icon" />
                            <h3>{title}</h3>
                        </div>
                        <p className="muted">{text}</p>
                        <div className="pills">
                            {stack.map((t) => (
                                <span className="pill" key={t}>{t}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
