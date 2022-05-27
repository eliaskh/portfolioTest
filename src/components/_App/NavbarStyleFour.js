import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"
import DarkModeToggle from "react-dark-mode-toggle"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"

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

const NavbarStyleFour = ({ toggleTheme, isDarkoMode }) => {
  const data = useStaticQuery(query)
  const {
    strapiSiteLogo: { blackLogo, whiteLogo },
  } = data

  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header
      id="header"
      className="headroom navbar-color-white navbar-style-four"
    >
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/bigdata-analytics"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              {/* <img src={whiteLogo.childImageSharp.fluid.src} alt="Logo" /> */}
              <h1 style={{ color: "white" }}>Creativelab</h1>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/#"
                    activeClassName="active"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    ראשי
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    מי אנחנו
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    תתקשר
                  </Link>
                </li>
                <li>
                  {isDarkoMode ? (
                    <>
                      <>
                        <li className="nav-item">
                          <BsMoonFill
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginRight: "7px",
                              cursor: "pointer",
                            }}
                            size="17px"
                            onClick={toggleTheme}
                          />
                        </li>
                      </>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <BsFillSunFill
                          style={{
                            color: "white",
                            marginTop: "3px",
                            marginRight: "7px",
                            cursor: "pointer",
                          }}
                          size="20px"
                          onClick={toggleTheme}
                        />
                      </li>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavbarStyleFour
