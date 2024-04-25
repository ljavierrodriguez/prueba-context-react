import React from 'react'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>About</h1>
                </div>
                <div className="col-md-12 d-flex align-item-center justify-content-between">
                    <h2>Contenido About</h2><AddTodo />
                </div>
            </div>
        </div>
    )
}

export default About