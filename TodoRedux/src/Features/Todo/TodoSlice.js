import { createSlice,nanoid } from "@reduxjs/toolkit";

let prevData=[];

function getinitialState(){
     const temp= JSON.parse(window.localStorage.getItem("todos"))

     if(temp.length>0)
     prevData=temp;

}

getinitialState();
const initialState = {

    todos:prevData
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
            
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload.id)

        },

        restoreData : (state,action)=>{

                if(action.payload.length >0)
                state.todos=action.payload;
        }
    }
})

export const {addTodo,removeTodo,restoreData}=todoSlice.actions;

export default todoSlice.reducer;