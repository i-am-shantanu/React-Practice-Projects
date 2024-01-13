import { useState } from 'react'
import Card from './Components/Card'
import Button from './Components/Button'
import ThemeContextProvider from './Context/ThemeContextProvider'
import './App.css'

function App() {
  


  return (
    <>
    <ThemeContextProvider>
    <Card/>
     <Button />
    </ThemeContextProvider>
      

    </>
  )
}

export default App
