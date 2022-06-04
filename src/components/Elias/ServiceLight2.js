import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../../Style"
import { words } from "../../Style"

function ServiceLight2({
  title1,
  title2,
  design,
  imageRow,
  about,
  number,
  description,
}) {
  const style1 = { color: "var(--clr-font)", fontSize: "4rem" }
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

            <div className="text">
              <div className="number">{number}</div>
              <h1 className="title">{title1}</h1>
              <h1 className="title1">{title2}</h1>
              <p className="description" style={{ width: "200px!important;" }}>
                {about}
              </p>

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
        </>
      ) : (
        <>
          <div className="wrapper">
            <div className="text">
              <div className="number">{number}</div>
              <h1 className="title">{title1}</h1>
              <h1 className="title1">{title2}</h1>
              <p className="description">{about}</p>
              {showMore ? (
                <>
                  <div className="description">
                    <p style={{ color: "var(--clr-font)" }}>{description}</p>
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
    height: 80vh;
    /* padding: 10rem; */
    background-color: var(--clr-bgc);
  }
  .wrapperWhite {
  }
  .image {
    height: 80vh;
    width: 100vw;
  }
  .image1 {
    justify-self: center;
    align-self: center;
    /* width: 20rem; */
  }
  .number {
    font-size: 2.5rem;
    color: var(--clr-font);
    display: flex;
    justify-content: center;
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
      /* padding: 1rem; */
    }
    .image {
      /* order: 1; */
      height: auto;
      width: 100vw;
    }

    .text {
      padding: 3rem;
      /* order: 2; */
    }
    .title {
      font-size: 2rem;
      color: var(--clr-font);
      text-align: center;
    }
    .title1 {
      font-size: 2rem;
      text-align: center;
      opacity: 0.4;
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
      /* padding: 6rem; */
    }
    .image {
      /* order: 2; */
      height: 80vh;
      width: 100vw;
    }

    .text {
      padding: 1rem;
      /* order: 1; */
    }
    .title {
      font-size: 3rem;
      color: var(--clr-font);
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.4;
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
      grid-template-columns: 1fr 1fr;
      height: auto;
      /* padding: 6rem; */
    }
    .image {
      /* order: 2; */
      height: 80vh;
      width: 100vw;
    }
    .text {
      padding: 1rem;
      /* order: 1; */
    }

    .title {
      font-size: 3rem;
      color: var(--clr-font);
      text-align: right !important;
    }
    .title1 {
      font-size: 2rem;
      text-align: right !important;
      opacity: 0.4;
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
