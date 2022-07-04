import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapiTeam {
            card {
                id
                name
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                designation
                shortText
                socialLinks {
                    id
                    icon
                    link
                }
            }
        }
    }
`

const TeamMember = () => {

    const data = useStaticQuery(query)
    const {
        strapiTeam
    } = data

    return (
        <div className="team-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="row justify-content-center">
                    {strapiTeam.card.map(member => (
                        <div className="col-lg-4 col-md-6" key={member.id}>
                            <div className="single-team">
                                <div className="team-image">
                                    <img 
                                        src={member.image.childImageSharp.fluid.src}
                                        alt="Team Image" 
                                    />
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>{member.name}</h3>
                                        <span>{member.designation}</span>
                                    </div>

                                    <ul>
                                        {member.socialLinks.map(list => (
                                            <li key={list.id}>
                                                <a href={list.link} target="_blank" rel="noreferrer">
                                                    <i className={list.icon}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    <p>{member.shortText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamMember;