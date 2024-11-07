import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectProps = {
    title: string;
    description: string;
    tags: ReadonlyArray<string>;
    imageUrl: string;
    modalImageUrl?: string;
    competencies: ReadonlyArray<string>;
};
export type Project = {

    title: string;

    description: string;

    tags: readonly string[];

    imageUrl: string;

    host?: string;

    modalImageUrl?: string;

    competencies: readonly string[];

};