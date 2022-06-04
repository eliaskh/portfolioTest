import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../../Style"
import { words } from "../../Style"

import { AnchorLink } from "gatsby-plugin-anchor-links"
function Servie2({
  title1,
  title2,
  design,
  imageRow,
  about,
  showTitle,
  number,
  description,
}) {
  const style1 = { color: "white", fontSize: "3rem" }
  const [showMore, setShowMore] = useState(false)

  const handelShowMore = () => {
    if (showMore) {
      setShowMore(false)
    } else setShowMore(true)
  }
  return (
    <Cover>
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

        <div className="text">
          <div>
            <div className="number">{number}</div>

            <h1 className="title">{title1}</h1>
            <h1 className="title1">{title2}</h1>
            <p className="description">{about}</p>

            {showMore ? (
              <>
                <div className="description">
                  <p style={{ color: "white" }}>{description}</p>
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
      </div>
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
    font-size: 3rem;
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
    }
    .image {
      height: auto;
      width: 100vw;
    }
    .image1 {
      order: 2;
    }
    .text {
      order: 1;
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
      order: 1;
    }
    .text {
      padding: 1rem;
      order: 2;
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
      order: 1;
    }
    .text {
      padding: 1rem;
      order: 2;
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
export default Servie2
