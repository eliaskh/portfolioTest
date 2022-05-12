import React from 'react';
import { Link } from "gatsby";
import * as Icon from 'react-feather';

import { useStaticQuery, graphql } from "gatsby"

// Shape Images
import Shape2 from '../../assets/images/shape2.svg'
import Shape4 from '../../assets/images/shape4.svg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    margin:30,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
}

const query = graphql`
{   
    strapiOurRecentWorksHeader {
        title
        shortText
    }

    allStrapiProjects {
        nodes {
            id
            title
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shortText
            longDescription
            slug
        }
    }
}
`

const RecentWorks = () => {
    const data = useStaticQuery(query)
    const {
        strapiOurRecentWorksHeader: {title, shortText},
        allStrapiProjects: {nodes: projects}
    } = data

    // Slider
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="works-area pt-80 pb-50 bg-f7fafd">
            <div className="container">
                <div className="section-title">
                    <h2>{title}</h2>
                    <div className="bar"></div>
                    <p>{shortText}</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="works-slides owl-carousel owl-theme"
                {...options}
            > 
                {projects.map(project => (
                    <div className="single-works" key={project.id}>
                        <img 
                            src={project.image.childImageSharp.fluid.src}
                            alt="Project Image" 
                        />

                        <Link to={`/projects/${project.slug}`} className="icon">
                            <Icon.Settings />
                        </Link>

                        <div className="works-content">
                            <h3>
                                <Link to={`/projects/${project.slug}`}>
                                    {project.title}
                                </Link>
                            </h3>
                            <p>{project.shortText}</p>
                        </div>
                    </div>
                ))}
            </OwlCarousel> : ''}
            
            {/* Shape Images */}
            <div className="shape8 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src={Shape2} alt="shape" />
            </div>
            <div className="shape7">
                <img src={Shape4} alt="shape" />
            </div>
            <div className="shape4">
                <img src={Shape4} alt="shape" />
            </div>
        </div>
    )
}

export default RecentWorks;
