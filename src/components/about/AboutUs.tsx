import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import "./style/aboutUs.style.css";
import PeopleInfo from "../peopleInfo/PeopleInfo";

const AboutUs = () => {
  return (
    <div className="bg-wrapper">
      <div className="about container">
        <div className="about-heading">
          <h1 className="about-title">
            what are people <br />
            saying <span className="text-primary">about us</span>
          </h1>
          <p className="about-desc">
            We are very happy if you are satisfied with our service and
            products, let's read pure reviews from customers who bought our
            products.
          </p>
          <div className="about-paginate">
            <div>
              {" "}
              <span className="text-large">02</span>
              <span> / 05</span>
            </div>
            <div className="about-paginate-action">
              <button>
                {" "}
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="people-list">
          <PeopleInfo />
          <PeopleInfo />
          <PeopleInfo />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
