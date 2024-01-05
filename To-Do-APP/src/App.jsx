import { useState,useRef,useEffect } from 'react'
import './App.css'
import AddTask from './Components/AddTask.jsx'
import trashbox from './Assets/trash.svg'
function App() {

  const[taskList,setTaskList]=useState([])
  const inputRef=useRef(null)
  function handleButton(e)
  {
     e.preventDefault();
     let tempList =[inputRef.current.value]

     setTaskList(taskList.concat(tempList))
     
  }
  function handleDel(e){
  let  curText=e.target.parentElement.innerText;
  let temp=taskList.filter((val)=>(val!=curText))
  setTaskList(temp);
  }

  useEffect(()=>{inputRef.current.value=""},[taskList])

  return (
    <>
    <div className='addTaskBox'>
    <AddTask handleButton={handleButton} inputRef={inputRef}/>
    </div>
    

    {taskList.map((val)=>{

      
      const ele=(
        <div className='taskBox' key={val}>
        {val}
        
        <img src={trashbox}  onClick={(e)=>{handleDel(e);}}/>
      </div>
      )
      return ele
    })}
    </>
  )
}

export default App
