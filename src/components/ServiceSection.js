import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

import PropTypes from "prop-types";
import { AiOutlineClose } from 'react-icons/ai';

SwiperCore.use([Pagination, Autoplay]);

const ServiceSection = (props) => {

    const [labelColor, setLabelColor] = useState(props.images[0].labelColor);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const swiperSettings = {
        spaceBetween: 0,
        slidesPerView: 1,
        onSlideChange: (swiper) => {
            let { activeIndex } = swiper;
            let { labelColor } = props.images[activeIndex];
            setLabelColor(labelColor);
        }
    }

    useEffect(() => {
        let { body } = document;
        if (isModalOpen) {
            return body.classList.add("overflow-hidden");
        }
        body.classList.remove("overflow-hidden");
    }, [isModalOpen])


    function toggleModal() {
        const { matches: isNotMobile } = window.matchMedia("(min-width: 500px)")
        if (isNotMobile) {
            setIsModalOpen(prevValue => !prevValue);
        }
    }

    return (
        <section id={props.id} className={`${isModalOpen ? "fixed z-20" : ""} ${props.className} w-screen h-screen flex-col lg:flex-row flex relative`}>
            {isModalOpen &&
                <>
                    <div onClick={() => toggleModal()} className="fixed w-full h-full inset-0 z-0 bg-black opacity-90" />
                    <button onClick={() => toggleModal()} className="fixed top-0 z-40 right-0 m-5 text-3xl text-white">
                        <AiOutlineClose />
                    </button>
                </>
            }
            <article className={`min-w-0 md:min-w-500 flex flex-col justify-center flex-1 py-12 px-20 lg:px-16 text-center ${props.infoAlignment === "left" ? "lg:text-left" : "lg:text-right"}  `} >
                <h1 className="font-ArimaMadurai text-4xl lg:text-6xl leading-tight">{props.serviceName}</h1>
                <hr style={{ background: labelColor }} className={`transition-colors ease-in-out duration-300 h-1.5 bg-black my-2 w-1/2 md:w-1/6 mx-auto ${props.infoAlignment === "left" ? "lg:mx-0 lg:mr-auto" : "lg:mx-0 lg:ml-auto"}`} />
                <p className="uppercase lg:text-lg">{props.serviceDescription}</p>
            </article>
            <Swiper
                autoHeight={isModalOpen}
                onClick={() => toggleModal()}
                autoplay={{
                    delay: props.imagesDelay,
                    pauseOnMouseEnter: false,
                    disableOnInteraction: true
                }}
                pagination={{
                    type: "bullets",
                    bulletActiveClass: "active",
                    bulletClass: `bullet ${props.bulletsColor === "dark" ? "dark" : "light"}`

                }}
                style={{
                    position: isModalOpen ? "fixed" : "relative"
                }}
                className={`
            ${isModalOpen && "inset-0 z-30"}
            ${props.infoAlignment === "left"
                        ? "lg:order-last"
                        : "lg:order-first"
                    }`}
                {...swiperSettings}
            >
                {props.images.map(({ source, alt }, index) => (
                    <SwiperSlide className={`${isModalOpen && "h-screen p-5 md:p-10"}`} key={index}>
                        <img
                            className={`h-full object-contain mx-auto ${!isModalOpen && "lg:mx-0"}
                                ${props.infoAlignment === "left"
                                    ? "lg:ml-auto"
                                    : "lg:mr-auto"
                                }
                            `}
                            src={source}
                            alt={alt}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

ServiceSection.defaultProps = {
    imagesDelay: 3000,
    infoAlignment: "left",
    bulletsColor: "light"
}

ServiceSection.propTypes = {
    id: PropTypes.string,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            source: PropTypes.string.isRequired,
            labelColor: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            containerClassNames: PropTypes.string,
        }),
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
