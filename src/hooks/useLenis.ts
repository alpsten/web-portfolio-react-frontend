import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Official Lenis + GSAP integration: drive Lenis from the GSAP ticker
        // so ScrollTrigger and Lenis stay in perfect sync on the same frame
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        lenis.on("scroll", ScrollTrigger.update);

        // Cache cycleHeight to avoid layout thrash on every scroll event
        let cycleHeight = 0;
        const measureCycle = () => {
            const cycle = document.getElementById("loop-cycle");
            if (cycle) cycleHeight = cycle.offsetHeight;
        };
        measureCycle();
        window.addEventListener("resize", measureCycle);

        // Frame lock: suppress the scroll event fired in the same frame as the jump
        let jumping = false;

        lenis.on("scroll", ({ scroll }: { scroll: number }) => {
            if (jumping) return;
            if (cycleHeight > 0 && scroll >= cycleHeight) {
                jumping = true;
                lenis.scrollTo(scroll - cycleHeight, { immediate: true });
                requestAnimationFrame(() => { jumping = false; });
            }
        });

        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
            window.removeEventListener("resize", measureCycle);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);
}
