import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const useAuth = () => {
    const user = {
        loggedIn: false
    }
    return user && user.loggedIn
}

const Protected = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Home />
}

export default Protected