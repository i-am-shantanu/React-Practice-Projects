import ThemeContext from "./ThemeContext"
import {useState} from 'react'
function ThemeContextProvider({children}){

    const[background,setBackground]=useState("white");
    const[text,setText]=useState("black")

    return(
        <ThemeContext.Provider value={{background,setBackground,text,setText}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider