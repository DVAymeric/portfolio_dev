import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { IconType } from "react-icons";
import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaAngular, FaPython } from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiPrisma,
    SiMongodb,
    SiRedux,
    SiExpress,
    SiPostgresql,
    SiPandas,
    SiNumpy,
    SiFramer,
    SiFigma,
    SiPostman,
    SiVercel,
    SiSupabase,
    SiGithubactions,
    SiReactquery,
    SiScikitlearn,
    SiPowerbi,
    SiPlotly,
    SiJupyter,
    SiGooglecloud,
    SiAmazonaws
} from "react-icons/si";

export interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Data Analyst",
        company: "Wild Code School",
        duration: "2025-2026",
        location: "Lyon",
        description:
            "Formation axée sur l'analyse de données, couvrant les statistiques, le machine learning, Python, R, SQL et les outils de visualisation de données. Acquisition de compétences en collecte, nettoyage, analyse et interprétation des données pour soutenir la prise de décision basée sur les données.",
        icon: LuGraduationCap,
    },
    {
        title: "Développeur Web Fullstack",
        company: "Likewatt",
        duration: "Décembre 2023 - Novembre 2024",
        location: "Lyon, Auvergne-Rhône-Alpes, France",
        description:
            "Conception et développement de fonctionnalités pour le logiciel 'Optiwize' spécialisé dans l'optimisation technico-économique des projets d'énergies renouvelables et d'autoconsommation. Utilisation de React, Node.js, SQL, NoSQL. Maintenance, résolution de problèmes et participation aux réunions d'équipe pour améliorer le produit.",
        icon: CgWorkAlt,
    },
    {
        title: "Développeur d'Applications Mobiles",
        company: "Ekami",
        duration: "Septembre 2023 - Décembre 2023 ",
        location: "Lyon",
        description:
            "Conception et développement d'une application mobile visant à améliorer l'expérience de dégustation de vin. Utilisation de React Native, PostgreSQL, Supabase. Développement de la logique de l'application, création de composants graphiques, communication avec une API et gestion du store de données local (Redux).",
        icon: FaReact,
    },
    {
        title: "Développeur Web Fullstack",
        company: "WEB@CADEMIE BY EPITECH",
        duration: "2022-2024",
        location: "Lyon",
        description:
            "Formation intensive en développement web couvrant l'intégration HTML/CSS, PHP (Symfony, Laravel), JavaScript (React, Node.js) et les bases de données SQL/NoSQL. Réalisation de projets incluant la reproduction de Twitter en groupe et le développement d'une application solo similaire à Spotify.",
        icon: LuGraduationCap,
    },
    
] as const;

export const projectsData = [
    {
        title: "BSQ",
        description:
            "Un projet algorithmique complexe impliquant la recherche du plus grand carré dans une grille avec des obstacles.",
        tags: ["PHP", "Algorithmes", "Optimisation"],
        imageUrl: "/bsq.jpg",
        modalImageUrl: "/bsq-2.png",
        host: "https://bsq-portfolio-2zh3.vercel.app/",
        competencies: ["Algorithmes", "Optimisation", "PHP"],
    },
    {
        title: "Les paniers de saisons",
        description:
            "Site vitrine pour une association de producteurs locaux. Les utilisateurs peuvent voir les produits disponibles, les paniers de saisons ainsi que commander en ligne.",
        tags: ["WordPress", "WooCommerce"],
        imageUrl: "/panier.jpg",
        modalImageUrl: "/panier-2.png",
        host: "https://lepanierdessaisons.fr/",
        competencies: [
            "Développement WordPress",
            "E-commerce",
            "Personnalisation de thème",
            "SEO",
        ],
    },
    {
        title: "GuessWhat",
        description:
            "Un clone de Pictionary en ligne développé en Go et WebSocket. Les joueurs rejoignent des salles où l'un d'eux doit faire deviner un mot aux autres en dessinant. Premier à deviner gagne des points basés sur sa rapidité.",
        tags: ["Go", "WebSocket", "API REST"],
        imageUrl: "/library.jpg",
        modalImageUrl: "/guess-2.png",
        host: "https://gogo.dayoo.ovh/",
        competencies: [
            "Développement backend en Go",
            "Communication en temps réel avec WebSocket",
            "Gestion de la concurrence et parallélisation",
            "Architecture client-serveur",
        ],
    },
] as const;

export const frontEndSkills: Skill[] = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "React Query", icon: SiReactquery, color: "#FF4154" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
];

export const backEndSkills: Skill[] = [
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Php", icon: FaGitAlt, color: "#777BB4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];

export const dataSkills: Skill[] = [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "SQL", icon: SiPostgresql, color: "#336791" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "Machine Learning", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
    { name: "Data Viz", icon: SiPlotly, color: "#3F4F75" },
    { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
];