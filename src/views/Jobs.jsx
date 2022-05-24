// ---------------- Libraries ---------------------------
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// ----------- Own Files ------------------------
import { getWithToken } from '../api'
import { authContext } from '../context/ContextProvider'

let getContent = (description) => {
    let content = description.replaceAll('\n', ' ')

    if (content.length > 50) {
        return content.slice(0, 50) + '...'
    }

    return content

}

const Jobs = () => {

    const { auth } = useContext(authContext)
    const [jobs, setJobs] = useState()
    const [loading, setLoading] = useState(true)
    // const [loading, setLoading] = useState(false)
    // Get the jobs
    // useEffect(() => {
    //     getWithToken('/api/jobs')
    //         .then((response) => {
    //             console.log(response.data)

    //             setJobs(response.data)

    //         })
    //         .catch(error => console.log(error))
    //     console.log("jobs: ", jobs)
    // }, [])

    useEffect(() => {
        getWithToken('/api/jobs')
            .then(({ data }) => {
                setJobs(data)
            })
            .catch(error => console.log(error))

    }, [])

    if (!auth.logged) {
        return (
            <main className="h-screen flex justify-center item-center flex-col">
                <h1 className="text-8xl underline text-center">
                    Debes ingresar primero!
                </h1>
                <div className="flex justify-center items-center">
                    <Link to="/" className="my-12 mx-6 py-2 px-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-900">Ir al home</Link>
                    <Link to="/login" className="my-12 mx-6 py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-900">Login</Link>
                </div>
            </main>
        )
    }



    return (
        <main>
            <h1 className="text-center text-xl text-white">
                Empleos Disponibles
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                    jobs && (
                        <>
                            {
                                jobs.map(job => {
                                    return (
                                        <div key={job._id} className="mx-auto md:mx-6 my-6 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                            <Link to={`/jobs/job/${job._id}`}>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {job.title}
                                                </h5>
                                            </Link>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                {
                                                   job.description
                                                }
                                            </p>
                                            <Link to={`/jobs/job/${job._id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Ver Más
                                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </>

                    )
                }

            </div>




        </main>
    )
}

export default Jobs