import { useState } from "react";

export const useLocalStorage = (key, value) => { 
    const [storedValue, setStoredValue] = useState(() => { 
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : value;
   })
    const setValue = newValue => {
        setStoredValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue))
    }
    
    return [storedValue, setValue];
}