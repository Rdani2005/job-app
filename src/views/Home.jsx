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

            <main>
                <Slider />
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