
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import avatar from "../assets/avatar-react.webp";

export default function Header() {
    return (
        <header className="container hero">
            <div className="hero__grid">
                <figure className="hero__avatar">
                    <div className="hero__orbits" aria-hidden="true">
                        <span className="hero__orbit hero__orbit--one">
                            <span className="hero__planet hero__planet--one" />
                        </span>
                        <span className="hero__orbit hero__orbit--two">
                            <span className="hero__planet hero__planet--two" />
                        </span>
                        <span className="hero__orbit hero__orbit--three">
                            <span className="hero__planet hero__planet--three" />
                        </span>
                    </div>

                    <div className="hero__wave" aria-hidden="true" />

                    <div className="hero__avatar-shell">
                        <img
                            src={avatar}
                            alt="Emil Alpsten"
                            width={160}
                            height={160}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </figure>

                <div className="hero__text">
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
