
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

                    <div className="social-icons">
                        <a className="social-icon social-icon--li" href="https://www.linkedin.com/in/forsberg-emil/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a className="social-icon social-icon--gh" href="https://github.com/EmilForzberg" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a className="social-icon social-icon--mail" href="mailto:hello@emilforsberg.com">
                            <MdEmail />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

