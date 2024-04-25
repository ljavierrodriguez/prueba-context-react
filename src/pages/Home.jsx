import React from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                </div>
                <div className="col-md-12 d-flex align-item-center justify-content-between">
                    <h2>Listado de Tareas</h2><AddTodo />
                </div>
                <div className="col-md-12">
                    <TodoList />
                </div>
            </div>
        </div>
    )
}

export default Home