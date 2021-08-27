import React from "react";
import buyer from "../../Images/buyer.png";

import "./JoinNow.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const JoinType = () => {
  const history = useHistory();
  const state = useSelector((state) => state.buyerAuthReducer);

  const jointype = (type) => {
    history.push(`/join-us/${type}`);
  };

  if (state.authenticate) {
    if (state.user.type === "Buyer") {
      history.replace("/buyer/1");
    }
    if (state.user.type === "Seller") {
      history.replace("/seller/1");
    }
  }

  return (
    <div className="bg-min-light join-us-container text-bg py-70 -mb50px">
      <div className="container">
        <div className="col-md-8 col-12 mx-auto">
          <h3 className="text-center">Join now</h3>
          <p className="text-secondary text-center">
            To begin this journey, tell us what type of account you would like
            to open.
          </p>

          <div
            onClick={() => jointype("Buyer")}
            className="div cursor-pointer d-flex p-4 mt-5 mb-5 bg-light  rounded-9 shadow-90"
          >
            <img src={buyer} alt="" className="join-icon me-4" />
            <div>
              <h4>Join as a Buyer</h4>
              <p>Get ready to meet the Experts</p>
            </div>
          </div>
          <div
            className="div cursor-pointer  d-flex p-4 my-3  rounded-9 bg-light shadow-90"
            onClick={() => jointype("Seller")}
          >
            <img src={buyer} alt="" className="join-icon me-4" />
            <div>
              <h4>Join as a Seller</h4>
              <p>Explore the valued Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinType;
