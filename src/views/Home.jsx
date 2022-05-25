import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from '../components/screen/Slider'
// import styled from 'styled-components'

// import { Link } from 'react-router-dom'

import { authContext } from '../context/ContextProvider'
// import { getWithToken } from '../api'

const Home = () => {

    const { auth } = useContext(authContext)
    const navigate = useNavigate()

    if (auth.logged) {
        navigate("/home")
    }

    return (

        <main className="min-h-screen">
            <Slider />
            <section className="container mt-20 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-cristal h-96">
                    <div className="text-center flex justify-center items-center">
                        <h1 className="text-5xl">
                            Quienes somos?
                        </h1>
                    </div>
                    <div className="text-center flex justify-center items-center">
                        <p className="text-lg">
                            Somos una empresa destinada a ayudar a personas a buscar comodidad con empresas reconocidas a nivel mundial
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

// const Titulo = styled.p`
//     font-size: 18px;
//     font-weight: 700;
//     text-transform: uppercase;
//     margin-bottom: 10px;
// `;

export default Home