import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'

function App() {


  return (
    <>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default App
