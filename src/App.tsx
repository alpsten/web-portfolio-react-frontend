
import Header from "./sections/Header";
import Expertise from "./sections/Expertise";
import ContactForm from './components/ContactForm';
import FunFact from "./sections/FunFact.tsx";

export default function App() {
    return (

        <main className="site">

            <Header/>
            <Expertise/>
            <ContactForm/>
            <FunFact/>

            <footer className="footer container">
                <small className="muted">Made by Emil Forsberg</small>
            </footer>

        </main>
    );
}
