import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Bio() {
    return (
        <section id="about" className="container bio">
            <h2>About Me</h2>
            <div className="bio__grid">
                <div className="bio__content">
                    <p>
                        I’m a software developer based in Stockholm,
                        focused on building backend systems and modern web applications.
                        I primarily work with Java and Spring Boot, as well as Node.js and Express,
                        designing APIs and services with a focus on structure, clarity, and long-term maintainability.
                    </p>
                    <p>
                        I’ve worked with databases using tools like Prisma, MongoDB, and Supabase,
                        and I’m comfortable building full-stack applications with React and TypeScript.
                        My experience also includes handling authentication, payments, and data-heavy interfaces
                        using tools like Clerk, Stripe, and TanStack.
                    </p>
                    <p>
                        I aim to keep systems simple and well-structured, whether that means designing clear APIs,
                        validating data properly, or organizing code so it’s easy to understand and extend.
                    </p>
                    <p>
                        Currently, I’m expanding my knowledge in cloud technologies, Kubernetes, and DevOps.
                    </p>
                    <p>
                        Outside of coding, I enjoy music and spending time with my family.
                    </p>
                    <div className="bio__cta">
                        <Link to="/cv" className="btn btn--outline">
                            <FaFileAlt />
                            View My CV
                        </Link>
                    </div>
                </div>
                <aside className="bio__sidebar">
                    <div className="bubble">
                        <h3 className="funfact__title">Fun facts about me</h3>
                        <ul className="funfact__list">
                            <li>10km swim: 2:52:32</li>
                            <li>Terraforming Mars fan</li>
                            <li>Hip-hop enthusiast</li>
                            <li>Bucket list: Tokyo</li>
                            <li>Science fiction nerd</li>
                            <li>Former Apple specialist</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
}
