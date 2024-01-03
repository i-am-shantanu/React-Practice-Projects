import { useState } from 'react'
import ButtonRow from './Components/buttonRow'
import './App.css'

function App() {
  const [disValue,setDisValue]=useState(0)
  const [Acc,setAcc]=useState(0)
  const [opn,setOpn]=useState('+')

  function handleClick(e)
  {   
    let temp=Number(e.target.value)
    let str=e.target.value
      if(temp || temp===0)
      {
        
          setDisValue((prev)=>(prev*10+temp))
        
      }
      else{

        console.log(disValue)
            if(opn==="+"){console.log("+");setAcc(100)}
            
             else if(opn==="-")
             setAcc((prev)=>(prev-disValue))
            else if(opn==="*")
            setAcc((prev)=>(prev*disValue))
          else if(opn==="/")
          setAcc((prev)=>(prev/disValue))

          if(str==="AC")
          {
            setDisValue(0)
            setOpn("+")
            setAcc(0)
          }
          else if(str==="=")
          {
            console.log(Acc)
            setOpn('+')
            setDisValue(Acc)
            setAcc(0)
          }
          else
          {
            setOpn(str);
            setDisValue(0);
          }
            
            
                       
      }
  }

  return (
    <>
      <div className='container' >
        <input value={disValue} onChange={(e)=>{setDisValue(Number(e.target.value));console.log(e.target.value)}}/>

        <ButtonRow buttonValue={[1,2,3,"+"]} disValue={disValue} handleClick={handleClick}/>
        <ButtonRow buttonValue={[4,5,6,"-"]} disValue={disValue} handleClick={handleClick}/>
        <ButtonRow buttonValue={[7,8,9,"*"]} disValue={disValue} handleClick={handleClick}/>
        <ButtonRow buttonValue={["AC",0,"/","="]} disValue={disValue} handleClick={handleClick}/>
        

      </div>
    </>
      
  )
}

export default App
