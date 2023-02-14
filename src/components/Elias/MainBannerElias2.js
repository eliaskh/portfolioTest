import React from "react"
import styled from "styled-components"
import image1 from "../../assets/images/Elias/astranaut-runs-along-endless-wooden-bridge.jpg"
import Typewriter from "typewriter-effect"
import { device } from "../../Style"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Astro from "../../assets/images/Elias/bg1.jpg"
import { FaFacebook } from "react-icons/fa"
import { AiFillFacebook, AiFillLinkedin, AiFillMail } from "react-icons/ai"

function MainBannerElias2({ idSection }) {
  return (
    <>
      <Cover>
        <section id={idSection}>
          <div className="wrapper">
            <h1>שירותי פיתוח ועיצוב תוכנה </h1>

            <Typewriter
              options={{
                strings: [
                  "בניית אתרים",
                  "צילום מקצועי",
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
              <AnchorLink href="#things">
                <Button>
                  <div style={{ fontSize: "20px" }}>השירותים שלנו</div>
                </Button>
              </AnchorLink>
              <AnchorLink href="#work">
                <Button1>
                  <div style={{ fontSize: "20px" }}>העבודות שלנו</div>
                </Button1>
              </AnchorLink>
            </div>
            <div className="icons2">
              <AiFillFacebook
                size={40}
                color={`var(--clr-primary)`}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100082592277877",
                    "_blank"
                  )
                }
              />

              <AiFillLinkedin
                size={40}
                color={`var(--clr-primary)`}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/elias-khshaiboun-914676a8/",
                    "_blank"
                  )
                }
              />
              <AnchorLink href="#contact">
                <AiFillMail size={40} color={`var(--clr-primary)`} />
              </AnchorLink>
            </div>
          </div>
          {/*  */}
          {/* <div className="spacer layer1"></div> */}
        </section>
      </Cover>
    </>
  )
}

const Cover = styled.div`
  .Typewriter__cursor {
    /* background-color: var(--clr-primary); */
    color: var(--clr-primary);
  }
  /* background-image: url(${image1}); */
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: black;

  .wrapper {
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    align-content: center;
    height: 100vh;
    width: 100vw !important;
    background-image: url(${Astro});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: black;
    /* background-color: var(--clr-baner); */
    /* background-image: var(--clr-Gradient); */
    /* background-color: var(--clr-Gradient); */
  }
  .icons1 {
    padding-top: 21px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    justify-self: center;

    color: #fd4766;
  }
  .icons2 {
    padding-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-content: center;
    justify-self: center;
    gap: 50px;
    cursor: pointer;
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
    color: #ffffff;
  }
  .spacer {
    aspect-ratio: 900/300;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .layer1 {
    background-image: url("../../assets/images/Elias/lyred.svg");
  }
  @media ${device.mobileS} {
    .icons1 {
      grid-template-columns: 1fr;
      /* gap: 5px; */
    }
    h1 {
      font-size: 3rem;
      padding: 3rem 3rem 1rem 3rem;
    }
    .Typewriter {
      font-size: 2rem;
    }
  }
  @media ${device.tablet} {
    .icons1 {
      grid-template-columns: 1fr 1fr;
      /* gap: 5px; */
    }
    h1 {
      font-size: 5rem;
    }
    .Typewriter {
      font-size: 4rem;
    }
  }
  @media ${device.desktop} {
    .icons1 {
      grid-template-columns: 1fr 1fr;
      /* gap: 5px; */
    }

    h1 {
      font-size: 6rem;
    }
    .Typewriter {
      font-size: 5rem;
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
