import headerCSS from "./../Header/Header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// ASSETS
import sliderImg1 from "./../../assets/Herittage-header-1.jpg";
import sliderImg2 from "./../../assets/Herittage-header-2.jpg";
import sliderImg3 from "./../../assets/Herittage-header-3.jpg";
import ratingImg from "./../../assets/rating-image-1.png";

function Header() {
  return (
    <div className={headerCSS.header_wrapper}>
      <div className={headerCSS.Swiper_Slider_wrapper}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ Delay: 1500 }}
          speed={1500}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={headerCSS.Slider_item}>
              <img src={sliderImg1} alt="header-slider-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={headerCSS.Slider_item}>
              <img src={sliderImg2} alt="header-slider-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={headerCSS.Slider_item}>
              <img src={sliderImg3} alt="header-slider-image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={headerCSS.header_content}>
        <small>Luxury</small>
        <h2>
          Find Your Luxury Rooms <br /> & Enjoy Your Vacation
        </h2>

        <div className={headerCSS.rating_container}>
          <img src={ratingImg} alt="rating-image" />
          <span>
            4.9 Google Rated <br /> Around Globe
          </span>
        </div>

        <div className={headerCSS.booking_container}>
          <div className={headerCSS.input_wrapper}>
            <label>Check In : - </label>
            <input type="date" name="" id="" />
          </div>
          <div className={headerCSS.input_wrapper}>
            <label>Check Out : - </label>
            <input type="date" name="" id="" />
          </div>
          <div className={headerCSS.input_wrapper}>
            <label>Adults : - </label>
            <input type="texte" name="" id="" />
          </div>
          <div className={headerCSS.input_wrapper}>
            <label>Children : - </label>
            <input type="texte" name="" id="" />
          </div>

          <button>Check Avaliability</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
