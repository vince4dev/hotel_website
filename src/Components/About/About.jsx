import aboutCSS from "./../About/About.module.css";

// ASSETS
import aboutImg1 from "./../../assets/about-room.png";
import aboutImg2 from "./../../assets/bedroom-about.png";
import aboutImg3 from "./../../assets/signboard-about.png";
import aboutImg4 from "./../../assets/swimming-pool-about.png";

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`} id="about">
      <div className={aboutCSS.about_content}>
        <small className="section_heading">About Us</small>
        <h2>
          Enjoy Your Vacation In <span>Our Hotel</span> And Gets Lots Of Fun ,{" "}
          <span>Happiness And Great Pleasure</span>.
        </h2>
        <button>Explore Now</button>
      </div>

      <div className={aboutCSS.about_cards}>
        <div className={aboutCSS.about_card}>
          <img src={aboutImg1} alt="about-image" />
          <h3>Tasty Cuisines</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            amet eaque quidem
          </p>
        </div>
        <div className={aboutCSS.about_card}>
          <img src={aboutImg2} alt="about-image" />
          <h3>Fine Doubles Beds</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            amet eaque quidem
          </p>
        </div>
        <div className={aboutCSS.about_card}>
          <img src={aboutImg3} alt="about-image" />
          <h3>Free Medical Treatment</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            amet eaque quidem
          </p>
        </div>
        <div className={aboutCSS.about_card}>
          <img src={aboutImg4} alt="about-image" />
          <h3>Swimmimg Pool</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            amet eaque quidem
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
