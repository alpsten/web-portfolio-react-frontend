import {FaApple, FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import avatar from "../assets/avatar-react.webp";

export default function Header() {
    return (
        <header className="container hero">
            <div className="hero__grid">

                <figure className="hero__avatar">
                    <img
                        src={avatar}
                        alt="*this is me not loading*"
                        width={160}
                        height={160}
                        loading="lazy"
                        decoding="async"
                    />
                </figure>

                <div className="hero_text">
                    <h1 className="hero__title">Emil Forsberg</h1>

                        <p>
                        <span className="hero__subtitle"></span>Java Developer on Mac <FaApple aria-label="Apple" />
                        </p>

                        <p>
                        <span className="hero__subtitle"></span>Based in Stockholm
                        </p>

                <div className="socials-inline">

                    <a className="social" href="https://www.linkedin.com/in/forsberg-emil/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={16} /> LinkedIn
                    </a>

                    <a className="social" href="https://github.com/EmilForzberg" target="_blank" rel="noreferrer">
                        <FaGithub size={16} /> GitHub
                    </a>

                    <a className="social" href="mailto:hello.emilforsberg.com">
                        <MdEmail size={16} /> Email
                    </a>
                </div>
                </div>
            </div>
        </header>
    );
}

