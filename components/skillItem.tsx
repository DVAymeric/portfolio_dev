// components/skillItem.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface SkillItemProps {
    name: string;
    icon: IconType;
    color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon: Icon, color }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-all duration-300
                 bg-white dark:bg-gray-800 hover:shadow-xl"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 0.6,
                }}
                className="mb-3"
            >
                <Icon className="w-12 h-12" style={{ color: color }} />
            </motion.div>
            <motion.span
                className="text-sm font-medium text-center text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {name}
            </motion.span>
        </motion.div>
    );
};

export default SkillItem;
