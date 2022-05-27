import React, { useState } from "react"
import styled from "styled-components"
import svg1 from "../../assets/images/Elias/rainbow-vortex.svg"
import circle from "../../assets/images/Elias/cri.svg"
import Brainstorm from "../../assets/images/Elias/website-builder-workplace-interior-3d-rendering.png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

function ServiceLight({ title1, title2, design, imageRow, about }) {
  const style1 = { color: "black", fontSize: "6em" }
  const [showMore, setShowMore] = useState(false)

  return (
    <Cover>
      {design == "first" ? (
        <>
          <div className="wrapper">
            <div className="image1">
              <img src={imageRow} alt="" className="image" />
            </div>

            <div className="arrow">
              <BsArrowLeft style={style1} />
            </div>
            <div className="text">
              <h1 className="title">{title1}</h1>
              <h1 className="title1">{title2}</h1>
              <p className="description">{about}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="wrapper">
            <div className="text">
              <h1 className="title">{title1}</h1>
              <h1 className="title1">{title2}</h1>
              <p className="description">{about}</p>
            </div>
            <div className="arrow">
              <BsArrowRight style={style1} />
            </div>

            <div className="image1">
              <img src={Brainstorm} alt="" className="image" />
            </div>
          </div>
        </>
      )}
    </Cover>
  )
}

const Cover = styled.div`
  width: 100vw;
  height: 100vh;

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    height: 100vh;
    padding: 10rem;
    background-color: var(--clr-bgc);

    /* background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(242, 242, 242, 1) 100%
    ); */
  }
  .wrapperWhite {
  }
  .image {
  }
  .image1 {
    justify-self: center;
    align-self: center;
  }
  .arrow {
    justify-self: center;
    align-self: center;
  }
  .text {
    justify-self: center;
    align-self: center;
    padding: 4rem;
  }
  .title {
    font-size: 3.5rem;
    color: var(--clr-font);
    /* color: black; */
  }
  .title1 {
    font-size: 2rem;
    color: var(--clr-font);
    opacity: 0.1;
    /* color: black; */
  }

  .description {
    font-size: 1rem;
    color: var(--clr-font);
  }
`
export default ServiceLight
