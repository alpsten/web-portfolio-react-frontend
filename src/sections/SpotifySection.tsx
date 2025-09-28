
export default function SpotifySection() {
    return (
        <section id="spotify" className="container spotify">

            <h2>Currently Listening</h2>
            <p className="muted">Currently on while coding.</p>

            <div className="player-wrap player-wrap--bleed">
                <iframe
                    title="Spotify Playlist"
                    style={{ borderRadius: 12 }}
                    src="https://open.spotify.com/embed/playlist/5td6CvJEk8lR4kMFNfYrJj?utm_source=generator"
                    width="100%"
                    height={352}
                    frameBorder={0}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
                <p className="muted">Some hip-hop favorites of mine from the early to late 90's.</p>
                <p className="muted">Cover photo by; @abushihabmarey (from Unsplash.com).</p>
            </div>

        </section>
    );
}