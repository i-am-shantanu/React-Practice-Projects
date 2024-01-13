import { useState,useContext } from 'react'
import './App.css'
import { Login } from './Components/Login'
import { Message } from './Components/Message'
import UserContextProvider from './Context/UserContextProvider'
function App() {
 



  return (
    <>
    <UserContextProvider>
    <div className="message">
      <Message />
    </div>
      <div className="login">
        <Login/>
      </div>
    
    </UserContextProvider>
    </>
  )
}

export default App
