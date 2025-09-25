
import './App.css';

import Header from "./sections/Header";
import ContactForm from './components/ContactForm';

export default function App() {
    return (

        <main className="site">

            <Header/>
            <ContactForm/>

            <footer className="footer container">
                <small className="muted">Made by Emil Forsberg</small>
            </footer>

        </main>
    );
}
