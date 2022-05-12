import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapiOurAwesomeTeamSlider {
            title
            shortText
            member {
                id
                name
                designation
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
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

const TeamStyleTwo = () => {

    const data = useStaticQuery(query)
    const {
        strapiOurAwesomeTeamSlider
    } = data

    return (
        <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>{strapiOurAwesomeTeamSlider.title}</h2>
                    <div className="bar"></div>
                    <p>{strapiOurAwesomeTeamSlider.shortText}</p>
                </div>

                <div className="row justify-content-center">
                    {strapiOurAwesomeTeamSlider.member.slice(0,4).map(team => (
                        <div className="col-lg-3 col-md-6" key={team.id}>
                            <div className="single-team">
                                <div className="team-image">
                                    <img 
                                        src={team.image.childImageSharp.fluid.src}
                                        alt="Team Image" 
                                    />
                                </div>
                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>{team.name}</h3>
                                        <span>{team.designation}</span>
                                    </div>
                                    <ul>
                                        {team.socialLinks.map(list => (
                                            <li key={list.id}>
                                                <a href={list.link} target="_blank" rel="noreferrer">
                                                    <i className={list.icon}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <p>{team.shortText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamStyleTwo;