import './Todo.css'
import {useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Features/Todo/TodoSlice';

function Todo()
{
    const todolist=useSelector(state=>state.todos)
    const dispatch=useDispatch();

    function handleclick(e){    
        dispatch(removeTodo({id:e.target.parentElement.id}));
    }
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