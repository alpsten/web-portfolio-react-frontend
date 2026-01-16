export interface ContactInfo {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    location: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Language {
    name: string;
    level: string;
}

export interface Reference {
    name: string;
    title: string;
    company: string;
    phone: string;
    email: string;
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    courses?: string[];
    description?: string;
}

export interface Experience {
    company: string;
    subtitle?: string;
    role: string;
    period: string;
    description: string[];
}

export interface CVContent {
    title: string;
    profile: string;
    skills: Skill[];
    languages: Language[];
    education: Education[];
    experience: Experience[];
    labels: {
        profile: string;
        experience: string;
        education: string;
        skills: string;
        languages: string;
        references: string;
        print: string;
        backToPortfolio: string;
    };
}

export interface CVData {
    name: string;
    contact: ContactInfo;
    references: Reference[];
    headshot: string;
    sv: CVContent;
    en: CVContent;
}

export const cvData: CVData = {
    name: "Emil Forsberg",
    headshot: "/src/assets/avatar-react.webp",
    contact: {
        phone: "(+46) 076 209 34 56",
        email: "emil.forsberg@yh.nackademin.com",
        linkedin: "LinkedIn.com/in/Forsberg-Emil",
        github: "GitHub.com/alpsten",
        location: "Stockholm",
    },
    references: [
        {
            name: "Anders Lakwani",
            title: "Store Manager",
            company: "C&C Sweden AB",
            phone: "(+46) 070 432 77 XX",
            email: "a.lakhwani@cec.com",
        },
        {
            name: "Nicklas Johansson",
            title: "Country Field Staff Manager",
            company: "Apple Inc.",
            phone: "(+46) 072 215 17 XX",
            email: "nicklas_johansson@apple.com",
        },
    ],
    sv: {
        title: "Javautvecklare",
        profile: `Jag är en studerande Javautvecklare från Nackademins yrkeshögskola, just nu söker jag en givande och spännande arbetsplats att göra min LIA på. Jag strävar efter att få skapa smarta och hållbara lösningar med moderna utvecklingsverktyg som IntelliJ och Visual Studio Code. Jag har praktisk erfarenhet av agil-utveckling och testdriven design genom utbildningen. Jag söker en roll där jag kan växa och utmanas som utvecklare - där jag kan bidra och få ta del av spännande projekt i en framåttänkande miljö.`,
        labels: {
            profile: "Profil",
            experience: "Yrkeserfarenhet",
            education: "Utbildning",
            skills: "Färdigheter",
            languages: "Språk",
            references: "Referenser",
            print: "Skriv ut / Spara som PDF",
            backToPortfolio: "Tillbaka till portfolio",
        },
        skills: [
            { category: "Programmering", items: ["Java", "JavaScript", "C"] },
            { category: "Databas", items: ["MySQL"] },
            { category: "Frontend", items: ["HTML", "CSS"] },
            { category: "Metodik", items: ["Objektorienterad", "Strukturerad"] },
            { category: "Soft Skills", items: ["Kommunikativ", "Lagspelare"] },
            { category: "Pågående", items: ["Python (Harvard)", "React (W3 Schools)"] },
        ],
        languages: [
            { name: "Svenska", level: "Modersmål" },
            { name: "Engelska", level: "Flytande" },
            { name: "Japanska", level: "Grundläggande" },
        ],
        education: [
            {
                institution: "Nackademin",
                degree: "Javautvecklare",
                period: "2024 - 2026",
                courses: [
                    "Javautveckling",
                    "Objektorienterad Programmering",
                    "Databasteknik och Java",
                    "Designmönster, Analys och Design",
                    "Funktionell Programmering",
                    "IT-Säkerhet",
                    "Frontend",
                    "Affärsmannaskap",
                    "Java Backend 1 & 2",
                    "DevOps",
                ],
            },
            {
                institution: "Rudbeck Gymnasieskola",
                degree: "Samhällsvetenskapsprogrammet",
                period: "2011 - 2014",
            },
        ],
        experience: [
            {
                company: "C&C Sweden AB",
                subtitle: "(tidigare MacSupport)",
                role: "Sales- och Service Specialist",
                period: "2023 - 2024",
                description: [
                    "Jobbade i butiken på Birger Jarlsgatan, vilket är Stockholms första Apple Premium Partner (APP).",
                    "Gav rådgivning och förstklassig service.",
                ],
            },
            {
                company: "Webhallen",
                subtitle: "Bredden",
                role: "Butiksmedarbetare",
                period: "2020 - 2021",
                description: [
                    "Jobbade på huvudlagret i Upplands Väsby i butiken.",
                    "Tog hand om kunder, frontning av produkter och hämtade beställningar.",
                ],
            },
            {
                company: "Apple Inc.",
                subtitle: "Slash.ten",
                role: "Specialist",
                period: "2019 - 2020",
                description: [
                    "Jobbade för Apple genom retailbyrån Slash.ten.",
                    "Hjälpte till med kundrådgivning, Apple-relaterade frågor och produktlösningar.",
                ],
            },
            {
                company: "MacRent",
                subtitle: "(tidigare digital inn)",
                role: "Sales- och Service Specialist",
                period: "2016 - 2019",
                description: [
                    "Jobbade i flera butiker som Sales- och Service Specialist.",
                    "Hjälpte till med kundrådgivning kring hård- och mjukvara.",
                ],
            },
        ],
    },
    en: {
        title: "Java Developer",
        profile: `I am a Java Developer student at Nackademin vocational college, currently seeking a rewarding and exciting workplace for my internship. I strive to create smart and sustainable solutions using modern development tools like IntelliJ and Visual Studio Code. I have practical experience with agile development and test-driven design through my education. I'm looking for a role where I can grow and be challenged as a developer - where I can contribute and participate in exciting projects in a forward-thinking environment.`,
        labels: {
            profile: "Profile",
            experience: "Work Experience",
            education: "Education",
            skills: "Skills",
            languages: "Languages",
            references: "References",
            print: "Print / Save as PDF",
            backToPortfolio: "Back to portfolio",
        },
        skills: [
            { category: "Programming", items: ["Java", "JavaScript", "C"] },
            { category: "Database", items: ["MySQL"] },
            { category: "Frontend", items: ["HTML", "CSS"] },
            { category: "Methodology", items: ["Object-Oriented", "Structured"] },
            { category: "Soft Skills", items: ["Communicative", "Team Player"] },
            { category: "In Progress", items: ["Python (Harvard)", "React (W3 Schools)"] },
        ],
        languages: [
            { name: "Swedish", level: "Native" },
            { name: "English", level: "Fluent" },
            { name: "Japanese", level: "Basic" },
        ],
        education: [
            {
                institution: "Nackademin",
                degree: "Java Developer",
                period: "2024 - 2026",
                courses: [
                    "Java Development",
                    "Object-Oriented Programming",
                    "Database Technology and Java",
                    "Design Patterns, Analysis and Design",
                    "Functional Programming",
                    "IT Security",
                    "Frontend",
                    "Business Skills",
                    "Java Backend 1 & 2",
                    "DevOps",
                ],
            },
            {
                institution: "Rudbeck High School",
                degree: "Social Sciences Program",
                period: "2011 - 2014",
            },
        ],
        experience: [
            {
                company: "C&C Sweden AB",
                subtitle: "(formerly MacSupport)",
                role: "Sales and Service Specialist",
                period: "2023 - 2024",
                description: [
                    "Worked at the store on Birger Jarlsgatan, Stockholm's first Apple Premium Partner (APP).",
                    "Provided advice and first-class service.",
                ],
            },
            {
                company: "Webhallen",
                subtitle: "Bredden",
                role: "Store Associate",
                period: "2020 - 2021",
                description: [
                    "Worked at the main warehouse in Upplands Väsby in the store.",
                    "Handled customers, product facing, and order pickups.",
                ],
            },
            {
                company: "Apple Inc.",
                subtitle: "Slash.ten",
                role: "Specialist",
                period: "2019 - 2020",
                description: [
                    "Worked for Apple through the retail agency Slash.ten.",
                    "Assisted with customer advice, Apple-related questions, and product solutions.",
                ],
            },
            {
                company: "MacRent",
                subtitle: "(formerly digital inn)",
                role: "Sales and Service Specialist",
                period: "2016 - 2019",
                description: [
                    "Worked in multiple stores as Sales and Service Specialist.",
                    "Assisted with customer advice regarding hardware and software.",
                ],
            },
        ],
    },
};
