import React, { useContext, useState } from 'react'
import { authContext } from '../../context/ContextProvider'
import { Link, useNavigate } from 'react-router-dom'
const Dropdown = () => {

    const [options, setOptions] = useState(false)

    const { auth, setAuth } = useContext(authContext)

    const navigate = useNavigate()

    const handleOptionClick = () => {
        setOptions(!options)
    }


    const handleLogOut = () => {
        localStorage.removeItem("token")
        setAuth({
            logged: false,
            name: "",
            id: ""
        })
        navigate("/")
    }


    return (
        <>
            <button

                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleOptionClick}
            >
                Perfil
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            {
                options && (
                    <div id="dropdownNavbar" className="mt-72 mr-52 absolute z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <Link to="/home" className='block px-4 py-2 text-white my-5'>

                                    {auth.name}
                                </Link>
                                <p className='block px-4 py-2 text-xs dark:hover:text-white mb-5'>
                                    {auth.role}
                                </p>
                            </li>
                            {
                                (auth.role === "applicant") && <li>
                                    <Link to="/jobs/apply" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Trabajos Aplicados
                                    </Link>
                                </li>
                            }
                            {
                                (auth.role === "employer") && <li>
                                    <Link to="/jobs/apply" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Empleos Subidos
                                    </Link>
                                </li>
                            }
                        </ul>
                        <div className="py-1">
                            <button
                                onClick={handleLogOut}
                                className="block mx-auto my-2 px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-700 rounded"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>

                )
            }

        </>

    )
}

export default Dropdown