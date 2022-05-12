import React from "react"
import GoTop from "./GoTop"

const Layout = ({ children }) => {
    return (
        <>
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    )
}
export default Layout