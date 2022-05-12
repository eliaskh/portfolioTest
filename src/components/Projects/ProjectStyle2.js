import React from 'react';
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"

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

const ProjectStyle2 = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiProjects: {nodes: projects}
    } = data

    return (
        <div className="ml-projects-area pt-80 pb-50">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {projects.map(project => (
                        <div className="col-lg-3 col-sm-6 col-md-6" key={project.id}>
                            <div className="single-ml-projects-box">
                                <img 
                                    src={project.image.childImageSharp.fluid.src}
                                    alt="Project Image" 
                                />
                                <div className="plus-icon">
                                    <Link to={`/projects/${project.slug}`}>
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectStyle2;
