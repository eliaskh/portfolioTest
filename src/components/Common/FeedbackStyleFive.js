import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: false,
    nav: false,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
};

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

const FeedbackStyleFive = () => {
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
        <div className="agency-portfolio-feedback-area ptb-80">
            <div className="container">
                {display ? <OwlCarousel 
                    className="agency-portfolio-feedback-slides owl-carousel owl-theme"
                    {...options}
                >  
                    {strapiFeedback.feedbackItem.map(item => (
                        <div className="agency-portfolio-feedback-item" key={item.id}>
                            <div className="client-info">
                                <img 
                                    src={item.image.childImageSharp.fluid.src}
                                    alt="Client Image"
                                />
                                <h3>{item.name}</h3>
                                <span>{item.designation}</span>
                            </div>

                            <p>{item.feedbackText}</p>
                        </div> 
                    ))}
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default FeedbackStyleFive;  