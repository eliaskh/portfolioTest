import React from 'react';
import { Link } from "gatsby";

import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
{   
    strapiOurFeaturesHeader {
        title
        shortText
    }
    allStrapiOurFeatures {
        nodes {
            icon
            title
            shortText
            longDescription
            slug
        }
    }
}
`

const OurFeatures = () => {
    const data = useStaticQuery(query)
    const {
        strapiOurFeaturesHeader: {title, shortText},
        allStrapiOurFeatures: {nodes: ourfeatures}
    } = data
    return (
        <div className="features-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                    <div className="bar"></div>
                    <p>{shortText}</p>
                </div>

                <div className="row justify-content-center">
                    {ourfeatures.map((featureinfo, idx) => (
                        <div className="col-lg-6 col-md-6" key={idx}>
                            <div className="single-features">
                                <div className="icon">
                                    <i className={featureinfo.icon}></i>
                                </div>
                                <h3>
                                    <Link to={`/features/${featureinfo.slug}`}>
                                        {featureinfo.title}
                                    </Link>
                                </h3>
                                <p>{featureinfo.shortText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurFeatures;  