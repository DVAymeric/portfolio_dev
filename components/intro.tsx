"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home");
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    />
                </div>
            </div>

            <motion.div
                className="mb-10 mt-32 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    Bonjour, je suis{" "}
                    <span className="text-blue-600">Aymeric</span>
                </h1>
                <p className="subtitle">
                    Développeur Full-Stack passionné par l'innovation et la
                    résolution de problèmes complexes
                </p>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                {/* Conteneur principal des boutons */}
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    {/* Boutons principaux */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <Link
                            href="#contact"
                            className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition w-full sm:w-auto"
                            onClick={() => {
                                setActiveSection("Contact");
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            Contactez-moi{" "}
                            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                        </Link>

                        <a
                            className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10 w-full sm:w-auto"
                            href="/CV.pdf"
                            download
                        >
                            Télécharger CV{" "}
                            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>
                    </div>

                    {/* Icônes sociales */}
                    <div className="flex justify-center gap-2">
                        <a
                            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
                            href="https://www.linkedin.com/in/aymeric-di-vito/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsLinkedin />
                        </a>

                        <a
                            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
                            href="https://github.com/DVAymeric"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}