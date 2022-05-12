import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape4 from "../../assets/images/shape4.svg";
import Shape5 from "../../assets/images/shape5.png";

import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
}

const query = graphql`
    {
        strapiFeedback {
            title
            shortText
            feedbackItem {
                id
                name
                designation
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                feedbackText
                starRating {
                    id
                    icon
                }
            }
        }
    }
`

const FeedbackStyleTwo = () => {

    const data = useStaticQuery(query)
    const {
        strapiFeedback
    } = data

    // Slider
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>{strapiFeedback.title}</h2>
                    <div className="bar"></div>
                    <p>{strapiFeedback.shortText}</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                >
                    {strapiFeedback.feedbackItem.map(item => (
                        <div className="single-feedback-item" key={item.id}>
                            <div className="client-info align-items-center">
                                <div className="image">
                                    <img 
                                        src={item.image.childImageSharp.fluid.src}
                                        alt="Client Image"
                                    />
                                </div>

                                <div className="title">
                                    <h3>{item.name}</h3>
                                    <span>{item.designation}</span>
                                </div>
                            </div>
                            <p>{item.feedbackText}</p>
                        </div> 
                    ))}
                </OwlCarousel> : ''}
            </div>

            {/* Shape Images */}
            <div className="shape1">
                <img src={Shape1} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape5">
                <img src={Shape5} alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleTwo;
