import React from "react"
import styled from "styled-components"
import image1 from "../../assets/images/Elias/bg-image-11.jpg"
import Typewriter from "typewriter-effect"
import { device } from "../../Style"
import { Link } from "gatsby"

function MainBannerElias2() {
  return (
    <>
      <Cover>
        {/*  */}
        <div className="wrapper">
          <h1>שירותי פיתוח ועיצוב תוכנה </h1>

          <Typewriter
            options={{
              strings: [
                "בניית אתרים",
                "עיצוב חווית משתמש",
                "פיתוח אפליקציות מובייל",
                "חנויות אונליין",
                "עיצוב גרפי",
                "אנליזה וקידום אתרים",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="icons1">
            <Button1>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                השירותים שלנו
              </div>
            </Button1>

            <Button>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                צור קשר
              </div>
            </Button>
          </div>
        </div>
        {/*  */}
      </Cover>
    </>
  )
}

const Cover = styled.div`
  background-image: url(${image1});

  .wrapper {
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 100vw !important;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .icons1 {
    padding-top: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    justify-self: center;

    color: #fd4766;
  }
  .whoWeAre {
    width: 200px;
    height: 70px;
    background-color: #fd4766;
    border: 2px red solid;
    border-radius: 20px;
  }
  h1 {
    text-align: center;
    color: white;
    font-weight: bold;
  }
  .Typewriter {
    text-align: center;
    color: #ffffffad;
  }
  @media ${device.mobileS} {
    .icons1 {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    h1 {
      font-size: 2rem;
    }
    .Typewriter {
      font-size: 1rem;
    }
  }
  @media ${device.tablet} {
    .icons1 {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    h1 {
      font-size: 4rem;
    }
    .Typewriter {
      font-size: 3rem;
    }
  }
  @media ${device.desktop} {
    .icons1 {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    h1 {
      font-size: 5rem;
    }
    .Typewriter {
      font-size: 4rem;
    }
  }
`
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 1em 5em;
  border-radius: 50px;
  background-color: var(--clr-primary);
  color: white;

  @media ${device.mobileS} {
    padding: 0.5em 2em;
  }
`
const Button1 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 1em 5em;
  border: 2px solid white;
  border-radius: 50px;

  color: white;
  @media ${device.mobileS} {
    padding: 0.5em 2em;
  }
`
export default MainBannerElias2
