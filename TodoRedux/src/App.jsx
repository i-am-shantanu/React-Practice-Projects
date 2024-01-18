import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'
function App() {

  return (
    <>
      <AddTodo />
      <div className="todo">
      <Todo/>
      </div>
      
    </>
  )
}

export default App
