"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Email invalide",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Message invalide",
    };
  }

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aymeric.di-vito@epitech.eu",
      subject: "Message du Portfolio",
      reply_to: senderEmail as string,
      react: ContactFormEmail({
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
