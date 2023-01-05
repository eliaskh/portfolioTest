import React, { useState } from "react"
import styled from "styled-components"
import logoLight from "../../assets/images/Elias/logon.png"
import logoDark from "../../assets/images/Elias/logonewdark.png"
import textLogo from "../../assets/images/Elias/textlogo.png"
import textLogoBlack from "../../assets/images/Elias/textlogoblack.png"
import backtotopwhite from "../../assets/images/Elias/backtotopwhite.png"
import backtotopBlack from "../../assets/images/Elias/backtotopBlack.png"
import { BsFillSunFill, BsMoonFill } from "react-icons/bs"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"
import { BiMoon, BiSun } from "react-icons/bi"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { BsWhatsapp } from "react-icons/bs"

function MenuVertical({ toggleTheme, isDarkoMode }) {
  const breakpoints = useBreakpoint()
  const [navBar1, setNavBar1] = useState(false)
  const [showBtnTop, setShowBtnTop] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavBar1(true)
      setShowBtnTop(true)
    } else {
      setNavBar1(false)
      setShowBtnTop(false)
    }
  }
  {
    window.addEventListener("scroll", changeColor)
  }

  return (
    <>
      {breakpoints.sm ? (
        <>
          <CoverMobile>
            <div className="topbarmobile">
              <div className="topwrappermobile">
                {/* whatand call */}

                <div className="whatandcall">
                  {isDarkoMode ? (
                    <>
                      <a
                        href="https://wa.me/972528963616"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsWhatsapp size="25px" color="white" />
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="https://wa.me/972528963616"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsWhatsapp size="25px" color="black" />
                      </a>
                    </>
                  )}
                </div>

                <div className="logoMobile">
                  <div>
                    {navBar1 ? (
                      <>
                        {" "}
                        <Link to="/">
                          {isDarkoMode ? (
                            <>
                              <img
                                src={textLogo}
                                alt="Logo"
                                style={{ height: "auto", paddingTop: "7px" }}
                              />
                            </>
                          ) : (
                            <>
                              <img
                                src={textLogoBlack}
                                alt="Logo"
                                style={{ height: "auto", paddingTop: "7px" }}
                              />
                            </>
                          )}
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/">
                          {isDarkoMode ? (
                            <>
                              <img
                                src={logoLight}
                                alt="Logo"
                                style={{ height: "50px", paddingTop: "7px" }}
                              />
                            </>
                          ) : (
                            <>
                              <img
                                src={logoDark}
                                alt="Logo"
                                style={{ height: "50px", paddingTop: "7px" }}
                              />
                            </>
                          )}
                        </Link>
                      </>
                    )}
                  </div>
                  <div></div>
                </div>

                {/* dark and light mode */}

                <div className="logodarmodemobile">
                  <div>
                    {isDarkoMode ? (
                      <div>
                        <BiMoon
                          // className={classTwo}
                          style={{
                            color: `var(--clr-primary)`,
                            marginTop: "3px",
                            marginRight: "7px",
                            cursor: "pointer",
                          }}
                          size="22px"
                          onClick={toggleTheme}
                        />
                      </div>
                    ) : (
                      <div>
                        <BiSun
                          style={{
                            color: `var(--clr-primary)`,
                            marginTop: "3px",
                            marginRight: "7px",
                            cursor: "pointer",
                          }}
                          size="22px"
                          onClick={toggleTheme}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapperMobile">
              <div className="menuItemMobile">
                <AnchorLink href="#home">
                  <h1>ראשי</h1>
                </AnchorLink>
              </div>

              <div className="menuItemMobile">
                <AnchorLink href="#things">
                  <h1>שירותים שלנו</h1>
                </AnchorLink>
              </div>

              <div className="menuItemMobile">
                <AnchorLink href="#work">
                  <h1>העבודות שלנו</h1>
                </AnchorLink>
              </div>

              <div className="menuItemMobile">
                <AnchorLink href="#contact" offset="50">
                  <h1>צור קשר</h1>
                </AnchorLink>
              </div>
            </div>
            {showBtnTop ? (
              <>
                {isDarkoMode ? (
                  <>
                    <div className="backtotop">
                      <AnchorLink href="#home">
                        <img
                          src={backtotopBlack}
                          alt="Logo"
                          style={{ height: "35px" }}
                        />
                      </AnchorLink>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="backtotop">
                      <AnchorLink href="#home">
                        <img
                          src={backtotopBlack}
                          alt="Logo"
                          style={{ height: "35px" }}
                        />
                      </AnchorLink>
                    </div>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </CoverMobile>
        </>
      ) : (
        <>
          <Cover>
            <div>
              <div className={navBar1 ? "containerMenu" : "containerMenu1"}>
                <div className="logo1">
                  <Link to="/" className="navbar-brand">
                    {isDarkoMode ? (
                      <>
                        <img
                          src={logoLight}
                          alt="Logo"
                          style={{ height: "35px" }}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={logoDark}
                          alt="Logo"
                          style={{ height: "35px" }}
                        />
                      </>
                    )}
                  </Link>
                </div>
                <div className="menu1">
                  <div className="itemmenu">
                    <ul>
                      <AnchorLink href="#home">
                        <li> ראשי</li>
                      </AnchorLink>
                    </ul>
                  </div>
                  <div className="itemmenu">
                    <ul>
                      <AnchorLink href="#things">
                        <li>שירותים שלנו</li>
                      </AnchorLink>
                    </ul>
                  </div>
                  <div className="itemmenu">
                    <ul>
                      <AnchorLink href="#work">
                        <li>העבודות שלנו</li>
                      </AnchorLink>
                    </ul>
                  </div>

                  <div className="itemmenu">
                    <ul>
                      <AnchorLink href="#contact" offset="50">
                        <li>צור קשר</li>
                      </AnchorLink>
                    </ul>
                  </div>
                </div>

                <div className="darkandlight">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h1
                      style={{
                        color: "var(--clr-font)",
                      }}
                    >
                      0528963616
                    </h1>
                  </div>
                  {isDarkoMode ? (
                    <div>
                      <BsMoonFill
                        // className={classTwo}
                        style={{
                          color: "#f50256",
                          marginTop: "3px",
                          marginRight: "7px",
                          cursor: "pointer",
                        }}
                        size="22px"
                        onClick={toggleTheme}
                      />
                    </div>
                  ) : (
                    <div>
                      <BsFillSunFill
                        style={{
                          color: "black",
                          marginTop: "3px",
                          marginRight: "7px",
                          cursor: "pointer",
                        }}
                        size="30px"
                        onClick={toggleTheme}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {showBtnTop ? (
              <>
                {isDarkoMode ? (
                  <>
                    <div className="backtotop">
                      <AnchorLink href="#home">
                        <img
                          src={backtotopwhite}
                          alt="Logo"
                          style={{ height: "35px" }}
                        />
                      </AnchorLink>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="backtotop">
                      <AnchorLink href="#home">
                        <img
                          src={backtotopBlack}
                          alt="Logo"
                          style={{ height: "35px" }}
                        />
                      </AnchorLink>
                    </div>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </Cover>
        </>
      )}
    </>
  )
}

const Cover = styled.div`
  .containerMenu {
    z-index: 999;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100vw;
    height: 60px;
    background-color: var(--clr-menu);
    display: grid;
    grid-template-columns: 25% 1fr 25%;
    justify-content: center;
    align-items: center;

    color: var(--clr-font);
    border-radius: 5px;
  }
  .containerMenu1 {
    z-index: 999;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 100vw;
    height: 80px;
    background-color: var(--clr-menu-full);
    display: grid;
    grid-template-columns: 25% 1fr 25%;
    justify-content: center;
    align-items: center;

    color: var(--clr-font);
    border-radius: 5px;
  }
  .containerMenu:hover {
    opacity: 1;
  }
  .logo1 {
    justify-self: center;
  }
  .darkandlight {
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .menu1 {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    justify-items: center;
    gap: 40px;
  }
  .itemmenu {
    justify-self: center;
    cursor: pointer;
  }
  .activeMenu::after {
    content: "-";
    display: flex;
    justify-content: center;
  }
  .itemmenu li {
    color: var(--clr-font);
    font-size: 15px;
    /* font-weight: bold; */
  }
  .backtotop {
    position: fixed;
    left: 10px;
    bottom: 10px;
  }
`

const CoverMobile = styled.div`
  .topwrappermobile {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: var(--clr-menu-full);
    width: 100vw;
    height: 70px;
    -webkit-box-shadow: 0px 12px 14px -7px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 12px 14px -7px rgba(0, 0, 0, 0.15);
    justify-items: center;
    align-items: center;
    z-index: 9999999999999;
  }
  .logodarmodemobile {
    justify-self: end;
    padding-left: 20px;
  }
  .logoMobile {
    justify-self: center;
  }
  .whatandcall {
    justify-self: start;
    padding-right: 20px;
  }
  .wrapperMobile {
    z-index: 999999999999999;
    -webkit-box-shadow: -4px -6px 9px 1px rgba(0, 0, 0, 0.16);
    box-shadow: -4px -6px 9px 1px rgba(0, 0, 0, 0.16);
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: var(--clr-bgc);
    width: 100vw;
    height: 60px;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    align-items: center;
  }
  .menuItemMobile {
    justify-self: center;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    height: 100% !important;
    border: 0.5px solid var(--clr-border-menu) !important;
  }
  .menuItemMobile h1 {
    color: var(--clr-font);
    font-size: 12px;
  }
  .backtotop {
    position: fixed;
    left: 20px;
    bottom: 70px;
    z-index: 99999999;
  }
`
export default MenuVertical
