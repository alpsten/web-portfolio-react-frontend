import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticIcon from "../components/MagneticIcon";
import avatar from "../assets/avatar-react-2.webp";
import avatarBack from "../assets/avatar-react-1.webp";

export default function Header() {
    const ref = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const nameY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const metaY = useTransform(scrollYProgress, [0, 1], [0, 30]);

    return (
        <header ref={ref} className="hero container">

            <motion.div className="hero__name-block" style={{ y: nameY }}>
                <motion.div
                    className="hero__portrait-wrap"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 60, damping: 18 }}
                >
                    <div className="hero__coin" aria-label="Portrait of Emil Alpsten">
                        <div className="hero__coin-front">
                            <img src={avatar} alt="Emil Alpsten" draggable={false} />
                        </div>
                        <div className="hero__coin-back">
                            <img src={avatarBack} alt="Emil Alpsten" draggable={false} />
                        </div>
                    </div>
                </motion.div>

                <h1 className="hero__title">
                    <span className="hero__first">Emil</span>
                    <span className="hero__last">Alpsten</span>
                </h1>
            </motion.div>

            <motion.div
                className="hero__rule"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.95, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                style={{ transformOrigin: "0%" }}
            />

            <motion.div className="hero__meta" style={{ y: metaY }}>
                <motion.p
                    className="hero__sub"
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.05, type: "spring", stiffness: 80, damping: 18 }}
                >
                    Software Developer
                </motion.p>
                <motion.p
                    className="hero__sub"
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 80, damping: 18 }}
                >
                    Based in Stockholm
                </motion.p>

                <motion.div
                    className="socials-inline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.35, type: "spring", stiffness: 80, damping: 18 }}
                >
                    <MagneticIcon>
                        <a className="social-icon social-icon--li" href="https://www.linkedin.com/in/emil-alpsten/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    </MagneticIcon>
                    <MagneticIcon>
                        <a className="social-icon social-icon--gh" href="https://github.com/alpsten" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </MagneticIcon>
                    <MagneticIcon>
                        <a className="social-icon social-icon--mail" href="mailto:hello.alpsten@gmail.com" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </MagneticIcon>
                </motion.div>
            </motion.div>

        </header>
    );
}
