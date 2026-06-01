
import { useState, useEffect } from "react";

const LINKS = [
    { href: "#about",     label: "About"     },
    { href: "#expertise", label: "Expertise" },
    { href: "#projects",  label: "Projects"  },
    { href: "#music",     label: "Music"     },
    { href: "#contact",   label: "Contact"   },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [atHero, setAtHero] = useState(true);

    useEffect(() => {
        let cycleH = 0;
        const measureCycle = () => {
            const el = document.getElementById("loop-cycle");
            if (el) cycleH = el.offsetHeight;
        };
        measureCycle();
        window.addEventListener("resize", measureCycle);

        const onScroll = () => {
            const scrollInCycle = cycleH > 0 ? window.scrollY % cycleH : window.scrollY;
            setAtHero(scrollInCycle < window.innerHeight * 0.6);
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", measureCycle);
        };
    }, []);

    function handleClick() {
        setOpen(false);
    }

    return (
        <nav className={`navbar ${atHero ? "navbar--hero" : ""}`}>
            <div className="navbar__inner container">

                <ul className={`navbar__menu ${open ? "is-open" : ""}`}>
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} onClick={handleClick}>{l.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
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
