import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../Features/Todo/TodoSlice'

 const store = configureStore({
    reducer:todoReducers
})

export default store