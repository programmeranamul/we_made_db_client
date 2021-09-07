import React, { useState, useEffect } from "react";
import { afterSellerDesData} from "./SellerInitalData";
import buyerAvatar from "../../Images/buyerAvatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./AfterSellerLogIn.css";
import { checkPrimum } from "./../../Redux/Actions/BuyerAuthAction";
import MyModal from "../../Components/Modeal/Modal";
import { checkVerifyP } from "../../Redux/Actions/VerifyPrimum";
import { Alert } from "react-bootstrap";
import { getSellerAllPost } from "../../Redux/Actions/PostAction";

const AfterSellerLoginPage = () => {
  const [afterSellerDes, setAfterSellerDes] = useState(afterSellerDesData);
  const [contactUser, setContactUser] = useState(null);
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const sellerPost = useSelector((state) => state?.allPostReducer?.postList)
  const dispatch = useDispatch()

  
 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const history = useHistory();

  if (buyerAutyh.user.type !== "Seller") {
    history.replace("/");
  }
  if (buyerAutyh.user.type === "Seller") {
    history.replace("/seller/1");
  }
  checkPrimum(buyerAutyh.user.email);

  const handelContact = (userDetails) => {
    const proToken = localStorage.getItem("proToken");
    if (proToken) {
      checkVerifyP(proToken);
      setContactUser(userDetails);
      setShow(true);
    } else {
      history.push("/plans");
    }
    
  };


  useEffect(() => {
    dispatch(getSellerAllPost());
  }, [])

 
 
  const randerModal = () => {
    if (contactUser) {
      return (
        <MyModal
          show={show}
          handleClose={handleClose}
          contactOption={contactUser}
         
        ></MyModal>
      );
    }
  };

  return (
    <>
      <div className="pb-5">
        <div className="AfterSelerTop py-5">
          <div className="container index-1 text-white bg-blur">
            <h4 className="d-inline-block bg-sky text-white p-2 rounded">
              Sales is an art that requires the ability to form good
              relationships with others as well as a science that requires the
              development of successful, repeatable strategies.{" "}
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
          {sellerPost.length > 0 ? (
            <div className="mt-5">
              <h5 className="mb-4 p-2 bg-orange text-black rounded d-inline-block">
                Our Buyers (Marketing Qualified Leads) are waiting for you.
              </h5>
              <div className="row">
                {sellerPost.slice(0,3).map((item) => (
                  <div
                    key={item.name}
                    className="col-md-4 p-4 mb-4 mb-md-0 cursor-pointer "
                    onClick={() => handelContact(item)}
                  >
                    <div className="card p-4 rounded-9 text-center">
                      <img
                        className="w-75px buyerCardLogo"
                        src={buyerAvatar}
                        alt=""
                      />
                      <h5 className="fw-700">{item.name}</h5>
                      <p className="m-0">
                        <b>{item.work}</b>
                      </p>
                      <p className="m-0 fw-600">{item.location}</p>
                      <p className="m-0 fw-600">{item.size}</p>
                      <p className="m-0 fw-600">{item.date}</p>
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
          ) : <Alert variant={"danger"} className="mt-4">No Buyer Active Now</Alert>}
        </div>
      </div>
      {randerModal()}
    </>
  );
};

export default AfterSellerLoginPage;
