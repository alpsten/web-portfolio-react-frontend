import { useState, useRef, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { FaPaperPlane } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";
import { useIsLoopCopy } from "../context/LoopCopy";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError]         = useState<string | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const played       = useRef(false);
    const reduced      = useReducedMotion();
    const isLoopCopy   = useIsLoopCopy();
    const inView       = useInView(containerRef, { once: true, amount: 0.15 });

    useEffect(() => {
        if (!inView || reduced || isLoopCopy || played.current || !containerRef.current) return;
        played.current = true;

        const fields  = containerRef.current.querySelectorAll<HTMLElement>(".contact__field");
        const actions = containerRef.current.querySelector<HTMLElement>(".contact__actions");

        gsap.from(fields, {
            y: 16,
            opacity: 0,
            duration: 0.4,
            stagger: 0.07,
            ease: "power2.out",
            delay: 0.2,
        });
        if (actions) {
            gsap.from(actions, {
                y: 10,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                delay: 0.2 + fields.length * 0.07,
            });
        }
    }, [inView, reduced, isLoopCopy]);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        const form = e.currentTarget;
        if (!form.reportValidity()) return;

        const payload = Object.fromEntries(new FormData(form).entries());

        try {
            const base = import.meta.env.VITE_API_BASE ?? "http://localhost:8080";
            const res  = await fetch(`${base}/api/contact`, {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify(payload),
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            form.reset();
            setSubmitted(true);
        } catch {
            setError("Could not send message. Please try again later.");
        }
    }

    return (
        <section id="contact" className="contact">
            <AnimatedHeading text="Contact Me" />
            <p className="contact__sub muted">
                Working on something that's ready to take off? I'd love to hear about it.
            </p>

            {submitted ? (
                <div className="contact__success">
                    <span className="contact__success-icon" aria-hidden="true">✓</span>
                    Perfect. I'll get in touch as fast as I can.
                </div>
            ) : (
                <div ref={containerRef}>
                    <form className="contact__form" onSubmit={onSubmit} noValidate>
                        <div className="contact__row">
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="firstName">
                                    First name <span className="contact__req">*</span>
                                </label>
                                <input
                                    className="contact__input"
                                    id="firstName" name="firstName"
                                    autoComplete="given-name"
                                    placeholder="Your first name"
                                    required
                                />
                            </div>
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="lastName">
                                    Last name <span className="contact__req">*</span>
                                </label>
                                <input
                                    className="contact__input"
                                    id="lastName" name="lastName"
                                    autoComplete="family-name"
                                    placeholder="Your last name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact__row">
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="email">
                                    Email <span className="contact__req">*</span>
                                </label>
                                <input
                                    className="contact__input"
                                    id="email" name="email"
                                    type="email" autoComplete="email"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="contact__field">
                                <label className="contact__label" htmlFor="phoneNumber">
                                    Phone <span className="contact__opt">(optional)</span>
                                </label>
                                <input
                                    className="contact__input"
                                    id="phoneNumber" name="phoneNumber"
                                    type="tel" autoComplete="tel"
                                    placeholder="+46 70 123 45 67"
                                />
                            </div>
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="message">
                                Message <span className="contact__req">*</span>
                            </label>
                            <textarea
                                className="contact__input contact__textarea"
                                id="message" name="message"
                                rows={6}
                                placeholder="Project idea? Need help? Just say hi."
                                required
                            />
                        </div>

                        {error && <p className="contact__error">{error}</p>}

                        <div className="contact__actions">
                            <button className="contact__submit" type="submit">
                                Send message
                                <FaPaperPlane className="contact__submit-icon" aria-hidden="true" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </section>
    );
}
