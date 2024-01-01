import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  let [specialCharactersAllowed,setSpecialCharactersAllowed]=useState(false)
  const [password,setPassword]=useState("")

  function generatePassword(){

    let refrenceStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) refrenceStr+="0123456789"

    if(specialCharactersAllowed) refrenceStr+="!@#$%^&*()_=+*/.{}[]|\?"

    let curPassword=""

    const len=refrenceStr.length
    for(let i=1 ;i<=length ;i++)
    {
      let random=Math.floor((Math.random()*len+1))
      curPassword+=refrenceStr.charAt(random)
    }

    console.log(curPassword)
    setPassword(curPassword);
  }

  useEffect(generatePassword,[length,numberAllowed,specialCharactersAllowed])
  

  return (
    <>
    <div className='titlebar'>
      Password Generator
    </div>
    <div className='container'>
        <div className='box1'>
        <input type="text" placeholder='Password' className='inputfield' value={password} readOnly={true}/>
        </div>
        <div className='box2'>
           <div><input type='range' min={8} max={100} defaultValue={length} onChange={(e)=>{setLength(e.target.value)}}/></div>
          <div><input type='checkbox' onClick={()=>{setNumberAllowed((prev)=>!prev)}} /><label className='label'>Numbers</label></div>
          <div><input type='checkbox' onClick={()=>{setSpecialCharactersAllowed((prev)=>!prev)}}/><label className='label'>special characters</label></div>
        </div>
        <label className='label'>Length : {length}</label>
    </div>
    </>
  )
}

export default App
