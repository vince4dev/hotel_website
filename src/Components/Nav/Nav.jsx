import React, { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";

function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.showMenu);
  };

  return (
    <div className={navCSS.nav_wrapper}>
      <div className={navCSS.nav_top}>
        <div className={navCSS.left_side}>
          <span>+33 (0)7 54 67 87 36</span>
          <span>vince@company.com</span>
        </div>
        <div className={navCSS.right_side}>
          <span>ENG-</span>
          <span>FR-</span>
          <span>BT-</span>
          <span>SP-</span>
          <span>FB</span>
        </div>
      </div>

      <div className={navCSS.nav_bottom}>
        {/* Logo */}
        <div className={navCSS.logo}>
          <a href="#">Herittage</a>
        </div>

        {/* Mav Menu */}
        <ul ref={menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#rooms">Rooms</a>
          </li>
          <li>
            <a href="#bookingTable">Booking Table</a>
          </li>
          <li>
            <a href="#offer">Offer</a>
          </li>
          <li>
            <a href="#staffs">Our Staffs</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Button */}
        <div className={navCSS.nav_btns}>
          <button>Book a Table</button>

          <div className={navCSS.bars} onClick={menuHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
