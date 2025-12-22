import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ 
    subsets: ["latin"],
    display: 'swap', // Améliore le chargement de la police
});

export const metadata = {
    metadataBase: new URL('https://votre-domaine.com'), // À remplacer
    title: {
        default: "Aymeric Di Vito | Développeur Full-Stack",
        template: "%s | Aymeric Di Vito"
    },
    description:  "Data Analyst. Passionné par l'innovation, j'aide les entreprises à décrypter leurs données complexes pour en extraire des leviers de croissance clairs et actionnables.",
    keywords: [
        "développeur full-stack",
        "Data Analyst",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "data analyst",
        "Python",
        "SQL",
        "Lyon"
    ],
    authors: [{ name: "Aymeric Di Vito", url: "https://votre-domaine.com" }],
    creator: "Aymeric Di Vito",
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "https://votre-domaine.com",
        title: "Aymeric Di Vito |  Data Analyst",
        description: "Portfolio professionnel - Data Analyst",
        siteName: "Aymeric Di Vito Portfolio",
        images: [{
            url: "/og-image.jpg", // À créer
            width: 1200,
            height: 630,
            alt: "Aymeric Di Vito - Développeur Full-Stack"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Aymeric Di Vito | Développeur Full-Stack",
        description: "Portfolio professionnel - Développeur Full-Stack et Data Analyst",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'votre-code-google-search-console', // À ajouter
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-gray-300 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
            >
                {/* Background Divs */}
                <div className="bg-gradient-to-br from-[#f0e7e9] to-[#f0e7e9] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[90px] sm:w-[68.75rem] dark:from-[#946263] dark:to-[#946263]"></div>
                <div className="bg-gradient-to-br from-[#e4e1fa] to-[#e4e1fa] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[120px] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-[#676394] dark:to-[#676394]"></div>

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />

                        <Toaster
                            position="top-right"
                            toastOptions={{
                                success: {
                                    duration: 3000,
                                    style: {
                                        background: "#1F2937",
                                        color: "#fff",
                                    },
                                },
                                error: {
                                    duration: 5000,
                                    style: {
                                        background: "#991B1B",
                                        color: "#fff",
                                    },
                                },
                                style: {
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderRadius: "0.5rem",
                                    padding: "1rem",
                                    maxWidth: "400px",
                                },
                            }}
                        />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}