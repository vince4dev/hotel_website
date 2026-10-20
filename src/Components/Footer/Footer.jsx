import footerCSS from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${footerCSS.footer_wrapper} section`}>
      <div className={footerCSS.footer_links}>
        <h2>Contact</h2>
        <p>
          <a href="#">Reservation</a>
        </p>
        <p>
          <a href="#">Mission & Vision</a>
        </p>
        <p>
          <a href="#">Hotel Facilities</a>
        </p>
        <p>
          <a href="#">News & Blogs</a>
        </p>
        <p>
          <a href="#">Terms & Conditions</a>
        </p>
      </div>

      <div className={footerCSS.footer_links}>
        <h2>Help</h2>
        <p>
          <a href="#">FAQ</a>
        </p>
        <p>
          <a href="#">Careers</a>
        </p>
        <p>
          <a href="#">Website Feedback</a>
        </p>
        <p>
          <a href="#">Service Guarantee</a>
        </p>
      </div>

      <div className={footerCSS.footer_links}>
        <h2>Our Service</h2>
        <p>
          <a href="#">Store Directory</a>
        </p>
        <p>
          <a href="#">Top Hotels</a>
        </p>
        <p>
          <a href="#">Quick Links</a>
        </p>
        <p>
          <a href="#">Insights</a>
        </p>
      </div>

      <div className={footerCSS.footer_links}>
        <h2>Follow Us</h2>
        <p>
          <a href="#">Company</a>
        </p>
        <p>
          <a href="#">Partners</a>
        </p>
        <p>
          <a href="#">Customers</a>
        </p>
        <p>
          <a href="#">Pricing</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
