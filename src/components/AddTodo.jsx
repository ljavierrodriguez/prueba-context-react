import React, { useContext, useState} from 'react'
import { TodoContext } from '../context/TodoProvider'
import { NotificationContext } from '../context/NotificationProvider';

const AddTodo = () => {
    const { dispatch } = useContext(TodoContext)
    const { dispatch: dispatchNoti } = useContext(NotificationContext);
    const [task, setTask] = useState('')

    const saveTodo = task => {
        dispatch({ type: 'ADD_TODO', payload: { id: new Date(), text: task }})
        dispatchNoti({ type: 'ADD_NOTIFICATION', payload: { id: new Date(), description: 'Ha añadido una nueva tarea' } })
        setTask('');
    }

    return (
        <>
            <button type="button" class="btn btn-primary btn-sm mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Todo
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">ADD TODO</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className="form-control" placeholder='Insert Task' value={task} onChange={(e) => setTask(e.target.value)} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => saveTodo(task)}>Save TODO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTodo