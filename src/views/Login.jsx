import React, { useContext, useRef } from 'react'
import logo_transparent from '../assets/logo/logo_transparent.png'
import { authContext } from '../context/ContextProvider'

import { post } from '../api'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const { setAuth } = useContext(authContext)

    const email = useRef()

    const password = useRef()


    const navigate = useNavigate()



    const login = (event) => {
        event.preventDefault()

        post("/api/auth/login", {
            email: email.current.value,
            password: password.current.value
        })
            .then(data => {

                const { token, user } = data.data
                localStorage.setItem("token", token)
                setAuth({
                    id: user.id,
                    name: user.name,
                    role: user.role,
                    logged: true
                })

                navigate("/home")
              

            })
            .catch(error => {
                alert("Usuario o contraseña no encontrados")
                console.log(error);
                email.current.value = ""
                password.current.value = ""
            })

    }

    return (
        <main className="h-screen flex items-center justify-center">
            <form className='w-9/12 h-3/6 flex flex-col justify-center' onSubmit={login}>
                <div className="mb-6">
                    <img src={logo_transparent} alt="" className='w-1/2 mx-auto' />
                </div>
                <div className="mb-6 w-full">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" ref={email} required />
                </div>
                <div className="mb-6 w-full">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={password} required />
                </div>
                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800">Login</button>
            </form>
        </main>

    )
}

export default Login


// body
// email
// password