import React, {useEffect} from "react";
import { useState } from "react";
import { Alert} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MyModal from "../../Components/Modeal/Modal";
import { getAllBuyerPost } from "../../Redux/Actions/PostAction";
import { checkVerifyP } from './../../Redux/Actions/VerifyPrimum';


const BuyerCompanyListPage = () => { 
 

  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const history = useHistory();
  const buyerPost = useSelector((state) => state?.allBuyerPostStore?.postList);
  const dispatch = useDispatch();
  const [contactUser, setContactUser] = useState(null);


  useEffect(() => {
    dispatch(getAllBuyerPost());
  }, []);


  if (buyerAutyh.user.type !== "Buyer") {
    history.replace("/");
  }
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = buyerPost.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(buyerPost.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //modal open and close
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

   //handel contact
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

  //rander modal
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
    <div>
      <div className="container">
        <div className="mt-5">
          <p>
            <b>REHAB (Real Estate & Housing Association of Bangladesh)</b> is
            the only trade organization of Real Estate developers in Bangladesh.
            Here you find the Organizations name with REHAB Membership number
          </p>
          {currentPosts.length > 0 ? (
            <div className="mt-4">
              <div className="row">
                {
                  currentPosts.map((post) => (
                    <div className="col-md-4 mb-4 px-4" onClick={() => handelContact(post)}>
                      <div className="text-center rounded border cursor-pointer">
                      <div className="h-200 cover"><img src={post.image} className="w-100 h-100" alt="" /></div>
                        <div className="mt-3 mb-1">
                        <p className="mb-1"><b>{post.location}</b></p>
                        <p className="mb-1"><b>{post.size}</b></p>
                        <p className="mb-1"><b>{post.price}</b></p>
                        <p className="text-primary"><b>Contact</b></p>
                        </div>
                      </div>
                    </div>
                  ))
                }                
              </div>
            </div>
          ) : <Alert variant={"danger"} className="mt-4">No Seller Found</Alert>}
        </div>
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
        {randerModal()}
      </div>

    </div>
  );
};

export default BuyerCompanyListPage;
