import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
{
    allStrapiTopFeatures {
        nodes {
            icon
            headerText
            shortDescription
            slug
        }
    }
}
`

const TopFeatures = () => {
    const data = useStaticQuery(query)
    const {allStrapiTopFeatures: {nodes: features}} = data
    return (
        <div className="boxes-area hosting-boxes-area">
            <div className="container">
                <div className="row justify-content-center">

                    {features.map((feature, idx) => (
                        <div className="col-lg-3 col-sm-6" key={idx}>
                            <div className="single-box">
                                <div className="icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h3>
                                    <Link to={`/topfeatures/${feature.slug}`}>
                                        {feature.headerText}
                                    </Link>
                                </h3>
                                <p>{feature.shortDescription}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default TopFeatures;
