import "./Newsletter.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { footerImg } from "/Users/HP/Desktop/ecomar website/client/src/assets/newsletter-bg.jpeg";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our privacy policy
        </div>
        <div className="social-ions">
          <div className="ions">
            <FaFacebookF size={14}></FaFacebookF>
          </div>
          <div className="ions">
            <FaTwitter size={14}></FaTwitter>
          </div>
          <div className="ions">
            <FaInstagram size={14}></FaInstagram>
          </div>
          <div className="ions">
            <FaLinkedinIn size={14}></FaLinkedinIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
