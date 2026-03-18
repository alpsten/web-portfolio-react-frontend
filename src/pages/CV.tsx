import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cvData } from "../data/cvData";
import { FaChevronDown, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import avatar from "../assets/avatar-react.webp";

type Lang = "sv" | "en";

interface ExpandableSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

function ExpandableSection({ title, children, defaultOpen = false }: ExpandableSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`cv-section ${isOpen ? "is-open" : ""}`}>
            <button
                className="cv-section__header"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h2 className="cv-section__title">{title}</h2>
                <FaChevronDown className="cv-section__icon" />
            </button>
            <div className="cv-section__content">
                {children}
            </div>
        </div>
    );
}

export default function CV() {
    const [lang, setLang] = useState<Lang>("sv");
    const { name, contact, references } = cvData;
    const content = cvData[lang];
    const { title, profile, skills, languages, education, experience, labels } = content;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <div className="cv-page">
            <div className="cv-container">
                {/* Language Toggle */}
                <div className="cv-lang-toggle no-print">
                    <Link to="/" className="cv-back-link">
                        <FaArrowLeft /> {labels.backToPortfolio}
                    </Link>
                    <div className="cv-lang-buttons">
                        <button
                            className={`cv-lang-btn ${lang === "sv" ? "is-active" : ""}`}
                            onClick={() => setLang("sv")}
                        >
                            SV
                        </button>
                        <button
                            className={`cv-lang-btn ${lang === "en" ? "is-active" : ""}`}
                            onClick={() => setLang("en")}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <div className="cv-divider cv-divider--header" aria-hidden="true" />

                {/* Header */}
                <header className="cv-header">
                    <h1 className="cv-name">{name}</h1>
                    <p className="cv-title">{title}</p>
                </header>

                {/* Contact Section with Headshot */}
                <div className="cv-contact-section">
                    <div className="cv-headshot">
                        <img src={avatar} alt={name} />
                    </div>
                    <ul className="cv-contact-list">
                        <li>
                            <FaPhone />
                            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                        </li>
                        {contact.emails.map((email) => (
                            <li key={email}>
                                <FaEnvelope />
                                <a href={`mailto:${email}`}>{email}</a>
                            </li>
                        ))}
                        <li>
                            <FaLinkedin />
                            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">
                                {contact.linkedin}
                            </a>
                        </li>
                        <li>
                            <FaGithub />
                            <a href={`https://${contact.github}`} target="_blank" rel="noreferrer">
                                {contact.github}
                            </a>
                        </li>
                        <li>
                            <FaMapMarkerAlt />
                            <span>{contact.location}</span>
                        </li>
                    </ul>
                </div>

                {/* Profile */}
                <ExpandableSection title={labels.profile} defaultOpen={true}>
                    <p className="cv-profile">{profile}</p>
                </ExpandableSection>

                {/* Education */}
                <ExpandableSection title={labels.education}>
                    <div className="cv-education">
                        {education.map((edu, index) => (
                            <article key={index} className="cv-education__item">
                                <div className="cv-education__header">
                                    <div>
                                        <h3 className="cv-education__institution">{edu.institution}</h3>
                                        <p className="cv-education__degree">{edu.degree}</p>
                                    </div>
                                    <span className="cv-education__period">{edu.period}</span>
                                </div>
                                {edu.courses && (
                                    <div className="cv-education__courses">
                                        <div className="cv-education__courses-head">
                                            <span>{labels.course}</span>
                                            <span>{labels.yhPoints}</span>
                                        </div>
                                        <ul className="cv-education__courses-list">
                                            {edu.courses.map((course) => (
                                                <li key={course.name} className="cv-education__course-row">
                                                    <span>{course.name}</span>
                                                    <span>{course.points}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </ExpandableSection>

                {/* Experience */}
                <ExpandableSection title={labels.experience}>
                    <div className="cv-experience">
                        {experience.map((exp, index) => (
                            <article key={index} className="cv-experience__item">
                                <div className="cv-experience__header">
                                    <div>
                                        <h3 className="cv-experience__company">
                                            {exp.company}
                                            {exp.subtitle && <span className="cv-experience__subtitle"> {exp.subtitle}</span>}
                                        </h3>
                                        <p className="cv-experience__role">{exp.role}</p>
                                    </div>
                                    <span className="cv-experience__period">{exp.period}</span>
                                </div>
                                <ul className="cv-experience__description">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </ExpandableSection>

                {/* Skills */}
                <ExpandableSection title={labels.skills}>
                    <div className="cv-skills">
                        {skills.map((skill, index) => (
                            <div key={index} className="cv-skills__group">
                                <h3 className="cv-skills__category">{skill.category}</h3>
                                <ul className="cv-skills__list">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="cv-skills__item">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                {/* Languages */}
                <ExpandableSection title={labels.languages}>
                    <ul className="cv-languages">
                        {languages.map((lng, index) => (
                            <li key={index} className="cv-languages__item">
                                <span className="cv-languages__name">{lng.name}</span>
                                <span className="cv-languages__level">{lng.level}</span>
                            </li>
                        ))}
                    </ul>
                </ExpandableSection>

                {/* References */}
                <ExpandableSection title={labels.references}>
                    <div className="cv-references">
                        <ul className="cv-references__list">
                            {references.map((ref, index) => (
                                <li key={index} className="cv-references__list-item">
                                    <article className="cv-references__item">
                                        <h3 className="cv-references__name">{ref.name}</h3>
                                        <ul className="cv-references__details">
                                            <li>{ref.title}, {ref.company}</li>
                                            <li>{ref.relationship[lang]}</li>
                                            {ref.period && <li>{ref.period}</li>}
                                        </ul>
                                    </article>
                                </li>
                            ))}
                        </ul>
                        <p className="cv-references__note">{labels.referencesNote}</p>
                    </div>
                </ExpandableSection>

                {/* Print Button */}
                <div className="cv-divider cv-divider--actions no-print" aria-hidden="true" />
                <div className="cv-actions no-print">
                    <button className="cv-print-btn" onClick={() => window.print()}>
                        {labels.print}
                    </button>
                </div>
            </div>
        </div>
    );
}
