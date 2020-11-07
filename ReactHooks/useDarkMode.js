import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, value) => { 
    const [darkMode, setDarkMode] = useLocalStorage("darkmode", value);
    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])
    return [darkMode, setDarkMode]
}

/* ADD THIS TO THE CSS FILE FOR THE BODY TO GET THE DARKMODE TO WORK

.dark-mode{
    background: black;
    color: white
}

*/