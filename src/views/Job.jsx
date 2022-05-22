import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getWithToken, putWithToken } from '../api'

const Job = () => {

    const navigate = useNavigate()
    const { id } = useParams()

    const [job, setJob] = useState({})

    useEffect(() => {
        getWithToken(`/api/jobs/${id}`)
            .then((response) => {
                console.log(response.data)

                setJob(response.data)

            })
            .catch(error => console.log(error))
    }, [id])

    const handleApplyJob = () => {
        putWithToken(`/api/jobs/apply/${id}`)
        .then(result => {
            alert("Aplicaste correctamente a esta posición")
            navigate("/home")
            console.log(result)
        })
        .catch(error => console.log(error))

    }

    return (
        <main className="h-screen flex items-center justify-center flex-col">
            <h1 className="text-center text-2xl mb-6">
                {job.title}
            </h1>
            <p>
                {job.description}
            </p>
            <div className="flex justify-center items-center">
                <Link to="/home" className="my-12 mx-6 py-2 px-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-900">Go back</Link>
                <button onClick={handleApplyJob} className="my-12 mx-6 py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-900">
                    Aplicar a Esta posición
                </button>
            </div>
        </main>
    )
}

export default Job