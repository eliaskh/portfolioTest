import React from "react"
import styled from "styled-components"
import image2 from "../../assets/images/Elias/Rectangle.png"
import SVG2 from "../../assets/images/Elias/SimpleShiny.svg"
import phone from "../../assets/images/Elias/phone.png"

function Service1() {
  return (
    <div>
      <Cover1>
        <div className="phone">
          <img src={phone} alt="phone" className="phoneImage" />
          <div className="dots">0 0 0</div>
        </div>
        <div className="rightHand">
          <h1 className="title">
            Sepcial way <br />
            to realise your own
            <br /> Busniess
          </h1>
          <div className="description">
            publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </div>
        </div>
      </Cover1>
    </div>
  )
}

const Cover1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${image2});
  background-size: cover;
  background-size: 100% 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* border: 5px solid red; */
  justify-content: center;

  .phone {
    /* border: 5px solid black; */
    justify-self: center;
    align-self: center;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 3rem;
  }
  .dots {
    justify-self: center;
  }
  .phoneImage {
    height: 500px;
  }
  .rightHand {
    /* border: 5px solid blue; */
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin: 7rem;
    text-align: left;
    gap: 1rem;
  }
  .title {
    color: White;
    font-size: 2rem;
    text-transform: capitalize;
  }
  .description {
    color: White;
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Service1
