import staffsCSS from "./Staffs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// ASSETS
import staff_image_1 from "./../../assets/team-1.jpg";
import staff_image_2 from "./../../assets/team-2.jpg";
import staff_image_3 from "./../../assets/team-3.jpg";
import staff_image_4 from "./../../assets/team-4.jpg";
import staff_image_5 from "./../../assets/team-5.jpg";
import staff_image_6 from "./../../assets/team-6.jpg";

function Staffs() {
  return (
    <div className={`${staffsCSS.staffs_wrapper} section`} id="staffs">
      <div className={staffsCSS.staffs_title}>
        <small className="section_heading">Precious</small>
        <h2>Meet Our Staff Members</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          dolore, incidunt unde rem natus provident!
        </p>
      </div>

      <div className={staffsCSS.staffs_container}>
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          speed={1500}
          loop={true}
          autoplay={{ delay: 800 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={staffsCSS.staffs_card}>
              <img src={staff_image_1} alt="staff-image" />

              <div className={staffsCSS.staffs_details}>
                <h3>Lisha</h3>
                <p>Lead House Keeper</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={staffsCSS.staffs_card}>
              <img src={staff_image_2} alt="staff-image" />

              <div className={staffsCSS.staffs_details}>
                <h3>David</h3>
                <p>Senior Chef</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={staffsCSS.staffs_card}>
              <img src={staff_image_3} alt="staff-image" />

              <div className={staffsCSS.staffs_details}>
                <h3>Johnson</h3>
                <p>Server</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={staffsCSS.staffs_card}>
              <img src={staff_image_4} alt="staff-image" />

              <div className={staffsCSS.staffs_details}>
                <h3>Saraa</h3>
                <p>House Keeping</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={staffsCSS.staffs_card}>
              <img src={staff_image_5} alt="staff-image" />

              <div className={staffsCSS.staffs_details}>
                <h3>Anika</h3>
                <p>Receptionnist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={staffsCSS.staffs_card}>
              <img src={staff_image_6} alt="staff-image" />

              <div className={staffsCSS.staffs_details}>
                <h3>Mathews</h3>
                <p>Supervisor</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Staffs;
