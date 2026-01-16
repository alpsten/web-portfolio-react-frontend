
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar.tsx";
import Header from "./sections/Header";
import Bio from "./sections/Bio";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import SpotifySection from "./sections/SpotifySection.tsx";
import ContactForm from './components/ContactForm';
import Footer from "./sections/Footer.tsx";
import FadeIn from "./components/FadeIn";
import CV from "./pages/CV";

function Home() {
    return (
        <main className="site">
            <Navbar />
            <FadeIn>
                <Header/>
            </FadeIn>
            <FadeIn delay={100}>
                <Bio/>
            </FadeIn>
            <FadeIn delay={150}>
                <Expertise/>
            </FadeIn>
            <FadeIn>
                <Projects/>
            </FadeIn>
            <FadeIn>
                <SpotifySection/>
            </FadeIn>
            <FadeIn>
                <ContactForm/>
            </FadeIn>
            <Footer/>
        </main>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<CV />} />
            </Routes>
        </BrowserRouter>
    );
}
