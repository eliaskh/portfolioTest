import React from "react"
import styled from "styled-components"
import logoLight from "../../assets/images/Elias/logon.png"
import logoDark from "../../assets/images/Elias/logonewdark.png"
import Typewriter from "typewriter-effect"
function Loader() {
  return (
    <>
      <Cover>
        <div className="allBody">
          {/* <div className="outer-ring center"></div>
          <div className="inner-ring center"></div> */}

          <img
            src={logoLight}
            alt="Logo"
            style={{ height: "50px" }}
            className="imageLogo"
          />

          <div className="text1">
            <Typewriter
              options={{
                strings: [
                  "CREATIVE LAB",
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
          </div>
        </div>
      </Cover>
    </>
  )
}
const Cover = styled.div`
  .allBody {
    background-color: #191919;

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
    top: 40%;
    transform: translate(0, -100%);
    /*  Rotate  */
    animation-duration: 2s;
    animation-name: rotate;
    animation-iteration-count: infinite;
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
