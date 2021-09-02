import React from "react";
import AilrLance from "../../Images/Airlines Discount.jpg";
import Busdescount from "../../Images/Bus Discount.jpg";
import carDiscount from "../../Images/Car Showroom Discount.jpg";
import FashonDiscount from "../../Images/Fashion Brand Discount.jpg";
import GroceyDiscount from "../../Images/Grocery Discount.jpg";
import HospitalDiscount from "../../Images/Hospital Discount.jpg";
import swap1 from "../../Images/swap.com logo with offer.jpg";
import swap2 from "../../Images/Swap Europe.jpg";
import swap3 from "../../Images/SWAP Society.jpeg";

const Bangladesh = [
  HospitalDiscount,
  GroceyDiscount,
  AilrLance,
  carDiscount,
  FashonDiscount,
  Busdescount,
];

const outSideBd = [swap1, swap2, swap3];

const BeniFitDes = () => {
  return (
    <div className="text-bg -mb50px pt-70">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2 className="after-dis-title p-2 rounded text-center bg-orange text-black d-inline-block pb-3 mb-4">
              Member (Bangladesh)
            </h2>
          </div>
          {Bangladesh.map((discount) => (
            <div
              key={discount}
              className="col-md-4 col-sm-6 col-12 mb-5 mt-2  p-5 "
            >
              <div className="p-3">
                <img src={discount} alt="discount" className="img-fluid" />
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="text-center">
            <h2 className="after-dis-title p-2 rounded text-center bg-orange text-black d-inline-block pb-3 mb-4">
              Member (Non-Resident Bangladeshi)
            </h2>
          </div>
          {outSideBd.map((discount) => (
            <div
              key={discount}
              className="col-md-4 col-sm-6 col-12 mb-5 mt-2  p-5 d-flex justify-content-center align-items-center"
            >
              <div className="p-3">
                <a href="#">
                  <img src={discount} alt="discount" className="img-fluid" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeniFitDes;
