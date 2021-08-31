import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buyerSingup } from "./../../Redux/Actions/BuyerAuthAction";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const AccountActivate = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let { token } = useParams();
  const handelAccoutnActive = () => {
    const data = { token: token };
    dispatch(buyerSingup(data));
  };
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);

  if (buyerAutyh.authenticate) {
    history.replace("/buyer/1");
  }

  return (
    <div className="mt-3 mb-5 pb-5">
      <div className="container">
        <div className="text-center">
          <h5 className="text-sky">Please active your account.</h5>
          <button
            className="btn btn-primary mx-auto"
            onClick={handelAccoutnActive}
          >
            Active account
            {buyerAutyh.loading && (
              <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountActivate;
