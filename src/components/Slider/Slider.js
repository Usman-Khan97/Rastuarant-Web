import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import slide01 from "../../assets/slide01.avif";
import slide02 from "../../assets/slide02.avif";
import slide03 from "../../assets/slide03.avif";
import slide04 from "../../assets/slide04.jpg";
import slide05 from "../../assets/slide05.jpg";
import slide06 from "../../assets/slide06.jpg";
const Slider = () => {
  return (
    <>
      <div id="Slider" className="container-fluid">
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y, EffectCoverflow, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              style={{ width: "35rem", height: "20rem" }}
              className="slider-image"
              src={slide01}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "35rem", height: "20rem" }}
              className="slider-image"
              src={slide02}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "35rem", height: "20rem" }}
              className="slider-image"
              src={slide03}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "35rem", height: "20rem" }}
              className="slider-image"
              src={slide04}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "35rem", height: "20rem" }}
              className="slider-image"
              src={slide05}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              style={{ width: "35rem", height: "20rem" }}
              className="slider-image"
              src={slide06}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
