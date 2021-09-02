import React from "react";
import arrow from "../../Assest/Image/orangeRightArrow.png";

const startedData = ["Create Account", "Confirm Email", "Login", "Get Start"];

const GetStartedAfterBanner = () => {
  return (
    <div className="text-bg py-70 -mb50px">
      <div className="container">
        <div className="pt-3 pb-4">
          <div className="row">
            {startedData.map((data) => (
              <div
                key={data}
                className="col-md-3 col-sm-6 col-12 mb-70 mb-md-0"
              >
                <div className="sgbBox mx-auto">
                  <p className="fw-700 fs-17">{data}</p>
                  {data !== "Get Start" ? (
                    <img
                      className={`sgbBox-icon ${
                        data === "Confirm Your Email" ? "second-item" : null
                      }`}
                      src={arrow}
                      alt=""
                    />
                  ) : null}
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
