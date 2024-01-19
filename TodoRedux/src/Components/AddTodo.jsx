import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import './AddTodo.css'
import {addTodo} from '../Features/Todo/TodoSlice'
function AddTodo(){

    const[value,setValue]=useState("")
    const dispatch=useDispatch()
    
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(value)
        dispatch(addTodo(value))
        setValue("");
    }

    return(
        <>
        <div className="add-todo-container" onSubmit={(e)=>{handleSubmit(e)}}>
            <form>
                <input placeholder='Enter Task' value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button type='submit' >Add Task</button>
            </form>
        </div>
        </>
    )
}

export default AddTodo;