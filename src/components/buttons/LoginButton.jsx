import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginButton = () => {
    return (
        <NavLink to="/login" className="py-2 px-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-900">
            Login
        </NavLink>
    )
}

export default LoginButton