import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomChar() {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface ScrambleTextProps {
    text: string;
    delay?: number;
    speed?: number;
    trigger?: boolean;
}

export default function ScrambleText({ text, delay = 0, speed = 38, trigger }: ScrambleTextProps) {
    const [display, setDisplay] = useState(() =>
        text.split("").map((c) => (c === " " ? " " : randomChar())).join("")
    );

    useEffect(() => {
        if (trigger === false) return;

        let progress = 0;
        let rafId: number;
        let startTime: number | null = null;

        const timeout = setTimeout(() => {
            const step = (ts: number) => {
                if (!startTime) startTime = ts;
                progress = Math.floor((ts - startTime) / speed);

                setDisplay(
                    text.split("").map((char, i) => {
                        if (char === " ") return " ";
                        if (i < progress) return char;
                        return randomChar();
                    }).join("")
                );

                if (progress < text.length) {
                    rafId = requestAnimationFrame(step);
                } else {
                    setDisplay(text);
                }
            };
            rafId = requestAnimationFrame(step);
        }, delay);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(rafId);
        };
    }, [text, delay, speed, trigger]);

    return <span aria-label={text} aria-live="off">{display}</span>;
}
