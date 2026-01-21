
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (

        <footer className="footer container">
            <div className="footer__icons">
                <a href="https://github.com/alpsten" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/emil-alpsten/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>

            <div className="footer__note">
                <p className="muted">Every suicide is one too many.</p>
                <a className="footer__link" href="https://suicidezero.se/stod-oss/" target="_blank" rel="noreferrer">
                    Suicide Zero
                </a>
            </div>

        </footer>

    );
}
