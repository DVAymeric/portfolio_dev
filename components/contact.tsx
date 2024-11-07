"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    // Animation settings centralisés
    const animationSettings = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 1 },
        viewport: { once: true },
    };

    const handleSubmit = async (formData: FormData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
            toast.error(`Erreur lors de l'envoi: ${error}`);
            return;
        }

        toast.success("Email envoyé avec succès !");
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            {...animationSettings}
        >
            <SectionHeading>Contactez-moi</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Veuillez me contacter directement à{" "}
                <a className="underline" href="mailto:aymeric.di-vito@epitech.eu">
                    aymeric.di-vito@epitech.eu
                </a>{" "}
                ou via ce formulaire.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={handleSubmit}
            >
                <label htmlFor="senderEmail" className="sr-only">
                    Votre email
                </label>
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Votre email"
                />

                <label htmlFor="message" className="sr-only">
                    Votre message
                </label>
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Votre message"
                    required
                    maxLength={5000}
                />

                <SubmitBtn />
            </form>
        </motion.section>
    );
}
