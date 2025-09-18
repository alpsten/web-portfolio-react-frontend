
import './App.css';
import ContactForm from './components/ContactForm';

export default function App() {
    return (
        <div style={{ maxWidth: 900, margin: '0 auto', padding: 16 }}>
            <header style={{ marginBottom: 24 }}>
                <h1>Emil Forsberg — Portfolio</h1>
                <p>Java Developer at Nackademin. Check my projects and get in touch below.</p>
            </header>

            <section>
                <h2>Contact me</h2>
                <ContactForm />
            </section>
        </div>
    );
}
