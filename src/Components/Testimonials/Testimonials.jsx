import testiCSS from "./Testimonials.module.css";

import user_1 from "./../../assets/home-testimonial-1.jpg";
import user_2 from "./../../assets/home-testimonial-2.jpg";
import user_3 from "./../../assets/home-testimonial-3.jpg";

function Testimonials() {
  return (
    <div className={`${testiCSS.testi_wrapper} section`} id="testimonials">
      <div className={testiCSS.testi_title}>
        <small className="section_heading">Testimonial</small>
        <h2>Happy Customer Thoughts</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel ratione
          corrupti maiores fugit consectetur.
        </p>
      </div>

      <div className={testiCSS.testi_cards}>
        <div className={testiCSS.testi_card}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            esse possimus excepturi doloribus cupiditate labore.
          </p>
          <div className={testiCSS.testi_profile}>
            <img src={user_1} alt="user-image" />
            <h2>
              Jenis Parkerman <span>Teacher</span>
            </h2>
            <i className="ri-double-quotes-l"></i>
          </div>
        </div>
        <div className={testiCSS.testi_card}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            esse possimus excepturi doloribus cupiditate labore.
          </p>
          <div className={testiCSS.testi_profile}>
            <img src={user_2} alt="user-image" />
            <h2>
              Lawrance <span>Teacher</span>
            </h2>
            <i className="ri-double-quotes-l"></i>
          </div>
        </div>
        <div className={testiCSS.testi_card}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            esse possimus excepturi doloribus cupiditate labore.
          </p>
          <div className={testiCSS.testi_profile}>
            <img src={user_3} alt="user-image" />
            <h2>
              Victoria <span>Lawer</span>
            </h2>
            <i className="ri-double-quotes-l"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
