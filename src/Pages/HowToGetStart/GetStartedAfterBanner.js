import React from "react";
import arrow from "../../Images/icons8-arrow-48.png";

const startedData = [
  "Create Your Account",
  "Confirm your email",
  "Login",
  "Getstart",
];

const GetStartedAfterBanner = () => {
  return (
    <div>
      <div className="container">
        <h3 className="mx-auto col-md-7 col-lg-6 col-sm-10 col-12 text-center get_h3 pb-4">
          For buyers, fabric suppliers and apparel manufacturers
        </h3>
        <div className="mt-5">
          <div className="row">
            {startedData.map((data) => (
              <div key={data} className="col-md-3 col-sm-6 col-12 mb-4 mt-2 mb-md-0">
                <div className="sgbBox mx-auto">
                  <p className="fw-700">{data}</p>
                  <img className="sgbBox-icon" src={arrow} alt="" />
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedAfterBanner;
