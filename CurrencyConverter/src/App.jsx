import { useState,useEffect } from 'react'
import './App.css'
import InputForm from './components/InputForm.jsx'
function App() {
const [inputValue,setInputValue]=useState(0)
const [inputCurrency,setInputCurrency]=useState("usd")
const [targetCurrency,setTargetCurrency]=useState("inr")
const [result,setResult]=useState(0)
const [options,setOptions]=useState([])
const [obj,setObj]=useState({})
function extractInput(e){
  e.preventDefault();
  setInputValue(Number(e.target.value));
}

useEffect(()=>{

  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${inputCurrency}.json`)
  .then((res)=>res.json())
  .then((res)=>{
    setObj(res)
    setOptions(Object.keys(res[inputCurrency]))
    console.log("Fetch Api invoked !")
    
  })
},[inputCurrency])

function handleClick(){
  setResult(obj[inputCurrency][targetCurrency] * inputValue)
}


  return (
    <>
      <div className='box'>
      <InputForm  label={"from"} inputValue={inputValue} handleInput={extractInput} currency={inputCurrency} handleCurrency={setInputCurrency} readonly={false} options={options}/> 
      <InputForm label={"to"} inputValue={result} currency={targetCurrency} handleCurrency={setTargetCurrency} readonly={true} options={options} />
      <button onClick={handleClick}>convert from {inputCurrency} to {targetCurrency}</button>
      </div>
    </>
    )
}

export default App

// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json 