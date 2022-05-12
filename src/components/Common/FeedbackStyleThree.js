import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
 
// Shape Images
import AgencyUser1 from "../../assets/images/agency-image/agency-user1.png";
import AgencyUser2 from "../../assets/images/agency-image/agency-user2.png";
import AgencyUser3 from "../../assets/images/agency-image/agency-user3.png";
import AgencyUser4 from "../../assets/images/agency-image/agency-user4.png";
import AgencyUser5 from "../../assets/images/agency-image/agency-user5.png";
import AgencyUser6 from "../../assets/images/agency-image/agency-user6.png";

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

const FeedbackStyleThree = () => {

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
                <div className="section-title st-fs-28">
                    <h2>{strapiFeedback.title}</h2>
                    <div className="bar"></div>
                    <p>{strapiFeedback.shortText}</p>
                </div>

                {display ? <OwlCarousel 
                    className="ml-feedback-slides owl-carousel owl-theme"
                    {...options}
                >  
                    {strapiFeedback.feedbackItem.map(item => (
                        <div className="single-testimonials-item" key={item.id}>
                            <p>{item.feedbackText}</p>
                            <div className="client-info">
                                <img 
                                    src={item.image.childImageSharp.fluid.src}
                                    alt="Client Image"
                                />
    
                                <div className="rating">
                                    {item.starRating.map(rating => (
                                        <div className="icon" key={rating.id}>
                                            <i className={rating.icon} />
                                        </div>
                                    ))}
                                </div>
                                 
                                <h3>{item.name}</h3>
                                <span>{item.designation}</span>
                            </div>
                        </div> 
                    ))}
                </OwlCarousel> : ''}
            </div>

            {/* Shape Images */}
            <div className="user-shape1">
                <img src={AgencyUser1} alt="shape" />
            </div>
            <div className="user-shape2">
                <img src={AgencyUser2} alt="shape" />
            </div>
            <div className="user-shape3">
                <img src={AgencyUser3} alt="shape" />
            </div>
            <div className="user-shape4">
                <img src={AgencyUser4} alt="shape" />
            </div>
            <div className="user-shape5">
                <img src={AgencyUser5} alt="shape" />
            </div>
            <div className="user-shape6">
                <img src={AgencyUser6} alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleThree;