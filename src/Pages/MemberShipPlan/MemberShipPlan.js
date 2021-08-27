import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

const MemberShipData = [
  //   {
  //     type: "Free",
  //     price: "BDT 0.00",
  //     service: [
  //       "Access to visit the buyer list only.",
  //       "connect with Marketing Qualified Lead (MQL) for further business communication.",
  //     ],
  //     paymentSystem: ["Free"],
  //   },
  {
    type: "Free",
    price: "BDT. 00.00",
    service: [
      {
        text: "Access to visit the buyer list.",
      },
      {
        text: "connect with Marketing Qualified Lead (MQL) for further business communication.",
        notAccess: "yes",
      },
    ],
    paymentSystem: ["Free"],
  },
  {
    type: "1 Month",
    price: "BDT. 2000.00",
    service: [
      {
        text: "Access to visit the buyer list.",
      },
      {
        text: "connect with Marketing Qualified Lead (MQL) for further business communication.",
      },
    ],
    paymentSystem: ["Bank", "Bkash", "Nagad"],
  },
  {
    type: "3 Months",
    price: "BDT. 5000.00",
    service: [
      {
        text: "Access to visit the buyer list.",
      },
      {
        text: "connect with Marketing Qualified Lead (MQL) for further business communication.",
      },
    ],
    paymentSystem: ["Bank", "Bkash", "Nagad"],
  },
];

const MemberShipPlan = () => {
  return (
    <div className="mt-3 pb-5">
      <div className="container">
        <h5 className="mb-2 pb-3">
          <b>Membership Plan:</b>
        </h5>
        <div className="row">
          {MemberShipData.map((memberShip) => (
            <div className="col-sm-4 mb-4 mt-2 mb-sm-0  d-flex">
              <div class=" d-flex">
                <div className="card">
                  <div className="card-header bg-white text-center text-orange fw-700">
                    <h5>{memberShip.type}</h5>
                  </div>
                  <ul class="list-group list-group-flush mb-auto">
                    {memberShip.service.map((data) => (
                      <li key={data} className="list-group-item">
                        <FontAwesomeIcon
                          icon={data.notAccess ? faTimes : faCheck}
                          className={
                            data.notAccess
                              ? "text-danger fw-700"
                              : "text-orange"
                          }
                        />{" "}
                        {data.text}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`card-footer  ${
                      memberShip.type !== "Free" ? "cursor-pointer" : ""
                    }`}
                  >
                    <h5 className="text-center mb-0 text-danger">
                      {memberShip.price}
                    </h5>
                    <div className="text-center">
                      {memberShip.paymentSystem.map((item) => (
                        <span className="d-inline-block mx-2 fw-700 text-orange">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4">
          <b>
            To pay your Membership fee through Bkash and Nagad (Send money) to
            <span className="text-danger"> 01739992976</span>.<br /> (Note:
            Please keep record of your transaction details).
          </b>
        </p>
      </div>
    </div>
  );
};

export default MemberShipPlan;
