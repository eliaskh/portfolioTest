import React from 'react'
import CercleShape from "../../assets/images/services-left-image/cercle-shape.png"
import MainStatic from "../../assets/images/why-choose-us-image/main-static.png"

import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
{
    strapiWhyChooseUs {
        titleText
        manImage {
            childImageSharp {
                original {
                    src
                }
            }
        }
        structureImage {
            childImageSharp {
                original {
                    src
                }
            }
        }
        options {
            id
            flatIcon
            title
            description
        }
        description
    }
}
`

const WhyChoose = () => {

    const data = useStaticQuery(query)

    const {
        strapiWhyChooseUs: {
            titleText, 
            description,
            manImage: {
                childImageSharp: manStand
            },
            structureImage: {
                childImageSharp: database
            },
            options
        }
    } = data

    // console.log(options)


    return (
        <div className="why-choose-us ptb-80 pt-0">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-title">
                            <h2>{titleText}</h2>
                            <div className="bar"></div>
                            <p>{description}</p>
                        </div>

                        <div className="why-choose-us-image">
                            <img 
                                src={manStand.original.src}
                                className="animate__animated animate__fadeInLeft" 
                                alt="image"
                            />
                    
                            <img 
                                src={database.original.src}
                                className="animate__animated animate__fadeInRight" 
                                alt="image"
                            />
                
                            <img 
                                src={CercleShape}
                                className="rotateme" 
                                alt="image"
                            />
                
                            <img 
                                src={MainStatic}
                                className="main-pic animate__animated animate__fadeInUp" 
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="row">

                            {options.map(option => (
                                <div className="col-lg-6 col-md-6" key={option.id}>
                                    <div className="single-why-choose-us">
                                        <div className="icon">
                                            <i className={option.flatIcon}></i>
                                        </div>
                                        <h3>{option.title}</h3>
                                        <p>{option.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;
