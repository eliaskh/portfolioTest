import React from 'react'
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby"

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

const Partner = () => {

    const data = useStaticQuery(query)
    const {
        strapiPartner
    } = data

    return (
        <>
            <div className="ready-to-talk">
                <div className="container">
                    <h3>{strapiPartner.subTitle}</h3>
                    <p>{strapiPartner.helperText}</p>
                    
                    <Link to={strapiPartner.btnLink} className="btn btn-primary">
                        {strapiPartner.btnText}
                    </Link>

                    <span>
                        <a href={strapiPartner.infoLink}>
                            {strapiPartner.infoText}
                        </a>
                    </span>
                </div>
            </div>

            <div className="partner-area partner-section">
                <div className="container">
                    <h5>{strapiPartner.partnerTitle}</h5>

                    <div className="partner-inner">
                        <div className="row justify-content-center">
                            {strapiPartner.partnerLogo.map(pLogo => (
                                <div className="col-lg-2 col-md-3 col-6" key={pLogo.id}>
                                    <a href={pLogo.link} target="_blank">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 
}

export default Partner;  