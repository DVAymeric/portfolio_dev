"use client";

import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: readonly string[];
  host: string;
  imageUrl: string;
  competencies: readonly string[];
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  tags,
  host,
  imageUrl,
  competencies,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const handleClose = useCallback(() => {
    onClose();
    document.body.style.overflow = "unset";
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-opacity-75 touch-none backdrop-blur-sm"
          onClick={handleBackgroundClick}
          style={{
            backgroundColor: isDarkTheme
              ? "rgba(0, 0, 0, 0.85)" // Fond un peu plus sombre pour le focus
              : "rgba(0, 0, 0, 0.45)",
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            // MODIFICATION 1 : max-w-5xl pour élargir la fenêtre sur desktop
            className={`w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] ${
              isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Fixe */}
            <div className={`flex justify-between items-center px-6 py-4 border-b z-10 ${
              isDarkTheme ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
            }`}>
              <h2 className="text-xl sm:text-2xl font-bold truncate pr-4">{title}</h2>
              <button
                onClick={handleClose}
                className={`p-2 rounded-full transition-colors ${
                  isDarkTheme
                    ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                    : "hover:bg-gray-100 text-gray-500 hover:text-black"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Content Scrollable */}
            <div className="overflow-y-auto custom-scrollbar">
              
              {/* MODIFICATION 2 & 3 : Image en pleine largeur (Edge-to-Edge) et plus haute */}
              <div className="relative w-full h-64 sm:h-80 md:h-[500px] bg-gray-100">
                <Image
                  src={imageUrl}
                  alt={`Screenshot of ${title} project`}
                  fill
                  // object-contain permet de voir TOUTE l'image sans couper (utile pour dashboards)
                  // Si tu préfères que ça remplisse tout (zoomé), remets "cover"
                  className="object-cover object-top" 
                  quality={95}
                  priority
                />
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Description & Link Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      À propos du projet
                    </h3>
                    <p className={`text-base leading-relaxed ${isDarkTheme ? "text-gray-300" : "text-gray-600"}`}>
                      {description}
                    </p>
                  </div>

                  {/* Bouton d'action à droite sur Desktop */}
                  <div className="flex flex-col justify-start items-start md:items-end">
                    {host && (
                      <motion.a
                        href={host}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-lg transition-all bg-gradient-to-r from-[#7000FF] to-[#9d4eff] text-white hover:shadow-purple-500/30"
                      >
                        Voir le projet en live
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />

                {/* Tech & Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4"> Stack Technique</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${
                            isDarkTheme
                              ? "bg-gray-800 border-gray-700 text-gray-300"
                              : "bg-gray-50 border-gray-200 text-gray-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Competencies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4"> Compétences clés</h3>
                    <ul className="space-y-2">
                      {competencies.map((competency, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-[#7000FF] mt-1">▹</span>
                          <span className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
                            {competency}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;