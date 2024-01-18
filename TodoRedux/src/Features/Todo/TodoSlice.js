import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers :{
        addTodo : (state,action)=>{

            const curTodo ={
                id :nanoid(),
                text:action.payload
            }

            state.todos.push(curTodo)
        },

        removeTodo : (state,action)=>{
            
            console.log("function invoked!")
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload.id)

        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions;

export default todoSlice.reducer;