"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Modal from "./modal";
import type { Project as ProjectType } from "@/lib/types";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    const openModal = (project: ProjectType) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>Mes projets</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <div
                        key={project.title}
                        onClick={() => openModal(project)}
                        className="cursor-pointer"
                    >
                        <Project {...project} />
                    </div>
                ))}
            </div>

            {selectedProject && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={selectedProject.title}
                    description={selectedProject.description}
                    tags={selectedProject.tags}
                    host={selectedProject.host || ""}
                    imageUrl={selectedProject.modalImageUrl || selectedProject.imageUrl}
                    competencies={selectedProject.competencies}
                />
            )}
        </section>
    );
}
