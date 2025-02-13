import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: '',
    changeTheme: () => { },
})

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
          return prevTheme === 'light' ? 'dark' : 'light';
        });
      };
      
    const ctxValue = {
        theme: theme,
        changeTheme: toggleTheme,
    };
    return <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
}
