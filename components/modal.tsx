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
          className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-opacity-75 touch-none"
          onClick={handleBackgroundClick}
          style={{
            backgroundColor: isDarkTheme
              ? "rgba(0, 0, 0, 0.75)"
              : "rgba(0, 0, 0, 0.25)",
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className={`w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative ${
              isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
            onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing on click
          >
            {/* Bouton mobile de fermeture */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Stop propagation to avoid triggering background click
                handleClose();
              }}
              className="absolute top-2 right-2 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white sm:hidden"
              aria-label="Fermer"
            >
              ×
            </button>

            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-opacity-20 border-gray-600">
              <h2 className="text-2xl font-bold">{title}</h2>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Stop propagation to avoid triggering background click
                  handleClose();
                }}
                className={`text-2xl hidden sm:block ${
                  isDarkTheme
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-800"
                } transition-colors`}
              >
                &times;
              </button>
            </div>

            {/* Content */}
            <div className="flex-grow overflow-y-auto max-h-[80vh]">
              <div className="p-4">
                {/* Image Section */}
                <div className="w-full h-72 relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={imageUrl}
                    alt={`Screenshot of ${title} project`}
                    layout="fill"
                    objectFit="cover"
                    quality={95}
                  />
                </div>

                {/* Description */}
                <p className="text-base mb-4">{description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-sm rounded-full ${
                          isDarkTheme
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Competencies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Compétences développées
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {competencies.map((competency, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {competency}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Project Link */}
                {host && (
                  <div className="flex justify-end mt-4">
                    <motion.a
                      href={host}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        isDarkTheme
                          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                    >
                      Voir le projet
                    </motion.a>
                  </div>
                )}
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
