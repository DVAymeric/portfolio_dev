import React, { FC } from "react";

type SectionHeadingProps = {
    children: React.ReactNode;
    className?: string;
};

const SectionHeading: FC<SectionHeadingProps> = ({
    children,
    className = "",
}) => {
    return (
        <h2
            className={`text-3xl font-medium capitalize mb-8 text-center ${className}`}
        >
            {children}
        </h2>
    );
};

export default SectionHeading;
