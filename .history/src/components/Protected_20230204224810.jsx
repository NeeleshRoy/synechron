import React from 'react'

const useAuth = () => {
    const user = {
        loggedIn: false
    }
    return user && user.loggedIn
}

const Protected = () => {
  return (
    <div>Protected</div>
  )
}

export default Protected