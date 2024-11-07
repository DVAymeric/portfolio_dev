import React from "react";
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container className="mx-auto p-4">
                        <Section className="bg-white border border-gray-300 my-10 px-10 py-6 rounded-md shadow-sm">
                            <Heading className="text-xl font-semibold leading-tight text-gray-800 mb-4">
                                You received a new message from your portfolio
                                site
                            </Heading>
                            <Text className="text-gray-700 mb-4">
                                {message || "No message provided."}
                            </Text>
                            <Hr className="border-gray-300 my-4" />
                            <Text className="text-gray-600">
                                <strong>Sender's Email:</strong>{" "}
                                {senderEmail || "No email provided."}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
