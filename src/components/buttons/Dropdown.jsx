import React, { useContext, useState } from 'react'
import { authContext } from '../../context/ContextProvider'
import { Link } from 'react-router-dom'
const Dropdown = () => {

    const [options, setOptions] = useState(false)

    const { auth, setAuth } = useContext(authContext)


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
    }


    return (
        <>
            <button

                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleOptionClick}
            >
                Perfil
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            {
                options && (
                    <div id="dropdownNavbar" className="mt-52 absolute z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                                <p className='block px-4 py-2 text-white my-5'>

                                    {auth.name}
                                </p>
                            </li>
                            <li>
                                <Link to="/aplicaciones" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Aplicaciones Hechas</Link>
                            </li>
                        </ul>
                        <div className="py-1">
                            <button onClick={handleLogOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</button>
                        </div>
                    </div>

                )
            }

        </>

    )
}

export default Dropdown