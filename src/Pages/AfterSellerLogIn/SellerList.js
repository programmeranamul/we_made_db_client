import React, { useState } from "react";
import { sellerDetailList } from "./SellerInitalData";
import buyerAvatar from "../../Images/buyerAvatar.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SellerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [sellerDetails, setSellerDetails] = useState(sellerDetailList);

  //get current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sellerDetails.slice(indexOfFirstPost, indexOfLastPost);

  //page number
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
                <div className="col-md-4 col-sm-6 p-4">
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
          </div>
        ) : (
          <h5 className="mb-4 pb-2 ">
            <b>No Seller Found !!</b>
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
    </div>
  );
};

export default SellerList;
