import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"

import MapImg from "../../assets/images/map.png"
import Shape1 from "../../assets/images/shape1.png"
import Shape2 from "../../assets/images/shape2.svg"
import styled from "styled-components"
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Cover>
      <div className="wrapper">
        <div className="area">
          <p>
            Copyright &copy; {currentYear} Spet. All rights reserved by{" "}
            <a href="https://www.creativelab.co.il/" target="_blank">
              Creative Lab, By Elias khshaiboun
            </a>
          </p>
        </div>
      </div>

      {/* <img src={MapImg} className="map" alt="map" /> */}

      {/* Shape Images */}
      <div className="shape1">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </Cover>
  )
}

const Cover = styled.div`
  .wrapper {
    height: 50px;
    width: 100vw;
  }
  .area {
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
  }
`

export default Footer
