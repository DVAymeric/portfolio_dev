"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
    const animationProps = useMemo(
        () => ({
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.125 },
        }),
        []
    );

    return (
        <motion.div
            className="my-24 h-16 w-1 rounded-full bg-gray-200 hidden sm:block dark:bg-opacity-20"
            {...animationProps}
        />
    );
}
