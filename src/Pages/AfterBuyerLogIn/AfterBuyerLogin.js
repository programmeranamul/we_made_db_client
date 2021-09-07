import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllBuyerPost } from "./../../Redux/Actions/PostAction";
import "./AfterBuyerLogin.css";
import { checkVerifyP } from "../../Redux/Actions/VerifyPrimum";
import MyModal from "../../Components/Modeal/Modal";

const instracTion = [
  "Location of the property.",
  "Area calculation of net area and carpet area.",
  "Price.",
  "Check the facilities and amenities.",
  "Inspect the property physically.",
  "Verify and check land record.",
  "Ensure the property is legally authorized to be constructed.",
  "Clear estimate of the timeline for possession of apartment.",
  "Check with the banks that are filling to fund the project",
  "Read and understood the agreement paper in detail.",
  "Clear concept of hidden and additional charges.",
];


const AfterBuyerLogin = () => {
  const history = useHistory();
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const buyerPost = useSelector((state) => state?.allBuyerPostStore?.postList);
  const [contactUser, setContactUser] = useState(null);
  const dispatch = useDispatch();
 


  if (buyerAutyh.user.type !== "Buyer") {
    history.replace("/");
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

  useEffect(() => {
    dispatch(getAllBuyerPost());
  }, []);

  return (
    <div className="mt-3 mb-5">
      <div className="afterBuyerLogin  py-5">
        <div className="container index-1 text-white bg-blur">
          <h4 className="bg-primary p-2 rounded">
            No doubt, buying an apartment is a dream. Make sure of check few
            important issues to consider before buy an apartment or flat.
          </h4>
          <ul className="ps-5">
            {instracTion.map((item) => (
              <li className="item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 container">
        <p>
          <b>REHAB (Real Estate & Housing Association of Bangladesh)</b> is the
          only trade organization of Real Estate developers in Bangladesh. Here
          you find the Organizations name with REHAB Membership number [Source:
          www.rehab-bd.rg]
        </p>

        <div className="text-center">
          <a
            href="https://www.rehab-bd.org/index.php?page=members"
            target="_blank"
            rel="noreferrer"
            className="text-white bg-primary  px-2  text-decoration"
          >
            REHAB Member List
          </a>
        </div>
        {buyerPost.length > 0 ? (
          <div className="mb-135 mt-5">
            <div>
              <div className="row">
                {buyerPost.slice(0,3).map((post) => (
                  <div className="col-md-4 mb-4 mb-md-0 px-4">
                    <div className="text-center rounded border cursor-pointer" onClick={() => handelContact(post)}>
                      <div className="h-200 cover"><img src={post.image} className="w-100 h-100" alt="" /></div>
                      <div className="mt-3 mb-1">
                      <p className="mb-1"><b>{post.location}</b></p>
                      <p className="mb-1"><b>{post.size}</b></p>
                      <p className="mb-1"><b>{post.price}</b></p>
                      <p className="text-primary"><b>Contact</b></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                className="btn-sm btn btn-primary mt-3"
                onClick={() => history.push("/buyer/list")}
              >
                Show All
              </button>
            </div>
          </div>
        ) : null}
      </div>
      {randerModal()}
    </div>
  );
};

export default AfterBuyerLogin;
