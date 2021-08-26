import React from "react";
import buyer from "../../Images/buyer.png";
import seller from "../../Images/seller.png";
import JoinNow from "./JoinNow";
import "./JoinNow.css";
import { useHistory } from "react-router-dom";

const JoinType = () => {
  const history = useHistory();

  const jointype = (type) => {
    history.push(`/join-us/${type}`);
  };

  return (
    <div className="bg-min-light">
      <div className="container">
        <div className="col-md-8 col-12 mx-auto">
          <h3 className="text-center">Join Us!</h3>
          <p className="text-secondary text-center">
            To begin this journey, tell us what type of account you would like
            to open.
          </p>

          <div
            onClick={() => jointype("Buyer")}
            className="div cursor-pointer d-flex p-4 mt-5 mb-5  rounded-9 shadow-90"
          >
            <img src={buyer} alt="" className="join-icon me-4" />
            <div>
              <h4>Join as a Buyer</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, optio?
              </p>
            </div>
          </div>
          <div
            className="div cursor-pointer  d-flex p-4 my-3  rounded-9 shadow-90"
            onClick={() => jointype("Seller")}
          >
            <img src={buyer} alt="" className="join-icon me-4" />
            <div>
              <h4>Join as a Buyer</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, optio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinType;
