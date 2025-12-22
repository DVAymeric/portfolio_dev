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
            <SectionHeading>Mon Parcours</SectionHeading>

            <p className="mb-3 text-justify">
                J'ai commencé par le développement web à la <span className="font-medium">Web@cadémie by Epitech</span>, où j'ai appris à construire des applications complètes. Mais créer des outils ne me suffisait pas : je voulais comprendre ce que les données pouvaient révéler.
            </p>

            <p className="mb-3 text-justify">
                C'est pour ça que je me suis tourné vers la <span className="font-medium">Data Analysis</span> à la <span className="font-medium">Wild Code School</span>. Aujourd'hui, je jongle entre ces deux casquettes : je peux aussi bien analyser des données avec <span className="italic">Python et SQL</span> que développer les outils pour les collecter et les rendre lisibles.
            </p>

            <p className="text-justify">
                Mon approche ? Mettre la technique au service de la résolution de problèmes concrets et aider à prendre de meilleures décisions.
            </p>
        </motion.section>
    );
}