import React, { Children, cloneElement, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({ children, width, alignment }) => {
    return (
        <div className={`pointer-events-none inline-flex flex-shrink-0 items-center ${alignment === "left" ? "lg:justify-start" : "lg:justify-end"} justify-center h-full box-content`} style={{ width: width }}>
            {children}
        </div>
    )
}

const Carousel = ({ children, speed, onChange, bulletsColor }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    let childrenCount = Children.count(children);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = childrenCount - 1;
        }
        if (newIndex >= childrenCount) {
            newIndex = 0;
        }
        onChange({ newSlideIndex: newIndex })
        setActiveSlide(newIndex);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeSlide + 1),
        onSwipedRight: () => updateIndex(activeSlide - 1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                updateIndex(activeSlide + 1);
            }
        }, speed)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [activeSlide, isPaused, speed, updateIndex]);

    return (
        <div className="overflow-hidden relative"
            {...swipeHandlers}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="whitespace-nowrap h-full flex items-center transition-transform ease duration-300"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {Children.map(children, (child, index) => {
                    return cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="space-x-5 absolute bottom-0 mx-auto w-full m-2 flex justify-center items-center">
                {
                    Children.map(children, (_, index) => {
                        const isChildActive = activeSlide === index;
                        return (
                            <button className={`rounded-full ${isChildActive && "opacity-100 w-4 h-4"} opacity-60 w-3 h-3 ${bulletsColor === "light" ? "bg-white" : "bg-black"} shadow-lg cursor-pointer transition-all ease duration-300`} onClick={() => {
                                updateIndex(index);
                            }} />
                        )
                    })
                }
            </div>

        </div>
    )
}

Carousel.propTypes = {
    speed: PropTypes.number.isRequired,
}

export default Carousel
