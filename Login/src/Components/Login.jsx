import { useContext, useState } from 'react'
import './Login.css'
import UserContext from '../Context/UserContext'
export function Login()
{
    const [name,setName]=useState("")
    const[pass,setPass]=useState("")
    const {setUser}=useContext(UserContext)

    function handleClick(e)
    {
        e.preventDefault();
        setUser({name,pass});
    }

    return(
        <div className="login-container">
            
                <div>
                <label >UserName :</label>
                <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div>
                <label>Password :</label>
                <input type='password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                </div>
                <button type="submit" onClick={(e)=>{handleClick(e)}}>Submit</button>
            
        </div>
    )
}