
import Navbar from "./sections/Navbar.tsx";
import Header from "./sections/Header";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import SpotifySection from "./sections/SpotifySection.tsx";
import ContactForm from './components/ContactForm';
import FunFact from "./sections/FunFact.tsx";
import Footer from "./sections/Footer.tsx";

export default function App() {
    return (

        <main className="site">

            <Navbar />
            <Header/>
            <Expertise/>
            <Projects/>
            <SpotifySection/>
            <ContactForm/>
            <FunFact/>
            <Footer/>

        </main>
    );
}
