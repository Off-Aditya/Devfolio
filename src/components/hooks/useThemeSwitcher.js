import React, { useEffect, useState } from "react"

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery);

        const handleChange = () => {

            const userPref = window.localStorage.getItem("theme");

            if (userPref) {
                setMode(userPref);

                if (userPref === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }

            } else {

                const systemPref = mediaQuery.matches ? "dark" : "light";
                setMode(systemPref);

                if (systemPref === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);

    }, []);

    useEffect(() => {

        if (!mode) return;

        window.localStorage.setItem("theme", mode);

        if (mode === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

    }, [mode]);

    return [mode, setMode];
}

export default useThemeSwitcher;