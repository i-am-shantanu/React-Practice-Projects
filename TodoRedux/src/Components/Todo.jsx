import './Todo.css'
import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { removeTodo,restoreData } from '../Features/Todo/TodoSlice';

function Todo()
{
    const todolist=useSelector(state=>state.todos)
    const dispatch=useDispatch();

    function handleclick(e){    
        dispatch(removeTodo({id:e.target.parentElement.id}));
    }
    useEffect(()=>{
        window.localStorage.setItem("todos",JSON.stringify(todolist));
        console.log("data stored successfully !!")
    },[todolist])
    // useEffect(()=>{
    //     const prevData= JSON.parse(window.localStorage.getItem("todos"))
    //     console.log(prevData);
    //     dispatch(restoreData(prevData));
    // },[])
    return(
        <>
        {
            todolist.map((obj)=>{
                return(
                    <div className="todo-container" key={obj.id} id={obj.id}>
                        {obj.text}
                    <button onClick={(e)=>(handleclick(e))}>Delete</button>
                    </div>
                )
            })
        }
        
        </>
    )
}

export default Todo;

{/* <div className="todo-container">
            {todo}
            <button>Delete</button>
 </div> */}