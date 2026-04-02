export interface ContactInfo {
    phone: string;
    emails: string[];
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

export interface EducationCourse {
    name: string;
    points: number;
}

export interface Reference {
    name: string;
    title: string;
    company: string;
    relationship: {
        sv: string;
        en: string;
    };
    period?: string;
    phone: string;
    email: string;
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    courses?: EducationCourse[];
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
        course: string;
        yhPoints: string;
        skills: string;
        languages: string;
        references: string;
        referencesNote: string;
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
    name: "Emil Alpsten",
    headshot: "/src/assets/avatar-react-2.webp",
    contact: {
        phone: "(+46) 076 209 34 56",
        emails: [
            "emil.forsberg@yh.nackademin.se",
            "hello.alpsten@gmail.com",
        ],
        linkedin: "linkedin.com/in/emil-alpsten",
        github: "github.com/alpsten",
        location: "Stockholm",
    },
    references: [
        {
            name: "Johan Wirlén Enroth",
            title: "CEO",
            company: "Rhyme Sthlm",
            relationship: {
                sv: "LIA-handledare",
                en: "Internship supervisor",
            },
            period: "2025 - 2026",
            phone: "",
            email: "",
        },
        {
            name: "Anders Lakwani",
            title: "Store Manager",
            company: "C&C Sweden AB",
            relationship: {
                sv: "Tidigare chef",
                en: "Former manager",
            },
            period: "2023 - 2024",
            phone: "(+46) 070 432 77 XX",
            email: "a.lakhwani@cec.com",
        },
        {
            name: "Nicklas Johansson",
            title: "Country Field Staff Manager",
            company: "Apple Inc.",
            relationship: {
                sv: "Tidigare chef",
                en: "Former manager",
            },
            period: "2019 - 2020",
            phone: "(+46) 072 215 17 XX",
            email: "nicklas_johansson@apple.com",
        },
    ],
    sv: {
        title: "Javautvecklare",
        profile: `Jag är Javautvecklare med fokus på backend och moderna webbapplikationer.
        Jag bygger strukturerade och testbara lösningar i Java, Node.js och React,
        med särskilt intresse för API-design, validering och hållbar kod.
        Under min LIA på Rhyme Sthlm har jag arbetat med React, Node.js, Stripe och Zod,
        vilket har stärkt mig i att omsätta krav till fungerande lösningar i team.
        Jag trivs bäst i samarbeten där man ställer frågor tidigt, itererar snabbt
        och löser verkliga problem med tydlig och genomtänkt kod.`,
        labels: {
            profile: "Profil",
            experience: "Yrkeserfarenhet",
            education: "Utbildning",
            course: "Kurs",
            yhPoints: "YH-Poäng",
            skills: "Färdigheter",
            languages: "Språk",
            references: "Referenser",
            referencesNote: "Kontaktuppgifter lämnas på begäran.",
            print: "Skriv ut / Spara som PDF",
            backToPortfolio: "Tillbaka till portfolio",
        },
        skills: [
            { category: "Backendtekniker", items: ["Java", "Kotlin", "Node.js", "TypeScript / JavaScript", "C"] },
            { category: "Backend", items: ["Spring Boot", "Express.js"] },
            { category: "Frontend", items: ["React", "HTML", "Tailwind", "CSS", "SCSS"] },
            { category: "Data", items: ["Prisma", "MongoDB", "Supabase", "MySQL"] },
            { category: "Validering", items: ["Zod", "TanStack Query", "TanStack Table", "TanStack Virtual"] },
            { category: "Autentisering", items: ["Clerk", "Stripe SDK"] },
            { category: "Verktyg", items: ["Git", "Vite", "Bun"] },
            { category: "Koncept", items: ["Mikrotjänster", "REST API:er", "API-design", "Datavalidering", "Caching"] },
            { category: "Utforskar", items: ["Molnteknik", "Kubernetes", "DevOps-arbetssätt"] },
            { category: "Metodik", items: ["Objektorienterad design", "Strukturerad problemlösning", "Testbar kod", "Iterativ utveckling", "Agilt samarbete"] },
            { category: "Egenskaper", items: ["Kommunikativ", "Samarbetsorienterad", "Noggrann", "Analytisk", "Problemlösande"] },
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
                    { name: "Javautveckling", points: 20 },
                    { name: "Objektorienterad programmering och Java", points: 50 },
                    { name: "Designmönster, analys och design", points: 15 },
                    { name: "Affärsmannaskap", points: 10 },
                    { name: "Databasteknik och Java", points: 25 },
                    { name: "Funktionell programmering", points: 20 },
                    { name: "Frontend", points: 25 },
                    { name: "IT-säkerhet", points: 15 },
                    { name: "Java backend 1", points: 20 },
                    { name: "Java backend 2", points: 20 },
                    { name: "DevOps", points: 20 },
                    { name: "LIA", points: 110 },
                    { name: "Teknikfördjupning", points: 20 },
                    { name: "Examensarbete", points: 30 },
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
                company: "Rhyme Sthlm",
                role: "LIA-praktikant",
                period: "2025 - 2026",
                description: [
                    "Arbetade med React i frontend och Node.js i backend för att utveckla funktioner i pågående projekt.",
                    "Arbetade med Stripe-integrationer och betalningsflöden.",
                    "Använde Zod och TanStack för validering och datahantering i applikationen.",
                ],
            },
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
                role: "Butiksmedarbetare",
                period: "2020 - 2021",
                description: [
                    "Jobbade i butiken på dåvarande huvudlagret Bredden, Upplands Väsby.",
                    "Tog hand om kunder, frontning av produkter och hämtade beställningar.",
                ],
            },
            {
                company: "Apple Inc.",
                subtitle: "(genom Slash.ten)",
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
        profile: `I am a Java developer focused on backend systems and modern web applications.
        I build structured, testable solutions in Java, Node.js, and React,
        with a strong interest in API design, validation, and maintainable code.
        During my internship at Rhyme Sthlm, I worked with React, Node.js, Stripe, and Zod,
        which strengthened my ability to turn requirements into working solutions in a team setting.
        I do my best work in collaborative environments where people ask questions early,
        iterate quickly, and solve real problems with clear, well-considered code.`,
        labels: {
            profile: "Profile",
            experience: "Work Experience",
            education: "Education",
            course: "Course",
            yhPoints: "YH Credits",
            skills: "Skills",
            languages: "Languages",
            references: "References",
            referencesNote: "Contact details available upon request.",
            print: "Print / Save as PDF",
            backToPortfolio: "Back to portfolio",
        },
        skills: [
            { category: "Languages", items: ["Java", "Kotlin", "Node.js", "TypeScript / JavaScript", "C"] },
            { category: "Backend", items: ["Spring Boot", "Express.js"] },
            { category: "Frontend", items: ["React", "HTML", "Tailwind", "CSS", "SCSS"] },
            { category: "Data", items: ["Prisma", "MongoDB", "Supabase", "MySQL"] },
            { category: "Validation", items: ["Zod", "TanStack Query", "TanStack Table", "TanStack Virtual"] },
            { category: "Authentication", items: ["Clerk", "Stripe SDK"] },
            { category: "Tooling", items: ["Git", "Vite", "Bun"] },
            { category: "Concepts", items: ["Microservices", "REST APIs", "API design", "Data validation", "Caching"] },
            { category: "Learning", items: ["Cloud technologies", "Kubernetes", "DevOps practices"] },
            { category: "Methodology", items: ["Object-oriented design", "Structured problem solving", "Testable code", "Iterative development", "Agile collaboration"] },
            { category: "Soft Skills", items: ["Communicative", "Collaborative", "Detail-oriented", "Analytical", "Problem-solving"] },
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
                    { name: "Java Development", points: 20 },
                    { name: "Object-Oriented Programming and Java", points: 50 },
                    { name: "Design Patterns, Analysis and Design", points: 15 },
                    { name: "Business Skills", points: 10 },
                    { name: "Database Technology and Java", points: 25 },
                    { name: "Functional Programming", points: 20 },
                    { name: "Frontend", points: 25 },
                    { name: "IT Security", points: 15 },
                    { name: "Java Backend 1", points: 20 },
                    { name: "Java Backend 2", points: 20 },
                    { name: "DevOps", points: 20 },
                    { name: "LIA Internship", points: 110 },
                    { name: "Technical Specialization", points: 20 },
                    { name: "Degree Project", points: 30 },
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
                company: "Rhyme Sthlm",
                role: "Intern",
                period: "2025 - 2026",
                description: [
                    "Worked with React in the frontend and Node.js in the backend to build features in active projects.",
                    "Worked on Stripe integrations and payment flows.",
                    "Used Zod and TanStack for validation and data handling in the application.",
                ],
            },
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
                role: "Store Associate",
                period: "2020 - 2021",
                description: [
                    "Worked in the store at the main warehouse in Bredden, Upplands Väsby.",
                    "Handled customers, product facing, and order pickups.",
                ],
            },
            {
                company: "Apple Inc.",
                subtitle: "(through Slash.ten)",
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
