
import './App.css'
import {createBrowserRouter,Route,RouterProvider, createRoutesFromElements} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Help from './Components/Help'
import Faq from './Components/Faq'
import NotFound from './Components/NotFound'
import UserData, { UserDataLoader } from './Components/UserData'
function App() {

  const router=createBrowserRouter(

    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='help' element={<Help/>}>
          <Route path='faq' element={<Faq/>}/>
        </Route>
        <Route path='user' element={<UserData/>} loader={UserDataLoader}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
