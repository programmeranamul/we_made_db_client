import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { activeSellerAccoutn } from "../../Redux/Actions/SellerAuthAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SellerAccountActive = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let { token } = useParams();

  const userStore = useSelector((state) => state.buyerAuthReducer);

  const handelSellerAccoutnActive = () => {
    const data = { token: token };
    dispatch(activeSellerAccoutn(data));
  };
  return (
    <div className="mt-4">
      <div className="container">
        <div className="text-center">
          <button
            className="btn btn-primary mx-auto"
            onClick={handelSellerAccoutnActive}
          >
            Active account{" "}
            {userStore.loading && (
              <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerAccountActive;
