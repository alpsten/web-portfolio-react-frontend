
import Header from "./sections/Header";
import Expertise from "./sections/Expertise";
import ContactForm from './components/ContactForm';

export default function App() {
    return (

        <main className="site">

            <Header/>
            <Expertise/>
            <ContactForm/>

            <footer className="footer container">
                <small className="muted">Made by Emil Forsberg</small>
            </footer>

        </main>
    );
}
