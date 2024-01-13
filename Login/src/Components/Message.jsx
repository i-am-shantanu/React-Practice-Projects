import { useContext } from "react";
import UserContext from "../Context/UserContext";

export function Message()
{
    
    const {user}=useContext(UserContext)

    if(user) return(<h1>Hello {user.name}</h1>)
    else return(<h1>Please Login</h1>) 
}