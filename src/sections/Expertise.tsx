
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
            text: "I work mainly with Java to build web and application solutions.",
            stack: ["Java", "Spring Boot", "JPA/Hibernate", "REST API", "Unit Testing", "Microservices"],
        },
        {
            title: "Databases",
            Icon: FaDatabase,
            text: "I enjoy working with databases and keep learning how to structure data effectively.",
            stack: ["MySQL", "MongoDB", "PostgresSQ", "Spring Security", "Query Optimization"],
        },
        {
            title: "React",
            Icon: FaReact,
            text: "I focus on writing maintainable code and creating applications that are easy to use.",
            stack: ["React", "TypeScript", "JavaScript", "Responsive Design", "SPA"],
        },
        {
            title: "DevOps",
            Icon: FaDocker,
            text: "I’ve started setting up CI/CD pipelines and containerizing apps to make projects run smoothly.",
            stack: ["Docker", "GitHub Actions", "Git", "CI/CD"],
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
