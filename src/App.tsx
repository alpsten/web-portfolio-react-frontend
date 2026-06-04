import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar.tsx";
import Header from "./sections/Header";
import Bio from "./sections/Bio";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import SpotifySection from "./sections/SpotifySection.tsx";
import ContactForm from './components/ContactForm';
import Footer from "./sections/Footer.tsx";
import SectionCard from "./components/SectionCard";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import { useLenis } from "./hooks/useLenis";
import { LoopCopyContext } from "./context/LoopCopy";

const CV = lazy(() => import("./pages/CV"));

function SiteSections() {
    return (
        <>
            <div className="slide slide--hero">
                <Header />
            </div>
            <SectionCard><Bio /></SectionCard>
            <SectionCard><Expertise /></SectionCard>
            <SectionCard><Projects /></SectionCard>
            <SectionCard><SpotifySection /></SectionCard>
            <SectionCard after={<Footer />}><ContactForm /></SectionCard>
        </>
    );
}

function Home() {
    useLenis();

    return (
        <>
            <Cursor />
            <ScrollProgress />
            <div className="bg" aria-hidden="true" />
            <div className="grain" aria-hidden="true" />
            <Navbar />
            <main className="site">
                <div id="loop-cycle">
                    <SiteSections />
                </div>
                <LoopCopyContext.Provider value={true}>
                    <div aria-hidden="true">
                        <SiteSections />
                    </div>
                </LoopCopyContext.Provider>
            </main>
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cv" element={<Suspense fallback={null}><CV /></Suspense>} />
            </Routes>
        </BrowserRouter>
    );
}
