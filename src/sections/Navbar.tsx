
import {BsHexagonFill} from "react-icons/bs";
import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";

const LINKS = [
    { href: "#about",     label: "About"     },
    { href: "#expertise", label: "Expertise" },
    { href: "#projects",  label: "Projects"  },
    { href: "#spotify",   label: "Spotify"   },
    { href: "#contact",   label: "Contact"   },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar__inner container">

                <a className="brand" href="#top" aria-label="Go to top">
                    <BsHexagonFill className="brand__icon" aria-hidden="true" />
                    <span className="brand__text" aria-hidden="true">EF</span>
                </a>

                <ul className={`navbar__menu ${open ? "is-open" : ""}`}>
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} onClick={handleClick}>{l.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
                    <ThemeToggle />
                    <button
                        className="navbar__toggle"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        <span className="navbar__burger" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
