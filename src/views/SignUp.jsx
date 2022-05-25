import React, { useContext, useRef, useState } from 'react'
import { post } from '../api'
import { authContext } from '../context/ContextProvider'
import logo_transparent from '../assets/logo/logo_transparent.png'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const { setAuth } = useContext(authContext)

    const name = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const role = useRef()
    
    const navigate = useNavigate()
    // Define error handles
    const [error, setError] = useState({
        isError: false,
        message: "",
        loading: false
    })
    // Send a new user throw the API
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(role.current.value)
        setError({ ...error, loading: true })
        post("/api/auth/signup", {
            name: name.current.value + " " + lastName.current.value,
            email: email.current.value,
            password: password.current.value,
            role: role.current.value
        })
            .then(({ data }) => {
                setError({ ...error, loading: false })
                localStorage.setItem("token", data.token)
                setAuth({
                    id: data.user.id,
                    name: data.user.name,
                    email: data.user.email,
                    role: data.user.role,
                    logged: true
                })
                navigate('/home')
            })
            .catch(error => {
                setError({
                    isError: true,
                    message: error.response.data.message,
                    loading: false
                })

                alert(error.response.data.message)
            })
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-9/12 flex flex-col justify-center">
                <div className="mb-6">
                    <img src={logo_transparent} alt="" className='w-1/2 mx-auto' />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input ref={email} type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input ref={password} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input ref={name} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input ref={lastName} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your role</label>
                    <select ref={role} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="applicant">Applicant</option>
                        <option value="employer">Employer</option>

                    </select>
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
            </form>
        </main>
    )
}

export default SignUp

// El Body debe de ser

// name
// email
// password
// role


// Roles disponibles:
// admin
// applicant
// employer