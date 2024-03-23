import Button from "../button/Button";
import "./style/contact.style.css";

const Contact = () => {
  return (
    <div className="contact container">
      <p className="contact-name text-primary text-center">Our Subscribe</p>
      <h1 className="contact-title text-center">
        Subscribe To Get The Latest <br /> Promo from Jez Salad
      </h1>
      <p className="contact-desc text-center">
        We recommended you to subscribe to our promo program, <br /> drop your
        email below to get daily update about us
      </p>
      <div className="contact-action text-center">
        <input type="text" placeholder="Enter your email address" />
        <Button>Subscribe</Button>
      </div>
    </div>
  );
};

export default Contact;
