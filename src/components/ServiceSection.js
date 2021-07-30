import React, { useState } from 'react'
import ReactDOMServer from "react-dom/server";
import { SwiperSlide, Swiper } from "swiper/react"
import SwiperCore, { Pagination, Autoplay } from "swiper"

import PropTypes from "prop-types";

SwiperCore.use([Pagination, Autoplay]);

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
        <div className="w-screen h-screen flex-col lg:flex-row flex">
            <article style={{ minWidth: "500px" }} className={`flex flex-col justify-center flex-1 py-12 px-20 lg:px-16 text-center ${props.infoAlignment === "left" ? "lg:text-left" : "lg:text-right"}  `} >
                <h1 className="font-ArimaMadurai text-4xl lg:text-6xl leading-tight">{props.serviceName}</h1>
                <hr style={{ background: labelColor }} className={`transition-colors ease-in-out duration-300 h-1.5 bg-black my-2 w-1/2 md:w-1/6 mx-auto ${props.infoAlignment === "left" ? "lg:mx-0 lg:mr-auto" : "lg:mx-0 lg:ml-auto"}`} />
                <p className="uppercase lg:text-lg">{props.serviceDescription}</p>
            </article>
            <Swiper
                autoplay={{
                    delay: props.imagesDelay,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                pagination={{
                    type: "bullets",
                    bulletActiveClass: "active",
                    bulletClass: `bullet ${props.bulletsColor === "dark" ? "dark" : "light"}`

                }}
                className={`w-full 
                    ${props.infoAlignment === "left"
                        ? "lg:order-last"
                        : "lg:order-first"
                    }`}
                {...swiperSettings}
            >
                {props.images.map(({ source, alt, containerClassNames }, index) => (
                    <SwiperSlide className={`${containerClassNames ? containerClassNames : ""}`} key={index}>
                        <img
                            className={`h-full object-contain mx-auto lg:mx-0
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

        </div>
    )
}

ServiceSection.defaultProps = {
    imagesDelay: 3000,
    infoAlignment: "left",
    bulletsColor: "light"
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
    imagesDelay: PropTypes.number,
    bulletsColor: PropTypes.oneOf(["dark", "light"]).isRequired,
    infoAlignment: PropTypes.oneOf(["left", "right"]).isRequired,
    serviceName: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    serviceDescription: PropTypes.string.isRequired,
}

export default ServiceSection
