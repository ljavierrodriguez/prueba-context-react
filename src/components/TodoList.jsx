import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoProvider'
import DeleteTodo from './DeleteTodo'

const TodoList = () => {

    const { state, dispatch } = useContext(TodoContext)

    return (
        <ul className="list-group">
            {
                state.todos.map((task) => {
                    return (
                        <li className='list-group-item list-group-item-action d-flex justify-content-between' key={task.id}>
                            <span>{task.text}</span>
                            <DeleteTodo id={task.id} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList