
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__brand-block">
                    <a className="footer__brand" href="#top">Alpsten</a>
                    <div className="footer__icons">
                        <a href="https://github.com/alpsten" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/emil-alpsten/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer__nav-block">
                    <nav className="footer__nav" aria-label="Footer">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <Link to="/cv">CV</Link>
                    </nav>
                </div>
            </div>

            <div className="footer__bottom container">
                <div className="footer__cause-stack">
                    <a className="footer__cause" href="https://suicidezero.se/stod-oss/" target="_blank" rel="noreferrer">
                        Support Suicide Zero
                    </a>
                </div>
                <p className="footer__copyright">© {year} Emil Alpsten</p>
            </div>
        </footer>
    );
}
