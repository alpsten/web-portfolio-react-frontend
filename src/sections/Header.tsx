
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import avatar from "../assets/avatar-react.webp";

export default function Header() {
    return (
        <header className="container hero">
            <div className="hero__grid">

                <figure className="hero__avatar">
                    <img
                        src={avatar}
                        alt="Emil Alpsten"
                        width={160}
                        height={160}
                        loading="lazy"
                        decoding="async"
                    />
                </figure>

                <div className="hero_text">
                    <h1 className="hero__title">Emil Alpsten</h1>

                        <p>
                        <span className="hero__subtitle"></span>Software Developer
                        </p>

                        <p>
                        <span className="hero__subtitle"></span>Based in Stockholm
                        </p>

                    <div className="socials-inline">
                        <a className="social-icon social-icon--li" href="https://www.linkedin.com/in/emil-alpsten/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a className="social-icon social-icon--gh" href="https://github.com/alpsten" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a className="social-icon social-icon--mail" href="mailto:hello.alpsten@gmail.com">
                            <MdEmail />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

