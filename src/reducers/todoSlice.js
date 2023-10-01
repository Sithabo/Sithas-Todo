import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'TODOS',
    initialState: [],
    reducers: {
        addTodo: (todos, action) => {
                if(action.payload !== '') {
                    todos.push({id: Date.now(), name: action.payload.name, completed: false, notes: action.payload.note})
                }
            },
            removeTodo: (todos, action) => {
                const splicedElement = todos.findIndex(item => item.id === action.payload.id);
                todos.splice(splicedElement, 1)
            },
            toggleCompletion: (todos, action) => {
                const splicedElement = todos.findIndex(item => item.id === action.payload.id);
                todos[splicedElement].completed = !todos[splicedElement].completed
            }
        }  
    }
)

export const {addTodo, removeTodo, toggleCompletion} = todoSlice.actions;
export default todoSlice.reducer;