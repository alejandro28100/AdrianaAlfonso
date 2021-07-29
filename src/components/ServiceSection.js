import React, { useState } from 'react'
import { SwiperSlide, Swiper } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"

import PropTypes from "prop-types";

SwiperCore.use([Navigation, Pagination]);

const ServiceSection = (props) => {

    const [labelColor, setLabelColor] = useState(props.images[0].labelColor);

    const swiperSettings = {
        spaceBetween: 0,
        slidesPerView: 1,
        onSlideChange: (swiper) => {
            let { activeIndex } = swiper;
            let { labelColor } = props.images[activeIndex];
            setLabelColor(labelColor);
        }
    }

    return (
        <div className="w-screen h-screen flex-col lg:flex-row flex" >
            <article className={`flex flex-col w-full justify-center flex-1 py-12 px-5 lg:px-16 text-center ${props.infoAlignment === "left" ? "lg:text-left" : "lg:text-right"}  `} >
                <h1 className="font-ArimaMadurai text-4xl lg:text-6xl leading-tight">{props.serviceName}</h1>
                <hr style={{ background: labelColor }} className={`transition-colors ease-in-out duration-300 h-1.5 bg-black my-2 w-1/2 md:w-1/3 mx-auto ${props.infoAlignment === "left" ? "lg:mx-0 lg:mr-auto" : "lg:mx-0 lg:ml-auto"}`} />
                <p className="uppercase lg:text-lg">{props.serviceDescription}</p>
            </article>
            <Swiper
                className={`w-full lg:w-2/3 
                    ${props.infoAlignment === "left"
                        ? "lg:order-last"
                        : "lg:order-first"
                    }`}
                {...swiperSettings}
            >
                {
                    props.images.map(({ source, alt, containerClassNames }, index) => (
                        <SwiperSlide className={containerClassNames} key={index}>
                            <img
                                className={`h-full object-contain mx-auto
                                    ${props.infoAlignment === "left"
                                        ? "lg:ml-auto lg:mr-1"
                                        : "lg:mr-auto lg:ml-1"
                                    }`}
                                src={source}
                                alt={alt}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

ServiceSection.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            source: PropTypes.string.isRequired,
            labelColor: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            containerClassNames: PropTypes.string,
        }),
    ).isRequired,
    infoAlignment: PropTypes.oneOf(["left", "right"]).isRequired,
    serviceName: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    serviceDescription: PropTypes.string.isRequired,
}

export default ServiceSection
