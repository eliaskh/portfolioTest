import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/lazy"
import { Lazy, Navigation, Pagination } from "swiper"
import { StaticImage } from "gatsby-plugin-image"
import { device } from "../../Style"
import img1 from "../../assets/images/Elias/1-shfaf.png"
import img2 from "../../assets/images/Elias/2-shfaf.png"
import img3 from "../../assets/images/Elias/3-shfaf.png"
import img4 from "../../assets/images/Elias/4-shfaf.png"
import img5 from "../../assets/images/Elias/5-shfaf.png"
import img6 from "../../assets/images/Elias/imageavra.png"
import img7 from "../../assets/images/Elias/1imageavra.png"
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
          grabCursor={true}
          lazy={true}
          // effect={"fade"}
          navigation={true}
          loop={true}
          // pagination={{ clickable: true }}
          modules={[Lazy, Navigation, Pagination]}
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
            {/* <div className="more">
              <h1 style={{ color: "white", fontSize: "1.5rem" }}>
                אתר להצגת וידאו ב-360 מעלות
              </h1>
            </div> */}
            <img src={img1} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="more">
              <h1 style={{ color: "white", fontSize: "1.5rem" }}>
                אפליקצייה להצגת וידאו ב-360
              </h1>
            </div> */}
            <img src={img2} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="more">
              <h1 style={{ color: "white", fontSize: "1.5rem" }}>
                פיתוח אפליקציות מציאות מדומה
              </h1>
            </div> */}
            <img src={img3} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="more">
              <h1 style={{ color: "white", fontSize: "1.5rem" }}>
                פלטפורמה לסיורים וירטואליים
              </h1>
            </div> */}
            <img src={img4} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="more">
              <h1 style={{ color: "white", fontSize: "1.5rem" }}>
                אתר לחיפוש והזמנת חדרי נופש
              </h1>
            </div> */}
            <img src={img5} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="more">
              <h1 style={{ color: "white", fontSize: "1.5rem" }}>
                אתר לחיפוש והזמנת חדרי נופש
              </h1>
            </div> */}
            <img src={img6} className="imgSlider" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="more">
              <h1 style={{ color: "white", fontSize: "1.5rem" }}>
                אתר לחיפוש והזמנת חדרי נופש
              </h1>
            </div> */}
            <img src={img7} className="imgSlider" />
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
    /* background-color: #0093e9; */
    background-image: var(--clr-Gradient);

    /* background: linear-gradient(157.16deg, #ff0055 0%, #000066 100%); */
  }
  .swiper-pagination-progressbar-fill {
    height: 10px !important;
  }
  .swiper-pagination-progressbar {
    background: rgba(0, 0, 0, 0);
  }
  .more {
    /* position: absolute; */
    /* bottom: 10px;
    left: 10px; */
    display: flex;
    justify-content: center;
    /* background-color: rgba(0, 0, 0, 0.1); */
    padding: 1rem;
  }
  .black {
    position: relative;
    top: 0px;
    right: 0x;
    width: 100%;
    height: 50px;
  }

  .more > h1 {
    /* font-size: 2rem;
    color: white; */
  }
  .titleSherotem {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    padding: 5rem 5rem 0rem 5rem;
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
    text-align: center !important;
  }
  .imgSlider {
    height: auto !important;
  }
  .swiper-rtl .swiper-button-prev {
    color: white;
  }
  .swiper-rtl .swiper-button-next {
    color: white;
  }
`
export default Ourwork
