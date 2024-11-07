"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECT_IMAGE_WIDTH, PROJECT_IMAGE_HEIGHT } from "@/lib/constants";


export interface ProjectProps {
    tags: readonly string[];

    title: string;

    description: string;


    imageUrl: string;

    host?: string;

    modalImageUrl?: string;

    competencies: readonly string[];

}

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity: opacityProgress }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="relative flex flex-col bg-gray-100 dark:bg-white/10 border border-black/5 rounded-lg overflow-hidden transition hover:bg-gray-200 dark:hover:bg-white/20">
                <div className="relative w-full h-[200px] sm:h-[300px]">
                    <Image
                        src={imageUrl}
                        alt={`Screenshot of ${title} project`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg shadow-2xl transition 
                            group-hover:scale-[1.04] 
                            group-hover:-translate-y-3 
                            group-hover:-rotate-2"
                    />
                </div>
                <div className="flex flex-col p-5 sm:p-6">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    {/* <p className="mt-2 text-gray-700 dark:text-white/70 leading-relaxed">{description}</p> */}
                    <ul className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider 
                                    text-white bg-black/[0.7] rounded-full dark:text-white/70"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </motion.div>
    );
}
