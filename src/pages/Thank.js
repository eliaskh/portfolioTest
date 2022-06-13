import React from "react"
import styled from "styled-components"
import manImg from "../assets/images/Elias/manup.jpg"
import Typewriter from "typewriter-effect"
import { navigate } from "gatsby"
function Thank() {
  return (
    <>
      <Cover>
        <div className="cover">
          <div className="wrapperThank">
            <div className="imageman">
              <img
                src={manImg}
                alt="man"
                className="imgMan"
                onClick={() => {
                  navigate("/")
                }}
              />
            </div>

            <div className="text">
              <Typewriter
                options={{
                  strings: ["תודה רבה שפניתם אלינו נחזור אליכם בהקדם האפשרי"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "textwow",
                }}
              />
            </div>
          </div>
        </div>
      </Cover>
    </>
  )
}
const Cover = styled.div`
  .wrapperThank {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100vh;
    justify-items: center;
    align-items: center;
    align-content: center;
  }
  .wrapperThank h1 {
    font-size: 2rem;
  }
  .imgMan {
    background-size: cover;
    height: 50vh;
  }
  .imageman {
    /* width: 100%;
    height: 100%; */
    /* border: 1px solid black; */
    cursor: pointer;
  }
  .text {
    /* width: 100%;
    height: 100%; */
    /* border: 1px solid red; */
    padding: 2rem;
  }
  .textwow {
    font-size: 1.5rem;
    font-family: "Fredoka", sans-serif;
    font-weight: 500;
    text-align: center;
  }
`
export default Thank
