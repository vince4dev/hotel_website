import bookTableCSS from "./BookTable.module.css";

// ASSETS
import testimonialImg from "./../../assets/home-1-testimonial-1.jpg";
import cardImg1 from "./../../assets/Amenities-image-box-1.png";
import cardImg2 from "./../../assets/Amenities-image-box-2.png";

function BookTable() {
  return (
    <div
      className={`${bookTableCSS.bookTable_wrapper} section`}
      id="bookingTable"
    >
      <div className={bookTableCSS.testimonial}>
        <div className={bookTableCSS.testimonial_wrapper}>
          <p>
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptates non, impedit dolorum fugiat deleniti doloremque
            reprehenderit debitis iste suscipit. Nam, aliquam? Sapiente eaque
            odio facilis distinctio eligendi vitae tempora".
          </p>

          <div className={bookTableCSS.profile}>
            <img src={testimonialImg} alt="user-image" />
            <h2>
              Andriana Jemiala <span>Sesigner</span>
            </h2>
          </div>

          <div className="ri-double-quotes-1"></div>
        </div>
      </div>

      <div className={bookTableCSS.bookTable_container}>
        <small>Let's Enjoy</small>
        <h2>Book Your Table</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          assumenda ipsam dolor? Laborum, sint culpa quo aperiam earum
          voluptatum quidem.
        </p>

        <div className={bookTableCSS.cards}>
          <div className={bookTableCSS.card}>
            <img src={cardImg1} alt="card-image" />

            <div className={bookTableCSS.card_content}>
              <h3>Restaurant - 10th Floor</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente inventore voluptatum necessitatibus eaque nihil
                voluptatem.
              </p>

              <a href="#">Book a Table</a>
            </div>
          </div>

          <div className={bookTableCSS.card}>
            <img src={cardImg2} alt="card-image" />

            <div className={bookTableCSS.card_content}>
              <h3>Restaurant - 11th Floor</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sapiente inventore voluptatum necessitatibus eaque nihil
                voluptatem.
              </p>

              <a href="#">Book a Table</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTable;
