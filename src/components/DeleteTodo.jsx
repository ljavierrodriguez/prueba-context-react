import React, { useContext} from 'react'
import { TodoContext } from '../context/TodoProvider'

const DeleteTodo = ({ id }) => {

    const { dispatch } = useContext(TodoContext)

    const deleteTodo = id => {
        dispatch({ type: 'DELETE_TODO', payload: id })
    }

    return (
        <button className='btn btn-danger btn-sm' onClick={() => deleteTodo(id)}>
            <i className="bi bi-trash-fill"></i>
        </button>
    )
}

export default DeleteTodo