import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/lazy"
import { Lazy, Navigation, Pagination } from "swiper"
import img1 from "../../assets/images/Elias/1-shfaf.png"
import img2 from "../../assets/images/Elias/2-shfaf.png"
import img3 from "../../assets/images/Elias/3-shfaf.png"
import img4 from "../../assets/images/Elias/4-shfaf.png"
import img5 from "../../assets/images/Elias/5-shfaf.png"
import img6 from "../../assets/images/Elias/imageavra.png"
import img7 from "../../assets/images/Elias/1imageavra.png"
function Ourwork({ idSection }) {
  return (
    <Cover>
      <section id={idSection}>
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
              <img src={img1} className="imgSlider" alt="our work" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} className="imgSlider" alt="our work" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} className="imgSlider" alt="our work" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} className="imgSlider" alt="our work" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} className="imgSlider" alt="our work" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} className="imgSlider" alt="our work" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} className="imgSlider" alt="our work" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Cover>
  )
}

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
