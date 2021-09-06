import React from "react";
import { useHistory } from "react-router-dom";

const bannerText = [
  "Welcome to the largest",
  "B2C sourcing platform for",
  "Real Estate projects in Bangladesh.",
];

const Banner = () => {
  const history = useHistory();

  return (
    <div className="banner-container d-flex align-items-center mt-3">     
      <div className="container wrapper">
        <div className="row">
          <div className="col">
            <div className="mt-70">
              {bannerText.map((item) => (
                <h2 className="banner-text text-white" key={item}>
                  {item}
                </h2>
              ))}
            </div>
            <button
              className="btn bg-orange fw-700 mt-4"
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
