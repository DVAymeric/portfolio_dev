// components/skills.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { skillsData, Skill } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SkillItem from "./skillItem";

interface SkillRowProps {
    skills: Skill[];
    rowIndex: number;
}

const SkillRow: React.FC<SkillRowProps> = ({ skills, rowIndex }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: rowIndex * 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8"
        >
            {skills.map((skill) => (
                <SkillItem
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={skill.color}
                />
            ))}
        </motion.div>
    );
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    const skillRows: Skill[][] = skillsData.reduce(
        (rows: Skill[][], skill: Skill, index: number) => {
            if (index % 4 === 0) {
                rows.push([]);
            }
            rows[rows.length - 1].push(skill);
            return rows;
        },
        []
    );

    return (
        <section ref={ref} id="skills" className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading>Mes compétences</SectionHeading>
                <div className="mt-12">
                    {skillRows.map((row, rowIndex) => (
                        <SkillRow
                            key={rowIndex}
                            skills={row}
                            rowIndex={rowIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
