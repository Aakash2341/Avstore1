import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            corrupti, optio quis, illum repudiandae rerum neque voluptate
            aspernatur suscipit tempore non adipisci, molestias sit. Eum
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow></FaLocationArrow>
            <div className="text">
              chotu ram nagar, line par, bahardurghar 124507 (HR)
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt></FaMobileAlt>
            <div className="text">Phone: 7027xxxxxx</div>
          </div>
          <div className="c-item">
            <FaEnvelope></FaEnvelope>
            <div className="text">Email : aakash2341xx@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">pages</div>
          <span className="text">Home</span> <span className="text">About</span>{" "}
          <span className="text">Privacy policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Condition</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
