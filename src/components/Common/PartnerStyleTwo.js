import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        768:{
            items:4,
        },
        1200:{
            items:6,
        }
    }
}

const query = graphql`
    {
        strapiPartner {
            subTitle
            helperText
            btnText
            btnLink
            infoText
            infoLink
            partnerTitle
            partnerLogo {
                id
                mainImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                hoverImg {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                link
            }
        }
    }
`

const PartnerStyleTwo = () => {
    const data = useStaticQuery(query)
    const {
        strapiPartner
    } = data

    // Slider
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="repair-partner-area bg-f9fafb">
            <div className="container">
                {display ? <OwlCarousel 
                    className="repair-partner-slides owl-carousel owl-theme"
                    {...options}
                >
                    {strapiPartner.partnerLogo.map(pLogo => (
                        <div className="single-repair-partner" key={pLogo.id}>
                            <a href={pLogo.link} target="_blank" rel="noreferrer">
                                <img 
                                    src={pLogo.mainImg.childImageSharp.fluid.src}
                                    alt="partner" 
                                />
                                <img 
                                    src={pLogo.hoverImg.childImageSharp.fluid.src}
                                    alt="partner" 
                                />
                            </a>
                        </div>
                    ))}
                </OwlCarousel> : ''}
            </div>
        </div>
    );
}

export default PartnerStyleTwo;
