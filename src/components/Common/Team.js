import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    items: 5,
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        900: {
            items: 3
        },
        1200: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
}

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

const Team = () => {

    const data = useStaticQuery(query)
    const {
        strapiOurAwesomeTeamSlider
    } = data

    // Slider
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>{strapiOurAwesomeTeamSlider.title}</h2>
                    <div className="bar"></div>
                    <p>{strapiOurAwesomeTeamSlider.shortText}</p>
                </div>
            </div>

            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
                {strapiOurAwesomeTeamSlider.member.map(team => (
                    <div className="single-team" key={team.id}>
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
                ))}
            </OwlCarousel> : ''}
        </div>
    )
}

export default Team;