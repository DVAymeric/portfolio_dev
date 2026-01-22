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
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] flex flex-col items-center justify-center pt-28 sm:pt-36"
    >
      {/* 1. Photo / Avatar (Placeholder conservé) */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            {/* Si tu ajoutes une photo plus tard, c'est ici */}
            {/* <span className="text-6xl">👋</span> */}
          </motion.div>
        </div>
      </div>

      {/* 2. Le Nom et la Salutation - Très visible */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-gray-900 dark:text-white">Bonjour, je suis </span>
        <span className="text-blue-600">Aymeric.</span>
      </motion.h1>

      {/* 3. Le Poste - Séparé pour la clarté */}
      <motion.div
        className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Data Analyst & Développeur
      </motion.div>

      {/* 4. Le Pitch - Paragraphe aéré pour la lecture */}
      <motion.p
        className="mb-10 text-lg sm:text-xl font-normal text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Je transforme la donnée brute en{" "}
        <span className="font-bold text-gray-900 dark:text-white">
          solutions claires
        </span>{" "}
        et en{" "}
        <span className="font-bold text-gray-900 dark:text-white underline decoration-blue-500/50 decoration-2 underline-offset-4">
          décisions stratégiques
        </span>
        .
      </motion.p>

      {/* 5. Les Boutons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-lg"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contactez-moi{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 shadow-sm hover:shadow-md"
          href="/CV.pdf"
          download
        >
          Télécharger CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-sm hover:shadow-md"
            href="https://www.linkedin.com/in/aymeric-di-vito/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 shadow-sm hover:shadow-md"
            href="https://github.com/DVAymeric"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}