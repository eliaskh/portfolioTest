import React from 'react';
import * as Icon from 'react-feather';
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

// Shape Images
import Shape2 from "../../assets/images/shape2.svg";
import Shape4 from "../../assets/images/shape4.svg";

const query = graphql`
{   
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

const ProjectStyle1 = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiProjects: {nodes: projects}
    } = data

    return (
        <div className="works-area pt-80 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    {projects.map(project => (
                        <div className="col-lg-4 col-md-6" key={project.id}>
                            <div className="single-works">
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
                        </div>
                    ))}
                </div>
            </div>

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
    );
}

export default ProjectStyle1;
