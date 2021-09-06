import React, { useState } from "react";
import buyerAvatar from "../../Images/buyerAvatar.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkPrimum } from "./../../Redux/Actions/BuyerAuthAction";
import { checkVerifyP } from "./../../Redux/Actions/VerifyPrimum";
import MyModal from "./../../Components/Modeal/Modal";

const SellerList = () => {
  const sellerPost = useSelector((state) => state?.allPostReducer?.postList) 

  //pagination
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [sellerDetails] = useState(sellerPost);
 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sellerDetails.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sellerDetails.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //if your not log in or not seller then redirect
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const history = useHistory();
  if (buyerAutyh.user.type !== "Seller") {
    history.replace("/buyer/1");
  }

  const [contactUser, setContactUser] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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

  const randerModal = () => {
    if (contactUser) {
      return (
        <MyModal
          show={show}
          handleClose={handleClose}
          name={contactUser.name}
        ></MyModal>
      );
    }
  };

  return (
    <div>
      <div className="container">
        {sellerDetails.length > 0 ? (
          <div className="mt-5">
            <h5 className="mb-4 p-2 text-black bg-orange rounded  d-inline-block">
              Our Buyers (Marketing Qualified Leads) are waiting for you.
            </h5>
            <div className="row">
              {currentPosts.map((item) => (
                <div
                  className="col-md-4 col-sm-6 p-4 mb-4 mb-md-0 cursor-pointer"
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
          </div>
        ) : (
          <h5 className="mb-4 pb-2 ">
            <b>No Buyer Found</b>
          </h5>
        )}

        {sellerDetails.length > postsPerPage ? (
          <div className=" pb-3 pt-3">
            <nav>
              <ul className="pagination flex-wrap d-flex justify-content-center">
                {pageNumbers.map((number) => (
                  <li
                    key={number}
                    className={`page-item cursor-pointer ${
                      number == currentPage ? "active" : ""
                    } `}
                  >
                    <a
                      onClick={() => setCurrentPage(number)}
                      className="page-link"
                    >
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </div>
      {randerModal()}
    </div>
  );
};

export default SellerList;
