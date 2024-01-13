import './Card.css'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
export default function Card()
{
    const {background,text}=useContext(ThemeContext)
    return(
        <>
        <div className="container" style={{backgroundColor:background}}>
            <img src='https://picsum.photos/200' />
            <h1 style={{color:text}}>Name : Shantanu</h1>
            <h1 style={{color:text}}>Instagram Id : _72Shantanu_</h1>
        </div>
        
        </>
    )
}