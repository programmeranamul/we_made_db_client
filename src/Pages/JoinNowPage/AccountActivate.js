import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { buyerSingup } from "./../../Redux/Actions/BuyerAuthAction";
import { useHistory } from "react-router-dom";

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
    history.replace("/buyer/1")
  }

  return (
    <div className="mt-4">
      <div className="container">
        <div className="text-center">
          <button
            className="btn btn-primary mx-auto"
            onClick={handelAccoutnActive}
          >
            Active account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountActivate;
