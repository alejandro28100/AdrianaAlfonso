import React from 'react'
import { SwiperSlide, Swiper } from "swiper/react"

import PropTypes from "prop-types";


const ServiceSection = (props) => {

    const swiperSettings = {
        spaceBetween: 0,
        slidesPerView: 1,
        onSlideChange: () => console.log("Slide change"),
    }

    return (
        <div style={{ width: "100vw", height: "100vh", display: 'flex' }}>
            <article style={{ flexGrow: "1", padding: "65px" }}>
                <h2>{props.serviceName}</h2>
                <p>{props.serviceDescription}</p>
            </article>
            <Swiper style={{ maxWidth: "60%" }}  {...swiperSettings} >
                {
                    props.images.map(({ source }, index) => (
                        <SwiperSlide style={{ background: "lightyellow" }} key={index}>
                            <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={source} alt="" />
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
            // labelColor: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    descriptionAlignment: PropTypes.oneOf(["left", "right"]).isRequired,
    serviceName: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
}

export default ServiceSection
