import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        // Check system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        // Save theme preference to localStorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        // Update document class and CSS variables
        const root = document.documentElement;
        if (isDarkMode) {
            root.setAttribute("data-theme", "dark");
            document.body.style.backgroundColor = "#0f1419";
            document.body.style.color = "#e0e1dd";
        } else {
            root.setAttribute("data-theme", "light");
            document.body.style.backgroundColor = "#f8f9fa";
            document.body.style.color = "#333";
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
