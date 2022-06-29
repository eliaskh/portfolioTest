import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import logoLight from "../../assets/images/Elias/logon.png"
import logoDark from "../../assets/images/Elias/logonewdark.png"
import Typewriter from "typewriter-effect"
import image3 from "../../assets/images/Elias/uxuiweb.jpg"
import image4 from "../../assets/images/Elias/graphicdesignerweb.jpg"
import image5 from "../../assets/images/Elias/photographyweb.jpg"
function Loader() {
  const [mathRandom, setmathRandom] = useState("")
  useEffect(() => {
    setmathRandom((Math.random() * (1 + 1) + 1).toFixed(0))
  }, [mathRandom])

  return (
    <>
      <Cover>
        {console.log(mathRandom)}
        <div className="allBody">
          {
            <div>
              {console.log(mathRandom)}
              {(() => {
                if (mathRandom == 1) {
                  return <img src={image3} alt="Logo" className="imageLogo" />
                }
                if (mathRandom == 2) {
                  return <img src={image4} alt="Logo" className="imageLogo" />
                } else {
                  return <img src={image5} alt="Logo" className="imageLogo" />
                }
              })()}
            </div>
          }
        </div>
      </Cover>
    </>
  )
}
const Cover = styled.div`
  .allBody {
    background-color: #1a1a1a;

    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
  }
  .secondBody {
    background-color: #191919;
    background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
  }
  .center {
    margin: 0 auto;
  }

  .outer-ring {
    position: absolute;
    left: calc(50% - 150px);
    height: 300px;
    width: 300px;
    background-image: linear-gradient(
      135deg,
      #feed07 0%,
      #fe6a50 5%,
      #ed00aa 15%,
      #2fe3fe 50%,
      #8900ff 100%
    );
    border-radius: 50%;

    /*  Rotate  */
    animation-duration: 2s;
    animation-name: rotate;
    animation-iteration-count: infinite;
  }

  .inner-ring {
    position: absolute;
    left: calc(50% - 140px);
    height: 280px;
    width: 280px;
    background-image: linear-gradient(0deg, #36295e, #1c1045);
    border-radius: 50%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      /* transform: scale(0.2); */
    }
    100% {
      transform: rotate(360deg);
      /* transform: scale(1); */
    }
  }
  .imageLogo {
    position: absolute;
    top: 50%;
    transform: translate(50%, -50%);
    /*  Rotate  */

    width: 600px;
  }
  .text1 {
    position: absolute;
    transform: translate(0, 50%);
  }
  .Typewriter {
    text-align: center;
    color: white;
    font-size: 2rem;
    /* font-family: "Bebas Neue", cursive; */
  }
`
export default Loader
