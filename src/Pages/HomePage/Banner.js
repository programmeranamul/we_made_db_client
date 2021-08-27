import React from "react";
import { Container } from "react-bootstrap";
import test from "../../Images/harmen-jelle-van-mourik-0yfWDwHOB0g-unsplash.jpg";
import { useHistory } from "react-router-dom";

const bannerText = [
  "Welcome to the largest",
  "B2C sourcing platform for",
  "Real Estate projects in Bangladesh",
];

const Banner = () => {
  const history = useHistory();

  return (
    <div className="banner-container d-flex align-items-center mt-3">
      {/* <img src={test} alt="" className="banner-bg"/> */}
      <div className="container wrapper">
        <div className="row">
          <div className="col">
            <div>
              {bannerText.map((item) => (
                <h1 className="banner-text text-white" key={item}>
                  {item}
                </h1>
              ))}
            </div>
            <button
              className="btn bg-sky fw-700 mt-4"
              onClick={() => history.push("/join-us")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
