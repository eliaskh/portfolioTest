import React from 'react';
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby"
 
const query = graphql`
    {
        strapiFunFacts {
            title
            shortText
            card {
                id
                number
                text
            }
            infoTitle
            infoShortText
            contactText
            contactUrl
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

const FunFactsArea = () => {

    const data = useStaticQuery(query)
    const {
        strapiFunFacts
    } = data

    return (
        <div className="funfacts-area ptb-80">
            <div className="container">
                <div className="section-title">
                    <h2>{strapiFunFacts.title}</h2>
                    <div className="bar"></div>
                    <p>{strapiFunFacts.shortText}</p>
                </div>

                <div className="row">
                    {strapiFunFacts.card.map(item => (
                        <div className="col-lg-3 col-md-3 col-6" key={item.id}>
                            <div className="funfact">
                                <h3>{item.number}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="contact-cta-box">
                    <h3>{strapiFunFacts.infoTitle}</h3>
                    <p>{strapiFunFacts.infoShortText}</p>

                    <Link to={strapiFunFacts.contactUrl} className="btn btn-primary">
                        {strapiFunFacts.contactText}
                    </Link>
                </div>

                <div className="map-bg">
                    <img 
                        src={strapiFunFacts.image.childImageSharp.fluid.src}
                        alt="map" 
                    />
                </div>
            </div>
        </div>
    )
}

export default FunFactsArea;