import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home'

const Protected = ({ isLoggedIn, isLoggedInSet }) => {
    return isLoggedIn ? <Outlet /> : <Home isLoggedInSet={isLoggedInSet}/>
}

export default Protected