import { useState } from "react";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;

        if (!form.reportValidity()) return;

        const data = new FormData(form);
        const payload = Object.fromEntries(data.entries());

        try {
            const base = import.meta.env.VITE_API_BASE ?? "http://localhost:8080";
            const res = await fetch(`${base}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            form.reset();
            setSubmitted(true);
        } catch (err) {
            alert("Could not send message. Please try again later.");
        }
    }

    return (
        <section id="contact" className="container contact">
            <h2>Contact Me</h2>
            <p className="muted">Working on an idea that’s ready to take off? I’d love to collaborate.</p>

            {submitted ? (
                <div className="success">Thanks! I'll get back to you shortly.</div>
            ) : (
                <form className="contact__form" onSubmit={onSubmit} noValidate>
                    <div className="grid-2">
                        <div className="field">
                            <label className="label" htmlFor="firstName">First name <span className="req">*</span></label>
                            <input className="form__input" id="firstName" name="firstName" autoComplete="given-name" placeholder="Your first name" required />
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="lastName">Last name <span className="req">*</span></label>
                            <input className="form__input" id="lastName" name="lastName" autoComplete="family-name" placeholder="Your last name" required />
                        </div>
                    </div>

                    <div className="grid-2">
                        <div className="field">
                            <label className="label" htmlFor="email">Email <span className="req">*</span></label>
                            <input className="form__input" id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="phone">Phone (optional)</label>
                            <input className="form__input" id="phoneNumber" name="phoneNumber" type="tel" autoComplete="tel" placeholder="(+46) 70 123 45 67" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="message">Message <span className="req">*</span></label>
                        <textarea className="form__textarea" id="message" name="message" rows={8} placeholder="What's on your mind? Project idea? Need help? Reach out." required />
                    </div>

                    <div className="actions">
                        <button className="btn" type="submit" aria-label="Send message">SEND <span className="arrow" aria-hidden>➤</span></button>
                    </div>
                </form>
            )}
        </section>
    );
}
