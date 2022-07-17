import React from "react"
import styled from "styled-components"
import { device } from "../../Style"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import image8 from "../../assets/images/Elias/cont2.png"

import image9 from "../../assets/images/Elias/newsletter.png"
function ContacForm({
  title1,
  title2,
  design,
  imageRow,
  about,
  number,
  description,
  idSection,
}) {
  const breakpoints = useBreakpoint()

  return (
    <Cover>
      <section id={idSection}>
        {design === "first" ? (
          <>
            <div className="wrapper">
              {breakpoints.sm ? (
                <>
                  <div className="image1">
                    <img src={image9} alt="" className="image" />
                  </div>
                </>
              ) : (
                <>
                  <div className="image1">
                    <img src={image8} alt="" className="image" />
                  </div>
                </>
              )}

              <div className="formC">
                <div className="titleSherotem">
                  <h1>נשמע לשמוע ממך</h1>
                  <p>מלא את הפרטים ונחזור אליך בהקדם</p>
                </div>
                <form
                  name="Contact Form"
                  method="POST"
                  data-netlify="true"
                  action="/Thank"
                >
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="שם"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="דואר אלקטרוני"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="מספר טלפון"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="הערות"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="5"
                          placeholder="הודעה"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="btnForm">
                      <Button type="submit">שלח</Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="wrapper">
              <div className="col-lg-6 col-md-12">
                <form
                  name="Contact Form"
                  method="POST"
                  data-netlify="true"
                  action="/Thank"
                >
                  <input type="hidden" name="form-name" value="Contact Form" />
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email address"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="Your phone number"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Your Subject"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="5"
                          placeholder="Write your message..."
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="image1">
                <img src={imageRow} alt="" className="image" />
              </div>
            </div>
          </>
        )}
      </section>
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
    /* height: 80vh; */
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
  .formC {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    padding-top: 0px;
    padding-left: 70px;
    padding-right: 70px;
  }
  .titleSherotem {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    padding: 1rem;
    background-color: var(--clr-bgc);
  }
  .titleSherotem > h1 {
    font-size: 2rem;
    color: var(--clr-font);
    text-align: center;
    padding-top: 1rem;
  }

  .titleSherotem > p {
    max-width: 1000px;
    font-size: 1rem;
    word-wrap: break-word;
    color: var(--clr-font);
    text-align: center !important;
    padding-top: 0.5rem;
    /* padding-bottom: 1rem; */
  }
  @media ${device.mobileS} {
    .wrapper {
      grid-template-columns: 1fr;
      height: auto;
      padding-bottom: 70px;
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
    .formC {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
      padding-top: 0px;
      padding-left: 30px;
      padding-right: 30px;
    }
    .btnForm {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  @media ${device.tablet} {
    .wrapper {
      grid-template-columns: 1fr;
      height: auto;
      /* padding: 6rem; */
      padding-bottom: 1px;
    }
    .image {
      /* order: 2; */
      /* height: 80vh; */
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
    .formC {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
      padding-top: 0px;
      padding-left: 70px;
      padding-right: 70px;
    }
    .btnForm {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
  @media ${device.laptop} {
    .wrapper {
      grid-template-columns: 1fr 1fr;
      height: auto;
      /* padding: 6rem; */
      padding-bottom: 1px;
    }
    .image {
      /* order: 2; */
      /* height: 80vh; */
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
    .formC {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
      padding-top: 0px;
      padding-left: 70px;
      padding-right: 70px;
    }
    .btnForm {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
`
export default ContacForm
