import React from "react";
import brokerFree from "../../Assest/Image/brokerFree.jpg";


const AfterBanner = () => {
  return (
    <div className="">
      <div className="broker-free">
        <div>
          <img src={brokerFree} className="w-100" alt="" />
        </div>
        <div className="com-md-5 mx-auto p-5">
          {/* <img className="broker-free-img" src={brokerFree} alt="Banner Here" /> */}
        </div>
      </div>

      <div className="Customer111 pt-4 pb-5 -mb50px">
        <div className="container">
          <div className="mt-3">
            <h2 className="text-white text-center bounded py-2 after-title pb-4 mb-3">
              Direct easier communication between BUYER and SELLER
            </h2>
          </div>
          <div className="text-center text-white pb-3">
            {/* <img src={key} alt="Buyer" className="buyer" /> */}
            <h2 className="mb-3 mt-4 pt-2 pb-2">Valuable Customers</h2>
            <h4 className="buyer-count mb-3">111 +</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterBanner;
