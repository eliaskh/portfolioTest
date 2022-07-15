import React from "react"
import { useState, useEffect } from "react"
import GoTop from "./GoTop"
import NavbarStyleFour from "../../components/_App/NavbarStyleFour"
import MenuVertical from "../../components/Elias/MenuVertical"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { Divider } from "@material-ui/core"
import Loader from "../../components/Elias/Loader.js"
import image1 from "../../assets/images/Elias/useit.svg"
const Layout = ({
  children,
  webElementVisible,

  homeElementVisible,
}) => {
  const [theme, settheme] = useState("dark-theme")
  const [isDarkoMode, setisDarkoMode] = useState(true)
  const [isLoading, setisLoading] = useState(true)
  const [what, setWhat] = useState(null)

  const toggleTheme = () => {
    if (theme === "light-theme") {
      settheme("dark-theme")
      setisDarkoMode(true)
    } else {
      settheme("light-theme")
      setisDarkoMode(false)
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setisLoading(false)
      }, 500)
    }
  }, [isLoading])

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      {children}
      {/* <NavbarStyleFour toggleTheme={toggleTheme} isDarkoMode={isDarkoMode} /> */}
      <MenuVertical
        toggleTheme={toggleTheme}
        isDarkoMode={isDarkoMode}
        webElementVisible={webElementVisible}
        homeElementVisible={homeElementVisible}
      />

      {/* <GoTop scrollStepInPx="100" delayInMs="10.50" /> */}
    </>
  )
}
export default Layout
