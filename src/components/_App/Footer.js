import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"

import MapImg from "../../assets/images/map.png"
import Shape1 from "../../assets/images/shape1.png"
import Shape2 from "../../assets/images/shape2.svg"
import styled from "styled-components"
import logoLight from "../../assets/images/Elias/logo.png"
import logoDark from "../../assets/images/Elias/logoLight.png"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
const query = graphql`
  {
    strapiSiteLogo {
      blackLogo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteLogo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Footer = () => {
  const breakpoints = useBreakpoint()
  const data = useStaticQuery(query)
  const {
    strapiSiteLogo: { blackLogo, whiteLogo },
  } = data

  const currentYear = new Date().getFullYear()

  return (
    <Cover>
      {breakpoints.sm ? (
        <></>
      ) : (
        <>
          <footer>
            <div className="container2">
              <p>
                Copyright &copy; {currentYear} CreativeLab All rights reserved
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  className="title"
                >
                  <h2> CreativeLab</h2>
                </a>
              </p>
            </div>

            {/* Shape Images */}
            <div className="shape1">
              <img src={Shape1} alt="shape" />
            </div>
            <div className="shape8 rotateme">
              <img src={Shape2} alt="shape" />
            </div>
          </footer>
        </>
      )}
    </Cover>
  )
}
const Cover = styled.div`
  .container2 {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-bgc);
  }
  .container2 > p {
    color: var(--clr-font);
    text-align: center;
  }
  h2 {
    color: var(--clr-font);
  }
`
export default Footer
