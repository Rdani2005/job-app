import React, { useCallback, useEffect, useRef } from 'react'

import { ReactComponent as Left } from '../../assets/arrows/Left.svg'
import { ReactComponent as Right } from '../../assets/arrows/Right.svg'


import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'

import styled from 'styled-components'

const Slider = ({
    controles = false,
    autoplay = true,
    velocidad = "5000",
    intervalo = "10000"
}) => {


    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = useCallback(() => {
        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            console.log('Siguiente')

            // Obtenemos el primer elemento del slideshow.
            const primerElemento = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow.
            slideshow.current.style.transition = `${velocidad}ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }

            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transicion);

        }
    }, [velocidad]);

    const anterior = () => {
        console.log('Anterior');
        if (slideshow.current.children.length > 0) {
            // Obtenemos el ultimo elemento del slideshow.
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `${velocidad}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    useEffect(() => {
        if (autoplay) {
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, intervalo);

            // Eliminamos los intervalos
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(intervaloSlideshow.current);
            });

            // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
            slideshow.current.addEventListener('mouseleave', () => {
                intervaloSlideshow.current = setInterval(() => {
                    siguiente();
                }, intervalo);
            });
        }
    }, [autoplay, intervalo, siguiente]);




    return (
        <MainContainer>
            <SlideShowContainer ref={slideshow}>
                <Slide>
                    <a href="/">
                        <img src={img1} alt="" />
                    </a>
                    {/* <SlideText className="">
                        <p>
                            Los mejores buscando empleo
                        </p>
                    </SlideText> */}
                </Slide>
                <Slide>
                    <a href="/">
                        <img src={img2} alt="" />
                    </a>
                    <SlideText className="">
                        {/* <p>
                            Solo profesionales
                        </p> */}
                    </SlideText>
                </Slide>

                <Slide>
                    <a href="/">
                        <img src={img3} alt="" />
                    </a>
                    <SlideText className="">
                        {/* <p>
                            Somos una pagina de confianza
                        </p> */}
                    </SlideText>
                </Slide>
            </SlideShowContainer>


            <Controllers>
                <Button onClick={anterior}>
                    <Left />
                </Button>
                <Button derecho onClick={siguiente}>
                    <Right />
                </Button>
            </Controllers>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    position: relative;
`;

const SlideShowContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    /* max-height: 500px; */
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
`;

const SlideText = styled.div`
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 700px) {
        position: relative;
        background: #000;
    }
`;




const Controllers = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Button = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    /* &:hover {
        background: rgba(0,0,0,.2);
        path {
            fill: #fff;
        }
    } */
    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }
    ${props => props.derecho ? 'right: 0' : 'left: 0'}
`
export default Slider

