import React, { useState } from "react"
import styled from "styled-components"
import svg1 from "../../assets/images/Elias/rainbow-vortex.svg"
import circle from "../../assets/images/Elias/cri.svg"
import Brainstorm from "../../assets/images/Elias/new.png"
import { BsArrowLeft, BsArrowRight, BsArrowDown } from "react-icons/bs"
import { isMobile } from "react-device-detect"

import { device } from "../../Style"
import { words } from "../../Style"
import { bool } from "prop-types"
function Servie2({ title1, title2, design, imageRow, about, showTitle }) {
  const style1 = { color: "white", fontSize: "4rem" }
  const [showMore, setShowMore] = useState(false)

  const handelShowMore = () => {
    if (showMore) {
      setShowMore(false)
    } else setShowMore(true)
  }
  return (
    <Cover>
      {design == "first" ? (
        <>
          {showTitle ? (
            <>
              <div className="titleSherotem">
                <h1> השירותים שלנו</h1>
                <p>
                  אנו מציעים מכלול של שירותים בבניה ופיתוח מוצר כערך עסקי – החל
                  מהרעיון והניסוח העיקרי של אסטרטגיית המוצר,
                </p>
              </div>
            </>
          ) : (
            <></>
          )}

          <div className="wrapper">
            <div className="image1">
              <img src={imageRow} alt="" className="image" />
            </div>

            {/* {isMobile ? (
              <>
                <div className="arrow">
                  <BsArrowDown style={style1} />
                </div>
              </>
            ) : (
              <>
                <div className="arrow">
                  <BsArrowLeft style={style1} />
                </div>
              </>
            )} */}

            <div className="text">
              <h1 className="title">{title1}</h1>
              <h1 className="title1">{title2}</h1>
              <p className="description" style={{ width: "200px!important;" }}>
                {about}
              </p>

              {showMore ? (
                <>
                  <div className="description">
                    <p style={{ color: "white" }}>
                      בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                      מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                      הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי
                      מצליח הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה,
                      יישום פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא
                      עם מנהל הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר,
                      מטרתו וקהל היעד. השלב של האיפיון הוא אבן היסוד של פיתוח
                      האתר.
                    </p>
                  </div>
                  <div className="btn1">
                    <Button onClick={handelShowMore}>{words.lessInfo}</Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="btn1">
                    <Button onClick={handelShowMore}>{words.moreInfo}</Button>
                  </div>
                </>
              )}
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
              {showMore ? (
                <>
                  <div className="description">
                    <p style={{ color: "white" }}>
                      בניית אתרים מקצועית נעשה בכמה שלבים ובעזרת כמה בעלי מקצוע.
                      מרגע קבלת הרעיון מהלקוח, מחקר השוק , מי הם הלקוחות
                      הפוטנציאליים, תכנון, עיצוב ופיתוח. פיתוח מוצר דיגיטלי
                      מצליח הוא תהליך מורכב הדורש בחירה של הטכנולוגיה מתאימה,
                      יישום פתרונות חדשניים ומעקב אחר תהליכים. המפגש הראשון הוא
                      עם מנהל הפרויקטים שלנו שינסה לחקור ולהבין את סוג האתר,
                      מטרתו וקהל היעד. השלב של האיפיון הוא אבן היסוד של פיתוח
                      האתר.
                    </p>
                  </div>
                  <div className="btn1">
                    <Button onClick={handelShowMore}>{words.lessInfo}</Button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            {/* {isMobile ? (
              <>
                <div className="arrow">
                  <BsArrowDown style={style1} />
                </div>
              </>
            ) : (
              <>
                <div className="arrow">
                  <BsArrowLeft style={style1} />
                </div>
              </>
            )} */}

            <div className="image1">
              <img src={Brainstorm} alt="" className="image" />
            </div>
          </div>
        </>
      )}
    </Cover>
  )
}
const Button = styled.button`
  font-size: 1em;
  margin: 1.5rem 0rem;
  padding: 1em 5em;
  border-radius: 50px;
  background-color: var(--clr-primary);
  color: white;
`
const Cover = styled.div`
  width: 100vw;

  .wrapper {
    display: grid;
    height: 80vh;
    /* padding: 10rem; */
    background: linear-gradient(157.16deg, #ff0055 0%, #000066 100%);
  }
  .wrapperWhite {
  }

  .image1 {
    justify-self: center;
    align-self: center;
    /* width: 20rem; */
  }
  .arrow {
    justify-self: center;
    align-self: center;
  }
  .text {
    justify-self: center;
    align-self: center;
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
    font-size: 3.5rem;
    color: var(--clr-font);
    text-align: center;
  }

  .titleSherotem > p {
    font-size: 1rem;
    word-wrap: break-word;
    color: var(--clr-font);
    text-align: right !important;
  }
  @media ${device.mobileS} {
    .wrapper {
      grid-template-columns: 1fr;
      height: auto;
      /* padding: 1rem; */
    }
    .image {
      height: auto;
      width: 100vw;
      /* border-radius: 10px; */
    }
    .text {
      padding: 1rem;
    }
    .title {
      margin-top: 1rem;
      font-size: 3.5rem;
      color: white;
      text-align: center;
    }
    .title1 {
      font-size: 2rem;
      text-align: center;
      opacity: 0.1;
      color: White;
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
      /* padding: 6rem; */
    }
    .image {
      height: 80vh;
      width: 100vw;
      /* border-radius: 10px; */
    }
    .text {
      padding: 1rem;
    }
    .title {
      margin-top: 1rem;
      font-size: 3.5rem;
      color: white;
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.1;
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
      /* padding: 6rem; */
    }
    .image {
      height: 80vh;
      width: 100vw;
      /* border-radius: 10px; */
    }
    .text {
      padding: 1rem;
    }
    .title {
      margin-top: 1rem;
      font-size: 3.5rem;
      color: white;
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.1;
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
export default Servie2
