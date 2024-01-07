import { useState,useEffect } from 'react'
import './App.css'

function App() {
const[message,setMessage]=useState("")
const[disvalue,setValue]=useState("")
const[color,setColor]=useState("red")

function checkPasswordStrength(){

  console.log("Invoked")
  let strong =false;

  let UpperCase=false;
  let LowerCase=false;
  let misc =false;


  for(let i=0;i<disvalue.length;i++){

      let curChar=disvalue.charAt(i);
      if(curChar>='A' && curChar<='Z')
      UpperCase=true
      else if(curChar>='a' && curChar<='b' )
      LowerCase=true
      else if(curChar>=' ' && curChar<='@')
      misc=true
  }

  if(UpperCase&&LowerCase&&misc&&disvalue.length>=8)
  {
    setColor("green")

  }
  else
  {
    setColor("red");
  }
}

useEffect(()=>{
  checkPasswordStrength();

},[disvalue])

function updateMessage()
{
    if(color=="red")
    setMessage("Password is weak !")
    else
    setMessage("Password is Strong !")
}

useEffect(()=>{
  updateMessage();
},[color])


  return (
    <>
     <div className='Heading'>
      <h1>Password Validator</h1>
     </div>
     <div className='container'>
      <div>
      <label >Password</label>
      <input type='password' value={disvalue} onChange={(e)=>{setValue(e.target.value)}} placeholder='Password'/> 
      </div>
      <div className='message' style={{color:color}}>{message}</div>
     </div>
    </>
  )
}

export default App
