import selenaImg from "../../assets/images/selena.jpg";

import "./style/peopleInfo.style.css";

interface IPeopleInfo {
  imgSrc?: string;
}

const PeopleInfo = ({ imgSrc }: IPeopleInfo) => {
  return (
    <div className="info">
      <img src={selenaImg} className="info-img" alt="" />
      <div className="info-main">
        <h3 className="info-name">Selena Gomz</h3>
        <span className="info-old">22 years</span>
        <p className="info-desc">
          The salad is fresh!!! Don't ask about the sauce again, it's really
          delicious, it's going to be routine. I recommend this salad to all of
          you guys! because they really take care of the quality.
        </p>
      </div>
    </div>
  );
};

export default PeopleInfo;
