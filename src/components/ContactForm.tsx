
import { useState } from 'react';

export default function ContactForm() {
    const [firstName, setFirstName]   = useState('');
    const [lastName, setLastName]     = useState('');
    const [phoneNumber, setPhone]     = useState('');
    const [email, setEmail]           = useState('');
    const [message, setMessage]       = useState('');
    const [loading, setLoading]       = useState(false);
    const [status, setStatus]         = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true); setStatus(null);

        try {
            const base = import.meta.env.VITE_API_BASE_URL;
            const res = await fetch(`${base}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastName, phoneNumber, email, message }),
            });
            if (res.ok) {
                setStatus('Sent!');
                setFirstName(''); setLastName(''); setPhone(''); setEmail(''); setMessage('');
            } else {
                setStatus('Failed to send.');
            }
        } catch {
            setStatus('Network error.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 520 }}>

            <label>First name
                <input value={firstName} onChange={e => setFirstName(e.target.value)} required />
            </label>

            <label>Last name
                <input value={lastName} onChange={e => setLastName(e.target.value)} required />
            </label>

            <label>Phone (optional)
                <input value={phoneNumber} onChange={e => setPhone(e.target.value)} />
            </label>

            <label>Email
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </label>

            <label>Message
                <textarea rows={5} value={message} onChange={e => setMessage(e.target.value)} required />
            </label>

            <button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send'}</button>
            {status && <p>{status}</p>}

        </form>
    );
}
