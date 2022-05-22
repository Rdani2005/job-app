import React, { createContext, useState } from "react";

export const authContext = createContext()

export default function ContextProvider({ children }) {
    const [auth, setAuth] = useState(
        {
            id: "",
            name: "",
            logged: false
        }
    )

    const [typeAccount, setTypeAccount] = useState("")

    const [jobs, setJobs] = useState()
        

    return (
        <authContext.Provider
            value={{
                auth,setAuth,
                typeAccount, setTypeAccount,
                jobs, setJobs
            }}
        >
            {children}
        </authContext.Provider>
    )
}