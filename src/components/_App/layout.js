import React from "react"
import { useState, useEffect } from "react"
import MenuVertical from "../../components/Elias/MenuVertical"
import Loader from "../../components/Elias/Loader.js"

const Layout = ({
  children,
  webElementVisible,

  homeElementVisible,
}) => {
  const [theme, settheme] = useState("dark-theme")
  const [isDarkoMode, setisDarkoMode] = useState(true)
  const [isLoading, setisLoading] = useState(true)

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
