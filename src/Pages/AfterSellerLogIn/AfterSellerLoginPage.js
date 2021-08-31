import React, { useState } from "react";
import { afterSellerDesData, sellerDetailList } from "./SellerInitalData";
import buyerAvatar from "../../Images/buyerAvatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AfterSellerLogIn.css";

const AfterSellerLoginPage = () => {
  const [afterSellerDes, setAfterSellerDes] = useState(afterSellerDesData);
  const [sellerDetails, setSellerDetails] = useState(sellerDetailList);
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const history = useHistory();
  if (buyerAutyh.user.type !== "Seller") {
    history.replace("/");
  }
  if (buyerAutyh.user.type === "Seller") {
    history.replace("/seller/1");
  }

  return (
    <div className="pb-5">
      <div className="AfterSelerTop py-5">
        <div className="container index-1 text-black bg-blur">
          <h4>
            Sales is an art that requires the ability to form good relationships
            with others as well as a science that requires the development of
            successful, repeatable strategies.{" "}
          </h4>
          <p>
            <b>Simple keys to success in sales.</b>{" "}
          </p>
          <ul className="ps-5">
            {afterSellerDes.map((items) => (
              <li key={items}>{items}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        {sellerDetails.length > 0 ? (
          <div className="mt-5">
            <h5 className="mb-4 pb-2">
              <b>Our Buyers (Marketing Qualified Leads) are waiting for you</b>
            </h5>
            <div className="row">
              {sellerDetails.slice(0, 3).map((item) => (
                <div key={item.name} className="col-md-4 p-4 cursor-pointer">
                  <div className="card p-4 rounded-9 text-center">
                    <img
                      className="w-75px buyerCardLogo"
                      src={buyerAvatar}
                      alt=""
                    />
                    <h5 className="fw-700">{item.name}</h5>
                    <p className="m-0">
                      <b>{item.profession}</b>
                    </p>
                    <p className="m-0 fw-600">{item.location}</p>
                    <p className="m-0 fw-600">{item.size}</p>
                    <p className="m-0 fw-600">{item.schedule}</p>
                    <p className="m-0 mt-1 fw-600 text-sky">Contact</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => history.push("/seller/show-all")}
              className="btn btn-sm btn-primary"
            >
              Show All <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AfterSellerLoginPage;
