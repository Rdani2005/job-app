import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <NavLink to="/SignUp" className="mx-2 py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-900">
            SignUp
        </NavLink>
    )
}

export default Signup