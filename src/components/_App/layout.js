import React from "react"
import { useState, useEffect } from "react"
import GoTop from "./GoTop"
import NavbarStyleFour from "../../components/_App/NavbarStyleFour"
import MenuVertical from "../../components/Elias/MenuVertical"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

const Layout = ({ children }) => {
  const [theme, settheme] = useState("dark-theme")
  const [isDarkoMode, setisDarkoMode] = useState(true)

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

  return (
    <>
      {children}
      {/* <NavbarStyleFour toggleTheme={toggleTheme} isDarkoMode={isDarkoMode} /> */}
      <MenuVertical toggleTheme={toggleTheme} isDarkoMode={isDarkoMode} />
      {/* <GoTop scrollStepInPx="100" delayInMs="10.50" /> */}
    </>
  )
}
export default Layout
