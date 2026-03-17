
import { FaSpotify } from "react-icons/fa";

export default function SpotifySection() {
    return (
        <section id="spotify" className="container spotify">
            <h2>Currently Listening</h2>
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
                                href="https://open.spotify.com/album/1nbjCCws7cO9kovVBn7Wo8?si=niRJ3eMZQg2PJPYhVArkaw"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Surviving Mars (Soundtrack)
                            </a>
                        </h3>
                    </div>
                    <p className="spotify__description">
                        This soundtrack composed by George Strezov is truly unbelievable. I have listened to it countless times.
                    </p>
                </article>
            </div>
        </section>
    );
}
