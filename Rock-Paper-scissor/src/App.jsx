import { useState,useEffect } from 'react'
import './App.css'
import Title from './Components/Title'
import Choices from './Components/Choices'
import Scores from './Components/Scores'

function App() {

  const[userChoice,setUserChoice]=useState("")
  const[compChoice,setCompChoice]=useState("")
  const[userScore,setUserScore]=useState(0)
  const[compScore,setCompScore]=useState(0)
  const[draw,setDraw]=useState(0)

  

  let compOption=["Rock","Paper","Scissors"]

  function generateCompChoice(){

      if(userChoice==="")
      {
        setCompChoice("");
        return;
      }

      let temp=Math.floor(Math.random()*10)
      console.log(temp)
      setCompChoice(compOption[temp%3])
      
    }

  function handleclick(e)
  {
    let temp=e.target.innerText
    console.log(temp)
    setUserChoice(temp);
    
  }
  function handleNext(){
    setUserChoice("");
 
  }

  function calcScore()
  {
    if(userChoice==="" || compChoice==="")
    return;

    if(userChoice==='Rock' && compChoice==='Scissors')
      setUserScore(prev=>prev+1)
    else if(userChoice==='Rock' && compChoice==='Paper')
      setCompScore(prev=>prev+1)
    else if(userChoice==='Paper' && compChoice==='Scissors')
      setCompScore(prev=>prev+1)
    else if(userChoice==='Paper' && compChoice==='Rock')
      setUserScore(prev=>prev+1)
    else if(userChoice==='Scissors' && compChoice==='Rock')
      setCompScore(prev=>prev+1)
    else if(userChoice==='Scisssors' && compChoice==='Paper')
      setUserScore(prev=>prev+1)
    else
    setDraw(prev=>prev+1)

  }


  useEffect(()=>{calcScore()},[compChoice])
  useEffect(()=>{generateCompChoice()},[userChoice])
  return (
  <>
    <div className='Titlebar'>
      <Title  handleclick={handleclick} handleNext={handleNext} />
    </div>
    <div className='choices'>
      <Choices usersChoice={userChoice} compChoice={compChoice} />
    </div>
    <div className='scores'>
      <Scores userScore={userScore} compScore={compScore} draw={draw}/>
    </div>

  </>
  )
}

export default App
