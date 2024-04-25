import React, { Children, createContext, useReducer } from 'react'

export const NotificationContext = createContext()

const NotificationProvider = ({ children }) => {

  const initialState = {
    notifications: []
  }

  const notificationReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return { notifications: [...state.notifications, action.payload] } // { id: 1, text: 'Hola Mundo'}
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(notificationReducer, initialState)

  return <NotificationContext.Provider value={{ state, dispatch }}>{children}</NotificationContext.Provider>

}

export default NotificationProvider