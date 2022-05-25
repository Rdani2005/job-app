import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { postWithToken, put, putWithToken } from '../api'
import { authContext } from '../context/ContextProvider'

let getContent = (job) => {
    let content = job.description.replaceAll('\n', ' ')

    if (content.length > 50) {
        return content.slice(0, 50) + '...'
    }

    return content

}

const AplyJob = () => {

    const [apllies, setApplies] = useState()

    const { auth } = useContext(authContext)
    useEffect(() => {
        postWithToken('/api/jobs/me')
            .then(({ data }) => {
                setApplies(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const deleteApplication = (event, id) => {
        putWithToken(`/api/jobs/unapply/${id}`)
            .then((res) => {
                console.log(res);
                setApplies(apllies.filter(apply => apply._id !== id))
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <main className='min-h-screen'>
            <h1 className="text-center text-xl text-white">
                Empleos Aplicados
            </h1>
            {
                auth.logged && (

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto">

                        {
                            apllies && (
                                <>
                                    {
                                        apllies.map((job) => {
                                            return (
                                                <div key={job._id} className="mx-6 my-6 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                                    <Link to={`/jobs/job/${job._id}`}>
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                            {job.title}
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                        {
                                                            getContent(job)
                                                        }
                                                    </p>
                                                    <Link to={`/jobs/job/${job._id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        Ver Más
                                                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </Link>
                                                    <button
                                                        onClick={(e) => deleteApplication(e, job._id)}
                                                        className="ml-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                        No aplicar
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        }

                    </div>
                )
            }
        </main>
    )
}

export default AplyJob
// Body
// {
//     "employer":{
//         "id": "6282ff71d83d04d1bb29a387",
//         "name": "Tzuzul",
//         "email": "mail@tzuzulcode.com",
//         "role": "admin"
//     },
//     "description":"Descripción de la oferta de empleo",
//     "title":"Back end developer Node JS, JavaScript, Mongo DB",
//     "category":["Node JS","JavaScript","Mongo DB"],
//     "location":{
//         "country":"México",
//         "province":"CDMX",
//         "City":"CDMX"
//     },
//     "salary":110000
// }