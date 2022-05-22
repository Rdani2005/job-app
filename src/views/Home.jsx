import React from 'react'
import Slider from '../components/screen/Slider'
import styled from 'styled-components'
const Home = () => {
    return (
        <main>
            <Titulo>Home</Titulo>
            <Slider></Slider>
        </main>
    )
}

const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export default Home