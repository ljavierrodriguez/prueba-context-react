import React, { Children, createContext, useReducer } from 'react'

export const TodoContext = createContext()

const TodoProvider = ({ children }) => {

  const initialState = {
    todos: [],
    notifications: []
  }

  const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return { todos: [...state.todos, action.payload] } // { id: 1, text: 'Hola Mundo'}

      case 'DELETE_TODO':
        return { todos: state.todos.filter((todo) => todo.id !== action.payload) }

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>

}

export default TodoProvider