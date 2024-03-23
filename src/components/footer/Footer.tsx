import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/footer.style.css";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-info">
        <div className="footer-content">
          <h2 className="footer-logo">
            <span className="text-primary">JEZ</span>
            <span> SALAD</span>
          </h2>
          <p className="footer-desc">
            Jez Salad is the pioneer of healthy fruit salad with high nutrition.
          </p>
        </div>
        <div className="footer-copyright">@Copyright Jez Food</div>
      </div>
      <div className="footer-feature">
        <h2 className="footer-name text-primary">Feature</h2>
        <ul className="footer-features">
          <li className="footer-feature-item">Menu</li>
          <li className="footer-feature-item">Menu</li>
          <li className="footer-feature-item">Menu</li>
          <li className="footer-feature-item">Menu</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h2 className="footer-name text-primary">Get in touch</h2>
        <div className="footer-contact-item">
          {/* icon  */}
          <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
          <span>8819 Ohio St. South Gate, CA 90280</span>
        </div>
        <div className="footer-contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
          <span>Ourstudio@hello.com</span>
        </div>
        <div className="footer-contact-item">
          <FontAwesomeIcon icon={faPhone} className="text-primary" />
          <span>+1 386-688-3295</span>
        </div>
      </div>
      <div className="footer-media">
        <div className="footer-social">
          <span className="footer-social-item">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-primary footer-social-icon"
            />
          </span>
          <span className="footer-social-item">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-primary footer-social-icon"
            />
          </span>
          <span className="footer-social-item">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-primary footer-social-icon"
            />
          </span>
        </div>
        <span>Follow our social media</span>
      </div>
    </div>
  );
};

export default Footer;
