import React, { useState } from "react"
import styled from "styled-components"
import svg1 from "../../assets/images/Elias/rainbow-vortex.svg"
import circle from "../../assets/images/Elias/cri.svg"
import Brainstorm from "../../assets/images/Elias/new.png"
import { BsArrowLeft, BsArrowRight, BsArrowDown } from "react-icons/bs"
import { device } from "../../Style"
import { words } from "../../Style"
import { isMobile } from "react-device-detect"
function ServiceLight2({ title1, title2, design, imageRow, about }) {
  const style1 = { color: "var(--clr-font)", fontSize: "3rem" }
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
          <div className="wrapper">
            <div className="image1">
              <img src={imageRow} alt="" className="image" />
            </div>

            {isMobile ? (
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
            )}

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
                    <p style={{ color: "var(--clr-font)" }}>
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
            {isMobile ? (
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
            )}

            <div className="image1">
              <img src={imageRow} alt="" className="image" />
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
    height: 100vh;
    /* padding: 10rem; */
    background-color: var(--clr-bgc);
  }
  .wrapperWhite {
  }
  .image {
    height: 450px;
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
  @media ${device.mobileS} {
    .wrapper {
      grid-template-columns: 1fr;
      height: auto;
      padding: 1rem;
    }
    .image {
      order: 1;
    }
    .arrow {
      order: 2;
    }
    .text {
      padding: 1rem;
      order: 3;
    }
    .title {
      font-size: 3.5rem;
      color: var(--clr-font);
      text-align: center;
    }
    .title1 {
      font-size: 2rem;
      text-align: center;
      opacity: 0.1;
      color: var(--clr-font);
    }

    .description {
      font-size: 1rem;
      color: var(--clr-font);
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
      padding: 6rem;
    }
    .image1 {
      order: 3;
    }
    .arrow {
      order: 2;
    }
    .text {
      padding: 4rem;
      order: 1;
    }
    .title {
      font-size: 3.5rem;
      color: var(--clr-font);
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.1;
      color: var(--clr-font);
    }

    .description {
      font-size: 1rem;
      color: var(--clr-font);
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
      grid-template-columns: 1fr 30px 1fr;
      height: auto;
      padding: 6rem;
    }
    .text {
      padding: 7rem;
    }
    .title {
      font-size: 3.5rem;
      color: var(--clr-font);
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.1;
      color: var(--clr-font);
    }

    .description {
      font-size: 1rem;
      color: var(--clr-font);
      text-align: right !important;
      width: 25rem !important;
    }
    .btn1 {
      display: flex;
      justify-content: start;
    }
  }
`
export default ServiceLight2
