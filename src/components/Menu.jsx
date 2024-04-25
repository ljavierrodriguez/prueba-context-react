import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoProvider'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../context/NotificationProvider'

const Menu = () => {
    const { state } = useContext(TodoContext)
    const { state: stateNot } = useContext(NotificationContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='bi bi-bell-fill'></i> ({stateNot?.notifications.length})
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                {
                                    stateNot.notifications.length > 0 ?
                                    stateNot.notifications.map((noti) => {
                                        return (
                                            <li key={noti.id}><a className="dropdown-item" href="#">{noti.description}</a></li>
                                        )
                                    }):(
                                        <li><a className="dropdown-item" href="#">Sin Notificaciones</a></li>
                                    )
                                }
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Ver todas</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Task ({state?.todos.length})
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu