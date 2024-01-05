import { useState,useEffect } from 'react'
import './App.css'
import UtilityBar from './Components/UtilityBar'
import delimage from './assets/trash.svg'

function App() {

  const[jokes,setJokes]=useState([])

  const x=[<h1>Hello</h1>,<h1>I am Shantanu</h1>]
  
  function ClearAllJokes(){
    //reset all jokes state to default or empty array
    setJokes([])
  }
  function getNewJoke(){
    // api call to fetch a new joke and update state
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res)=>(res.json()))
    .then((res)=>{
     
      let temp=[res]
      setJokes(jokes.concat(temp)) 
    })
  }

  function deleteMe(e){
    const ele=e.target.parentElement;
    console.log(ele.id)

    let temp=jokes.filter((obj)=>(obj.id!=ele.id))
    setJokes(temp)
  }

  useEffect(()=>{console.log(jokes)},[jokes])
  return (
    <>
    {jokes.map(({joke,id})=>{

      const ele=(
        
        <div className='jokebox' id={id} key={id}>
          {joke}
          <button onClick={(e)=>{deleteMe(e)}} ><img src={delimage}/></button>
        </div>
        
      )
      return ele;
    })}
    <div className='utilityComponent'>
    <UtilityBar getNewJoke={getNewJoke} ClearAllJokes={ClearAllJokes}/>
    </div>
    
    </>
  )
}

export default App
