import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Bio() {
    return (
        <section id="about" className="container bio">
            <h2>About Me</h2>
            <div className="bio__grid">
                <div className="bio__content">
                    <p>
                        I'm a passionate software developer based in Stockholm with a strong interest in
                        building robust backend systems and web applications. My journey in software
                        development has led me to explore various technologies, from Spring Boot and
                        microservices to modern frontend frameworks like React.
                    </p>
                    <p>
                        Currently, I'm expanding my knowledge in cloud technologies, Kubernetes, and
                        DevOps practices. I believe in writing clean, maintainable code and continuously
                        learning new tools and methodologies to deliver better solutions.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new music, contributing to
                        open-source projects, or diving into the latest tech trends.
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
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
}
