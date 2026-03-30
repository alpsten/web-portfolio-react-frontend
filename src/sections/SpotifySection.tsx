
import { FaSpotify } from "react-icons/fa";

export default function SpotifySection() {
    return (
        <section id="music" className="container spotify">
            <h2>Music</h2>
            <div className="spotify__grid">
                <article className="spotify__card">
                    <div className="spotify__card-head">
                        <FaSpotify className="spotify__icon" aria-hidden="true" />
                        <h3 className="spotify__title">
                            <a
                                className="spotify__title-link"
                                href="https://open.spotify.com/playlist/5td6CvJEk8lR4kMFNfYrJj?utm_source=generator"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Classic 90&apos;s Hip-Hop
                            </a>
                        </h3>
                    </div>
                    <p className="spotify__description">
                        These are some of my favorite hip-hop tracks strictly from the 90&apos;s and some of the best songs of all time.
                    </p>
                </article>

                <article className="spotify__card">
                    <div className="spotify__card-head">
                        <FaSpotify className="spotify__icon" aria-hidden="true" />
                        <h3 className="spotify__title">
                            <a
                                className="spotify__title-link"
                                href="https://open.spotify.com/album/1TtdtRpeNYliHviOnhWdL7?si=LuCb38ILSoypsurnwhypKA"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Minecraft - Volume Alpha
                            </a>
                        </h3>
                    </div>
                    <p className="spotify__description">
                        One of those soundtracks that evokes a strong sense of nostalgia and immerses the listener in another world, such as Minecraft - Volume Alpha by C418.
                    </p>
                </article>

                <article className="spotify__card">
                    <div className="spotify__card-head">
                        <FaSpotify className="spotify__icon" aria-hidden="true" />
                        <h3 className="spotify__title">
                            <a
                                className="spotify__title-link"
                                href="https://open.spotify.com/album/1nbjCCws7cO9kovVBn7Wo8?si=niRJ3eMZQg2PJPYhVArkaw"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Surviving Mars
                            </a>
                        </h3>
                    </div>
                    <p className="spotify__description">
                        This soundtrack, composed by George Strezov, is exceptional. I have listened to it repeatedly, despite not having played the game itself.
                    </p>
                </article>
            </div>
        </section>
    );
}
