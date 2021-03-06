import React, {createContext, ReactNode, useState} from "react";

export const DEFAULT_THEME = 'default';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light'

type ThemeContextType ={
  globalTheme: string,
  setGlobalTheme: React.Dispatch<React.SetStateAction<string>>
}

type ThemeContextProps = {    
  children: ReactNode;  
}

export const ThemeContext = createContext({ } as ThemeContextType);

export function ThemeContextProvider(props:ThemeContextProps){

    const [theme, setTheme] = useState(DEFAULT_THEME);

    const value ={ 
        globalTheme: theme,
        setGlobalTheme: setTheme
    }
  

    return(
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
};