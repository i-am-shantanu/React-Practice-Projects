import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm.jsx'
function App() {
const [inputValue,setInputValue]=useState(0)
const [inputCurrency,setInputCurrency]=useState("usd")
const [targetCurrency,setTargetCurrency]=useState("inr")
const [result,setResult]=useState(0)

function extractInput(e){
  e.preventDefault();
  setInputValue(Number(e.target.value));
}


  return (
    <>
      <div className='box'>
      <InputForm  label={"from"} inputValue={inputValue} handleInput={extractInput} currency={inputCurrency} handleCurrency={setInputCurrency} readonly={false}/> 
      <InputForm label={"to"} />
      </div>
    </>
    )
}

export default App
