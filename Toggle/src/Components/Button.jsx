import './Button.css'
import {useEffect, useState,useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
function Button()
{
    const[togglevalue,setToggleValue]=useState(false)

    const{setBackground,setText}=useContext(ThemeContext);

    function handleToggle()
    {
        setToggleValue((prev)=>!prev)
    }

    useEffect(()=>{
        if(togglevalue==true)
        {
            setBackground("black")
            setText("white")
        }
        else
        {
            setBackground("white")
            setText("black")
   
        }
    },[togglevalue])
    return(
        <>
        <div className="toggle">
        <label className="switch">
        <input type="checkbox" onChange={(e)=>{handleToggle(e)}}/>
        <span className="slider"></span>
        </label>

        </div>
        </>
    )
}
export default Button