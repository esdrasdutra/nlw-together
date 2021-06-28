import React, {createContext, ReactNode, useState} from "react";

export const DEFAULT_THEME = 'default';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

type ThemeContextProps ={
  children: ReactNode;  
  globalTheme: '',
  setGlobalTheme: () => {}
}

export const ThemeContext = createContext({ } as ThemeContextProps);

export function ThemeContextParent(props:ThemeContextProps){

    const [theme, setTheme] = useState(DEFAULT_THEME);
  

    return(
        <ThemeContext.Provider value={}>
            {props.children}
        </ThemeContext.Provider>
    )
};