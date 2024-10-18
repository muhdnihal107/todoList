import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push({
                id:Date.now(),
                text:action.payload,
                done:false
            })
        },
        doneTodo:(state,action)=>{
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.done = !todo.done;
        }
    },
}
}) 
export default todoSlice.reducer
export const {addTodo,doneTodo} = todoSlice.actions