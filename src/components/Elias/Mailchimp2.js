import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../../Style"
import { words } from "../../Style"
import AnchorLink from "react-anchor-link-smooth-scroll"
import svgi from "../../assets/images/Elias/wowo.png"
import svgi1 from "../../assets/images/Elias/right.svg"
import addToMailchimp from "gatsby-plugin-mailchimp"
function Mailchimp2({
  title1,
  title2,
  design,
  imageRow,
  about,
  showTitle,
  number,
  description,
  idSection,
  showSvg,
}) {
  const style1 = { color: "white", fontSize: "3rem" }
  const [showMore, setShowMore] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("הירשם כדי לקבל את החדש שלנו")
  const ChangeHandel = event => {
    setEmail(event.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
    setMessage("תודה")
    //   .then(data => {})
    //   .catch(() => {
    //     // unnecessary because Mailchimp only ever
    //     // returns a 200 status code
    //     // see below for how to handle errors
    //   })
    setEmail("")
  }
  const handelShowMore = () => {
    if (showMore) {
      setShowMore(false)
    } else setShowMore(true)
  }
  return (
    <Cover>
      {showSvg ? (
        <>
          <img src={svgi} alt="" className="spacer" />
        </>
      ) : (
        <></>
      )}

      <section id={idSection}>
        {showTitle ? (
          <>
            <div className="titleSherotem">
              <h1> השירותים שלנו</h1>
              <p>
                אנו מציעים מכלול של שירותים בבניה ופיתוח מוצר כערך עסקי – החל
                מהרעיון והניסוח העיקרי של אסטרטגיית המוצר, עיצוב ובניית אב
                טיפוס, בדיקתו עם משתמשים ולסיום יצירת המוצר המוגמר
              </p>
              <Menuinside>
                <div className="menuInside">
                  <AnchorLink href="#web" offset="50">
                    <h1> בניית אתרים</h1>
                  </AnchorLink>

                  <AnchorLink href="#ux" offset="50">
                    <h1> עיצוב חווית משתמש</h1>
                  </AnchorLink>
                  <AnchorLink href="#shop" offset="50">
                    <h1> חנויות אונליין</h1>
                  </AnchorLink>
                  <AnchorLink href="#design1" offset="50">
                    <h1> עיצוב גרפי</h1>
                  </AnchorLink>
                  <AnchorLink href="#photography" offset="50">
                    <h1> צילום מוצרים</h1>
                  </AnchorLink>
                  <AnchorLink href="#kedom" offset="50">
                    <h1>קידום ברשתות חברתיות</h1>
                  </AnchorLink>
                </div>
              </Menuinside>
            </div>
          </>
        ) : (
          <></>
        )}
        <section id="web">
          <div className="wrapper">
            <div className="image1">
              <img src={imageRow} alt="" className="image" />
            </div>

            <div className="sub">
              <div className="message1">
                <h1>{message}</h1>
              </div>
              <div className="form1">
                <form onSubmit={handleSubmit} className="text">
                  <input
                    type="text"
                    name="mail"
                    value={email}
                    onChange={ChangeHandel}
                  />

                  <Button type="submit" value="Submit">
                    להירשם
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="backgroundSVG"></div>
    </Cover>
  )
}
const Menuinside = styled.div`
  @media ${device.mobileS} {
    .menuInside {
      padding-top: 40px;
      display: grid;
      grid-template-columns: 1fr;
      justify-content: space-around;
      justify-items: center;
      gap: 20px;
    }
    .menuInside h1 {
      color: var(--clr-font);
    }
  }
  @media ${device.laptop} {
    .menuInside {
      padding-top: 5px;
      display: grid;
      grid-template-columns: auto auto auto auto auto auto;
      justify-content: space-around;
    }
    .menuInside h1 {
      color: var(--clr-font);
    }
  }
`
const Button = styled.button`
  font-size: 1em;
  margin: 1.5rem 0rem;
  padding: 1em 5em;
  border-radius: 50px;
  background-color: var(--clr-primary);
  color: white;
`

const Cover = styled.div`
  .backgroundSVG {
    background-image: url("../../assets/images/Elias/layered-waves-haikei.svg");
  }
  .spacer {
    aspect-ratio: 900/100;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
  }

  width: 100vw;

  .wrapper {
    display: grid;
    height: 80vh;
    background-image: var(--clr-Gradient);
  }
  .wrapperWhite {
  }
  .number {
    font-size: 2.5rem;
    color: white;
    display: flex;
    justify-content: center;
  }

  .image1 {
    justify-self: center;
    align-self: center;
    background-image: radial-gradient(
      circle 610px at 5.2% 51.6%,
      rgba(5, 8, 114, 1) 0%,
      rgba(7, 3, 53, 1) 97.5%
    );
  }
  .arrow {
    justify-self: center;
    align-self: center;
  }
  .sub {
    display: grid;
    /* grid-template-rows: 1fr 1fr; */
    justify-items: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
  .form1 {
    align-self: start;
  }

  .text {
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    align-content: center;
  }
  input {
    padding: 10px;
    border-radius: 20px;
  }
  .message1 {
    align-self: end;
  }
  .message1 h1 {
    color: White;
    font-size: 2rem;
    text-align: center;
  }
  .showmore {
    color: white;
  }
  .titleSherotem {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    padding: 5rem;

    background-color: var(--clr-bgc);
  }
  .titleSherotem > h1 {
    font-size: 3rem;
    color: var(--clr-font);
    text-align: center;
    padding-top: 50px;
  }

  .titleSherotem > p {
    max-width: 1000px;
    font-size: 1rem;
    word-wrap: break-word;
    color: var(--clr-font);
    text-align: center !important;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media ${device.mobileS} {
    .wrapper {
      grid-template-columns: 1fr;
      height: auto;
    }
    .image {
      height: auto;
      width: 100vw;
    }
    .image1 {
      order: 1;
    }
    .text {
      order: 2;
      padding: 2rem;
    }
    .title {
      margin-top: 1rem;
      font-size: 2rem;
      color: white;
      text-align: center;
    }
    .title1 {
      font-size: 2rem;
      text-align: center;
      opacity: 0.4;
      color: White;
      padding-bottom: 5px;
    }

    .description {
      font-size: 1rem;
      color: white;
      text-align: center;
      width: 100% !important;
    }
    .btn1 {
      display: flex;
      justify-content: center;
    }
  }
  @media ${device.tablet} {
    .wrapper {
      grid-template-columns: 1fr;
      height: auto;
    }
    .image {
      height: 80vh;
      width: 100vw;
    }
    .image1 {
      order: 2;
    }
    .text {
      padding: 1rem;
      order: 1;
    }
    .title {
      margin-top: 1rem;
      font-size: 3rem;
      color: white;
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.4;
      color: White;
    }

    .description {
      font-size: 1rem;
      color: white;
      text-align: right !important;
      width: 25rem !important;
    }
    .btn1 {
      display: flex;
      justify-content: start;
    }
  }
  @media ${device.laptop} {
    .wrapper {
      grid-template-columns: 1fr 1fr;
      height: auto;
    }
    .image {
      height: 80vh;
      width: 100vw;
    }
    .image1 {
      order: 2;
    }
    .text {
      padding: 1rem;
      order: 1;
    }
    .title {
      margin-top: 1rem;
      font-size: 3rem;
      color: white;
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.4;
      color: White;
    }

    .description {
      font-size: 1rem;
      color: white;
      text-align: right !important;
      width: 25rem !important;
    }
    .btn1 {
      display: flex;
      justify-content: start;
    }
  }
`
export default Mailchimp2
