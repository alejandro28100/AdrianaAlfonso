import PropTypes from "prop-types";

const EducationDetail = (props) => {
    let { image, heading, description, first } = props;
    let isDescriptionList = typeof description === "object";
    return (
        <figure className={`flex my-4 lg:my-0 ${!first && "mt-4 lg:mt-12"}`}>
            <img className="w-8 h-8 lg:w-12 lg:h-12" src={image} alt={heading} />
            <figcaption className=" mx-2 lg:mx-4 lg:pr-8">
                <h2 className="text-sm md:text-base font-bold">{heading}</h2>
                {isDescriptionList
                    ? (
                        <ul className="lg:ml-4 text-xs lg:text-base font-light italic">
                            {description.map((text, index) => (
                                <li className="list-disc" key={index}>{text}</li>
                            ))}
                        </ul>
                    )
                    : (
                        <p className="text-xs lg:text-base font-light italic">
                            {description}
                        </p>
                    )
                }
            </figcaption>
        </figure>
    )
}

EducationDetail.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.string,
        ),
    ]).isRequired
}

export default EducationDetail;