import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper"
import { StaticImage } from "gatsby-plugin-image"
import { device } from "../../Style"
import img1 from "../../assets/images/Elias/new3.jpg"
import img2 from "../../assets/images/Elias/new4.jpg"
import img3 from "../../assets/images/Elias/new5.jpg"
import img4 from "../../assets/images/Elias/new8.jpg"
import img5 from "../../assets/images/Elias/mg3n.jpg"
function Ourwork() {
  const [showInfo, setShowInfo] = useState(true)
  const taggleInfo = () => {
    setShowInfo(!showInfo)
  }
  return (
    <Cover>
      <div className="wrapper">
        <div className="titleSherotem">
          <h1> פרויקטים נבחרים</h1>
          <p>
            חברתנו עוזרת לך לבנות ולהפעיל מערכות ואפליקציות מצליחות, בהתבסס על
            התקציב והדרישות שלך
          </p>
        </div>
        <Swiper
          dir="rtl"
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          pagination={{
            type: "progressbar",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <img src={img1} className="imgSlider" />

            {/* <div className="more">
              <div className="black">
                {showInfo ? (
                  <>
                    <h1>elias</h1>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div> */}

            {/* <Button onClick={taggleInfo}>Information</Button> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} className="imgSlider" />
          </SwiperSlide>
        </Swiper>
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
  .wrapper {
    margin-top: 0rem;
    /* margin-bottom: 5rem; */
    padding-bottom: 5rem;

    background: linear-gradient(157.16deg, #ff0055 0%, #000066 100%);
  }
  .swiper-pagination-progressbar-fill {
    height: 10px !important;
  }
  .swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0);
  }
  .more {
    position: absolute;
  }
  .black {
    position: relative;
    bottom: 0px;
    right: 0x;
    width: 100%;
    height: 50px;
    background-color: black;
  }

  .more > h1 {
    font-size: 2rem;
    color: white;
  }
  .titleSherotem {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    padding: 5rem 5rem 5rem 5rem;
  }
  .titleSherotem > h1 {
    font-size: 3rem;
    color: white;
    text-align: center;
  }

  .titleSherotem > p {
    font-size: 1rem;
    word-wrap: break-word;
    color: white;
    text-align: right !important;
  }
  .imgSlider {
    height: 400px !important;
  }
`
export default Ourwork
