import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./MembarShipPlan.css";
import { Modal, Button } from "react-bootstrap";

const MemberShipData = [
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelPayment = (type) => {
    if (type === "Free") {
      return;
    } else {
      handleShow();
    }
  };
  return (
    <>
      <div className="mt-3 pb-5 memberShip_conatiner">
        <div className="container">
          <h2 className="mb-2 rounded text-orange d-inline-block text-white bg-primary p-2 ">
            <b>Membership Plan</b>
          </h2>
          <div className="row">
            {MemberShipData.map((memberShip) => (
              <div className="col-sm-4 mb-4 mt-2 mb-sm-0  d-flex">
                <div class=" d-flex">
                  <div className="card">
                    <div className="card-header bg-white text-center text-orange fw-700">
                      <h5 className="text-sky">{memberShip.type}</h5>
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
                      onClick={() => handelPayment(memberShip.type)}
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
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Membership Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className=" p-2 ">
            <b>
              To pay your Membership fee through Bkash and Nagad (Send money )
              to <span> </span>
              <span className=" text-danger"> 01739992976</span>.<br />{" "}
              (Note: Please keep record of your transaction details and text
              your transaction number to Customer Support in live chat).
            </b>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MemberShipPlan;
