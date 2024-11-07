"use client";

import type { SectionName } from "@/lib/types";
import React, {
    useState,
    useCallback,
    useMemo,
    createContext,
    useContext,
} from "react";

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: (section: SectionName) => void;
    timeOfLastClick: number;
    setTimeOfLastClick: (time: number) => void;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);
ActiveSectionContext.displayName = "ActiveSectionContext"; // Ajout du nom pour le débogage

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    // Mémorisation des setters pour éviter de recréer les fonctions à chaque rendu
    const memoizedSetActiveSection = useCallback((section: SectionName) => {
        setActiveSection(section);
    }, []);

    const memoizedSetTimeOfLastClick = useCallback((time: number) => {
        setTimeOfLastClick(time);
    }, []);

    // Mémorisation de la valeur du contexte
    const value = useMemo(
        () => ({
            activeSection,
            setActiveSection: memoizedSetActiveSection,
            timeOfLastClick,
            setTimeOfLastClick: memoizedSetTimeOfLastClick,
        }),
        [
            activeSection,
            timeOfLastClick,
            memoizedSetActiveSection,
            memoizedSetTimeOfLastClick,
        ]
    );

    return (
        <ActiveSectionContext.Provider value={value}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}
