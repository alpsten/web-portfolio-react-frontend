import { motion, useReducedMotion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import AnimatedHeading from "../components/AnimatedHeading";
import DrawRule from "../components/DrawRule";

const tracks = [
    {
        title: "Classic 90's Hip-Hop",
        href: "https://open.spotify.com/playlist/5td6CvJEk8lR4kMFNfYrJj?utm_source=generator",
        desc: "Some of my favorite hip-hop tracks strictly from the 90's — and some of the best songs of all time.",
    },
    {
        title: "Volume Alpha",
        href: "https://open.spotify.com/album/1TtdtRpeNYliHviOnhWdL7?si=LuCb38ILSoypsurnwhypKA",
        desc: "One of those rare albums that feels nostalgic, calming, and deeply inspiring no matter how many times I listen.",
    },
    {
        title: "Surviving Mars",
        href: "https://open.spotify.com/album/1nbjCCws7cO9kovVBn7Wo8?si=niRJ3eMZQg2PJPYhVArkaw",
        desc: "This soundtrack by George Strezov is exceptional. I've listened to it on repeat, despite never having played the game.",
    },
];

export default function SpotifySection() {
    const reduced = useReducedMotion();

    return (
        <section id="music" className="spotify">
            <AnimatedHeading text="Music" />
            <div className="spotify__list">
                {tracks.map((t, i) => (
                    <motion.div
                        key={t.title}
                        className="spotify__item"
                        initial={reduced ? false : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 55, damping: 20, delay: i * 0.09 }}
                    >
                        <DrawRule />
                        <div className="spotify__body">
                            <div className="spotify__header">
                                <span className="spotify__num">0{i + 1}</span>
                                <FaSpotify className="spotify__icon" aria-hidden="true" />
                                <h3 className="spotify__title">
                                    <a
                                        className="spotify__link"
                                        href={t.href}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {t.title}
                                    </a>
                                </h3>
                            </div>
                            <p className="spotify__desc">{t.desc}</p>
                        </div>
                    </motion.div>
                ))}
                <DrawRule />
            </div>
        </section>
    );
}
