import React, { useState, useRef, useEffect } from "react"
import image1 from "../assets/images/Elias/bnyatataremweb.jpg"
import styled from "styled-components"

function Hatsat() {
  return (
    <Cover>
      <div className="allPage">
        <div className="pageItem">
          <img src={image1} alt="" className="image1" />
          <div className="textabout">
            <h1>web design</h1>
          </div>
        </div>
        <div className="pageItem">
          {" "}
          <img src={image1} alt="" className="image1" />
        </div>
        <div className="pageItem">
          {" "}
          <img src={image1} alt="" className="image1" />
        </div>
        <div className="pageItem">
          {" "}
          <img src={image1} alt="" className="image1" />
        </div>
      </div>
    </Cover>
  )
}
const Cover = styled.div`
  .allPage {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .image1 {
  }

  .textabout h1 {
    font-size: 2rem;
    color: white;
  }
  .textabout {
    position: absolute;
    top: 50%;
    transform: translate(50%, 50%);
  }
`
export default Hatsat
