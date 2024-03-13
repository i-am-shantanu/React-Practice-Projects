
import { useLoaderData } from "react-router-dom"
function UserData(){

    const userdata=useLoaderData();
    return(
        <>
            <img src={userdata.avatar_url}/>
        </>
    )
}
export default UserData


export const UserDataLoader=async function(){

    let data= await fetch("https://api.github.com/users/i-am-shantanu")

    let dataObj=await data.json()

    
}