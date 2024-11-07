"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 bg-white dark:bg-opacity-80"
            onClick={toggleTheme}
            whileHover={{
                scale: 1.2,
                rotate: theme === "light" ? 360 : -360,
                boxShadow:
                    theme === "light"
                        ? "0 0 20px 5px rgba(255, 223, 76, 0.5)"
                        : "0 0 20px 5px rgba(45, 110, 255, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
        >
            <AnimatePresence mode="wait">
                {theme === "light" ? (
                    <motion.div
                        key="sun"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BsSun className="text-yellow-200" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BsMoon className="text-blue-200" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
