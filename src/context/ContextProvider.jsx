import React, { createContext, useEffect, useState } from "react";

import {  postWithToken } from '../api'

export const authContext = createContext()


export default function ContextProvider({ children }) {


    const [auth, setAuth] = useState(
        {
            id: "",
            name: "",
            email: "",
            role: "",
            logged: false
        }
    )

    const [typeAccount, setTypeAccount] = useState("")

    const [jobs, setJobs] = useState()


    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {

            postWithToken('/api/auth/validate')
                .then((data) => {
                    const { user } = data.data
                    setAuth({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        logged: true
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }


    }, [])


    return (
        <authContext.Provider
            value={{
                auth, setAuth,
                typeAccount, setTypeAccount,
                jobs, setJobs
            }}
        >
            {children}
        </authContext.Provider>
    )
}