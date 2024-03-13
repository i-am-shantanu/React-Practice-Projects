import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children,authentication = true}) {

    const authStatus= useSelector(state=>state.auth.status)

    const navigate = useNavigate();

    [Loader,setLoader]=useState(true);

    useEffect(()=>{

        if(authentication && authStatus!==authentication)
            navigate('/login')
        else if(!authentication && authStatus!==authentication)
            navigate('/home')

            setLoader(false)

    },[navigate,authStatus,authentication])

  return loader?null:<>{children}</>
}

export default Protected