import React from 'react'
import {  useDispatch} from 'react-redux'
import authService from '../../appwrite_files/auth.js'
import {logout} from '../../Store/authSlice.js'


function LogoutBtn() {

    const dispatch=useDispatch()

    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
    <button
    onClick={logoutHandler}
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default LogoutBtn