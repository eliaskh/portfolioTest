import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

// Shape Images
import Shape1 from "../../assets/images/shape1.png";
import Shape2 from "../../assets/images/shape2.svg";
import Shape3 from "../../assets/images/shape3.svg";
import Shape4 from "../../assets/images/shape4.svg";

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: false,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    items: 1,
    animateOut: 'fadeOut',
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

const FeedbackStyleFour = () => {

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
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>{strapiFeedback.title}</h2>
                    <div className="bar"></div>
                    <p>{strapiFeedback.shortText}</p>
                </div>

                {display ? <OwlCarousel 
                    className="ml-feedback-slides owl-carousel owl-theme"
                    {...options}
                > 
                    {strapiFeedback.feedbackItem.map(item => (
                        <div className="single-ml-feedback-item" key={item.id}>
                            <div className="client-info">
                                <img 
                                    src={item.image.childImageSharp.fluid.src}
                                    alt="Client Image"
                                />
                                <h3>{item.name}</h3>
                                <span>{item.designation}</span>
                            </div>

                            <p>{item.feedbackText}</p>
                            
                            <div className="rating">
                                {item.starRating.map(rating => (
                                    <div className="icon" key={rating.id}>
                                        <i className={rating.icon} />
                                    </div>
                                ))}
                            </div>
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
            <div className="shape3">
                <img src={Shape3} alt="shape" />
            </div>
            <div className="shape4">
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

export default FeedbackStyleFour;