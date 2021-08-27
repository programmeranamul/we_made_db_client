import React from "react";
import image from "../../Images/Broker Free.jpg";
import key from "../../Images/key.jpg";

const AfterBanner = () => {
  return (
    <div className="">
      <div className="broker-free">
        <div className="com-md-5 mx-auto p-5">
          <img className="broker-free-img" src={image} alt="Banner Here" />
        </div>
      </div>
      <div className="container">
        <div className="mt-3">
          <h2 className="text-sky text-center bounded py-2 after-title pb-4 mb-3">
            Direct easier communication between BUYER and SELLER
          </h2>
        </div>
        <div className="text-center">
          <img src={key} alt="Buyer" className="buyer" />
          <h2 className="mb-3">Buyer</h2>
          <h4 className="buyer-count">111 +</h4>
        </div>
      </div>
    </div>
  );
};

export default AfterBanner;
