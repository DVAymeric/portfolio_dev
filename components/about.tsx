"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>Parcours</SectionHeading>

            <p className="mb-3 text-align: justify">
                Après une exploration enrichissante de divers horizons
                professionnels, j'ai trouvé ma véritable vocation dans le
                <span className="font-medium"> développement web</span>. Cette
                découverte m'a conduit à la
                <span className="font-medium"> Web@cadémie by EPitech</span>, où
                j'ai plongé dans l'univers fascinant du
                <span className="font-medium"> développement full-stack</span>.
            </p>
            <p>
                Ce qui me passionne le plus dans ce domaine, c'est la
                <span className="italic">
                    {" "}
                    résolution de problèmes complexes
                </span>
                . Chaque défi est une opportunité d'apprentissage, et la
                satisfaction de trouver une solution élégante est incomparable.
                Cette quête constante d'innovation et d'amélioration guide
                chacun de mes projets.
            </p>
        </motion.section>
    );
}
