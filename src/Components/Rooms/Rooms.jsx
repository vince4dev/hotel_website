import roomsCSS from "./Rooms.module.css";

// ASSETS
import roomImg1 from "./../../assets/room-detail-1-1-900x560.jpg";
import roomImg2 from "./../../assets/room-detail-2-900x560.jpg";
import roomImg3 from "./../../assets/room-detail-3-900x560.jpg";
import roomImg4 from "./../../assets/room-detail-4-900x560.jpg";
import roomImg5 from "./../../assets/room-detail-5-900x560.jpg";
import roomImg6 from "./../../assets/room-detail-6-900x560.jpg";

function Rooms() {
  return (
    <div className={`${roomsCSS.rooms_wrapper} section`} id="rooms">
      <div className={roomsCSS.rooms_title}>
        <small className="section_heading">Royal & Luxury</small>
        <h2>Choose Elegant Room</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusamus
          deserunt quidem fuga modi iure ea voluptatum esse velit quasi.
        </p>
      </div>

      <div className={roomsCSS.rooms_cards}>
        <div className={roomsCSS.rooms_card}>
          <div className={roomsCSS.rooms_image}>
            <img src={roomImg1} alt="rooms-images" />
          </div>
          <div className={roomsCSS.rooms_card_info}>
            <p>1 Double Bed - 2 Guest</p>
            <h2>Suit Room</h2>
          </div>
          <p className={roomsCSS.price}>$45/Night</p>
        </div>
        <div className={roomsCSS.rooms_card}>
          <div className={roomsCSS.rooms_image}>
            <img src={roomImg2} alt="rooms-images" />
          </div>
          <div className={roomsCSS.rooms_card_info}>
            <p>1 Queen Size Bed - 2 Guest</p>
            <h2>Superior Suite</h2>
          </div>
          <p className={roomsCSS.price}>$55/Night</p>
        </div>
        <div className={roomsCSS.rooms_card}>
          <div className={roomsCSS.rooms_image}>
            <img src={roomImg3} alt="rooms-images" />
          </div>
          <div className={roomsCSS.rooms_card_info}>
            <p>1 Queen Size Bed - 2 Guest</p>
            <h2>Queen Room</h2>
          </div>
          <p className={roomsCSS.price}>$45/Night</p>
        </div>
        <div className={roomsCSS.rooms_card}>
          <div className={roomsCSS.rooms_image}>
            <img src={roomImg4} alt="rooms-images" />
          </div>
          <div className={roomsCSS.rooms_card_info}>
            <p>1 Queen size Bed - 2 Guest</p>
            <h2>Superior Suite</h2>
          </div>
          <p className={roomsCSS.price}>$55/Night</p>
        </div>
        <div className={roomsCSS.rooms_card}>
          <div className={roomsCSS.rooms_image}>
            <img src={roomImg5} alt="rooms-images" />
          </div>
          <div className={roomsCSS.rooms_card_info}>
            <p>1 Double Bed - 2 Guest</p>
            <h2>Suit Room</h2>
          </div>
          <p className={roomsCSS.price}>$45/Night</p>
        </div>
        <div className={roomsCSS.rooms_card}>
          <div className={roomsCSS.rooms_image}>
            <img src={roomImg6} alt="rooms-images" />
          </div>
          <div className={roomsCSS.rooms_card_info}>
            <p>1 Queen size Bed - 2 Guest</p>
            <h2>Superior Suite</h2>
          </div>
          <p className={roomsCSS.price}>$55/Night</p>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
