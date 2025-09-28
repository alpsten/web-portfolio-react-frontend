
import {FaJava, FaReact, FaDocker, FaDatabase} from "react-icons/fa";

type Bucket = {
    title: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    text: string;
    stack: string[];
};

export default function Expertise() {
    const buckets: Bucket[] = [
        {
            title: "Java Developer",
            Icon: FaJava,
            text: "I code in Java and develop web/app solutions.",
            stack: ["Java", "Spring Boot", "REST", "JPA/Hibernate"],
        },
        {
            title: "Databases",
            Icon: FaDatabase,
            text: "I can work with different databases.",
            stack: ["MySQL", "MongoDB", "PostgresSQ"],
        },
        {
            title: "React",
            Icon: FaReact,
            text: "I build clean, robust web apps with a user-friendly interface.",
            stack: ["React", "TypeScript", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
        },
        {
            title: "DevOps",
            Icon: FaDocker,
            text: "I set up simple CI/CD pipelines and containerized apps.",
            stack: ["Docker", "GitHub Actions", "Git"],
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
