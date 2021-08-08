import React, { useEffect, useState } from 'react'

import PropTypes from "prop-types";
import { AiOutlineClose } from 'react-icons/ai';
import Carousel, { CarouselItem } from './Carousel';

const ServiceSection = (props) => {

    const [labelColor, setLabelColor] = useState(props.slides[0].labelColor);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let { classList } = document.body;
        if (isModalOpen) {
            return classList.add("overflow-hidden");
        }
        classList.remove("overflow-hidden");
    }, [isModalOpen])

    function handleOnSlideChange({ newSlideIndex }) {
        setLabelColor(props.slides[newSlideIndex].labelColor);
    }

    function toggleModal() {
        const { matches: isNotMobile } = window.matchMedia("(min-width: 500px)")
        if (isNotMobile) {
            setIsModalOpen(prevValue => !prevValue);
        }
    }

    return (
        <section id={props.id} className={`${isModalOpen ? "fixed z-40" : ""} ${props.className} w-screen h-screen flex-col lg:flex-row flex `}>
            {isModalOpen &&
                <>
                    <div onClick={() => toggleModal()} className="fixed w-full h-full inset-0 z-0 bg-black opacity-90" />
                    <button onClick={() => toggleModal()} className="fixed top-0 z-30 right-0 m-5 text-3xl text-white">
                        <AiOutlineClose />
                    </button>
                </>
            }
            <article className={`min-w-0 md:min-w-500 flex flex-col justify-center flex-1 py-12 px-10 lg:px-16 text-center ${props.infoAlignment === "left" ? "lg:text-left" : "lg:text-right lg:order-last"}  `} >
                <h1 className="font-ArimaMadurai text-4xl lg:text-6xl leading-tight">{props.serviceName}</h1>
                <hr style={{ background: labelColor }} className={`transition-colors ease-in-out duration-300 h-1.5 bg-black my-2 w-1/2 md:w-1/6 mx-auto ${props.infoAlignment === "left" ? "lg:mx-0 lg:mr-auto" : "lg:mx-0 lg:ml-auto"}`} />
                <p className="uppercase lg:text-lg">{props.serviceDescription}</p>
            </article>
            <Carousel bulletsColor={props.bulletsColor} onChange={handleOnSlideChange} speed={props.slidesDelay}>
                {
                    props.slides.map(({ source, alt, component: Component, type }, index) => {
                        return type !== "component"
                            ? <CarouselItem alignment={props.infoAlignment === "left" ? "right" : "left"} key={index}>
                                <img className="object-contain h-full" src={source} alt={alt} />
                            </CarouselItem>
                            : <CarouselItem alignment={props.infoAlignment === "left" ? "right" : "left"} key={index}>
                                <Component />
                            </CarouselItem>
                    })
                }
            </Carousel>
        </section>
    )
}

ServiceSection.defaultProps = {
    infoAlignment: "left",
    bulletsColor: "light",
    slidesDelay: 3000,
}

ServiceSection.propTypes = {
    id: PropTypes.string,
    slidesDelay: PropTypes.number.isRequired,
    slides: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                source: PropTypes.string.isRequired,
                labelColor: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
            }),
            PropTypes.element
        ])
    ).isRequired,
    imagesDelay: PropTypes.number,
    bulletsColor: PropTypes.oneOf(["dark", "light"]).isRequired,
    infoAlignment: PropTypes.oneOf(["left", "right"]).isRequired,
    serviceName: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    className: PropTypes.string,
    serviceDescription: PropTypes.string.isRequired,
}

export default ServiceSection
