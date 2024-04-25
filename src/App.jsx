import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import TodoProvider from './context/TodoProvider'
import Menu from './components/Menu'
import NotificationProvider from './context/NotificationProvider'

const App = () => {
    return (
        <TodoProvider>
            <NotificationProvider>
                <BrowserRouter>
                    <Menu />
                    <Routes>
                        <Route path='/about' element={<About />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </NotificationProvider>
        </TodoProvider>
    )
}

export default App