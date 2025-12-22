"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { dataSkills, backEndSkills, frontEndSkills } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    
    const [activeTab, setActiveTab] = useState("Data");

    const tabs = [
        { id: "Data", label: "Data & IA", data: dataSkills },
        { id: "Backend", label: "Backend & Eng.", data: backEndSkills },
        { id: "Frontend", label: "Frontend & UI", data: frontEndSkills },
    ];

    const activeData = tabs.find(tab => tab.id === activeTab)?.data || [];
    
    // LOGIQUE DE MISE EN PAGE :
    // Si pair (et suffisant), on divise par 2 pour avoir le nombre de colonnes exact
    // Sinon (impair ou mobile), on utilise flex-wrap standard
    const isEven = activeData.length % 2 === 0 && activeData.length >= 4;
    const colsCount = isEven ? activeData.length / 2 : 0;

    // Mapping manuel des classes Tailwind pour être sûr que le compilateur les détecte
    // (Tailwind ne gère pas bien les classes dynamiques comme `grid-cols-${colsCount}`)
    const getGridClass = (cols: number) => {
        switch (cols) {
            case 2: return "sm:grid-cols-2";
            case 3: return "sm:grid-cols-3";
            case 4: return "sm:grid-cols-4";
            case 5: return "sm:grid-cols-5";
            case 6: return "sm:grid-cols-6";
            default: return "flex flex-wrap justify-center";
        }
    };

    const layoutClass = isEven 
        ? `flex flex-wrap justify-center sm:grid ${getGridClass(colsCount)} sm:gap-6`
        : "flex flex-wrap justify-center gap-6";


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        },
        exit: { opacity: 0, transition: { duration: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.9 },
        visible: { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[65rem] scroll-mt-28 text-center sm:mb-40 mx-auto"
        >
            <SectionHeading>Mes Compétences Techniques</SectionHeading>

            {/* --- NAVIGATION ONGLETS --- */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-full w-fit mx-auto backdrop-blur-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors outline-none
                            ${activeTab === tab.id 
                                ? "text-gray-950 dark:text-white" 
                                : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white"
                            }
                        `}
                    >
                        <span className="relative z-10">{tab.label}</span>
                        {activeTab === tab.id && (
                            <motion.span
                                layoutId="activeTabStyle"
                                className="absolute inset-0 bg-white dark:bg-gray-700 shadow-sm rounded-full z-0"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* --- CONTENU --- */}
            <div className="min-h-[350px]">
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={activeTab}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        // Application de la classe dynamique ici
                        className={`${layoutClass} gap-6`}
                    >
                        {activeData.map((skill, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="group bg-gray-50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-36 sm:w-40 aspect-[4/5] sm:aspect-square relative overflow-hidden mx-auto"
                            >
                                {/* Lueur au survol */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/30 dark:to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                                {/* LOGO GÉANT */}
                                <div className="relative z-10 drop-shadow-sm transition-transform group-hover:scale-110 duration-300">
                                    {skill.icon && React.createElement(skill.icon, { 
                                        style: { color: skill.color },
                                        className: "text-5xl sm:text-6xl" 
                                    })}
                                </div>
                                
                                {/* Nom */}
                                <span className="text-base font-semibold text-gray-700 dark:text-white/90 relative z-10">
                                    {skill.name}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </div>
        </section>
    );
}