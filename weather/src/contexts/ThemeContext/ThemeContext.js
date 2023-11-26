import { createContext, useState } from "react";

const Theme  = createContext();

export const ThemeProvider = ({children})=>{

    const [theme,setTheme] = useState('Dark')
    const toggleTheme = ()=>{setTheme(theme==='Light'?'Dark':'Light');}
    const values = {theme,toggleTheme}

    return(
        <Theme.Provider value={values}>
            {children}
        </Theme.Provider>
    )


}


export default Theme;