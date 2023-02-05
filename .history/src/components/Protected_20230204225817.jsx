import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const Protected = ({ isLoggedIn }) => {
    return isLoggedIn ? <Outlet /> : <Home />
}

export default Protected