import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo_transparent from '../../assets/logo/logo_transparent.png'
import { authContext } from '../../context/ContextProvider'
import Dropdown from '../buttons/Dropdown'
import LoginButton from '../buttons/LoginButton'
import Signup from '../buttons/Signup'
const Header = () => {

    const { auth } = useContext(authContext)


    return (
        <header>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo_transparent} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">FindIt.com</span>
                    </NavLink>
                    <div className="flex items-center md:order-2">
                        {/* Aqui iria tanto dropdown como login buttons*/}
                        {auth.logged && (<Dropdown />)}
                        {!auth.logged && (<LoginButton />)}
                        {!auth.logged && (<Signup />)}
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        {/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <NavLink to="/" className="py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</NavLink>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Header