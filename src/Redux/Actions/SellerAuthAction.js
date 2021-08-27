import axios from "axios";
import { activateEmail, sellerConstanse } from "./../Constanse";
//seller joinin request for email activation
export const sellerJoinRequest = (datas) => {
  return async (dispatch) => {
    dispatch({ type: sellerConstanse.sellerSingUpRequest });
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/seller/joinin",
        datas
      );

      dispatch({
        type: activateEmail.activateEmailSuccessConstanse,
        payload: "Go to your email and active your account",
      });
    } catch (e) {
      console.log(e.response.data.error);
      dispatch({
        type: sellerConstanse.sellerSingUpFail,
        payload: { error: e.response.data.error },
      });
    }
  };
};

// verify email and active account
export const activeSellerAccoutn = (datas) => {
  return async (dispatch) => {
    dispatch({ type: sellerConstanse.sellerSingUpRequest });
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/account/seller/active",
        datas
      );
      const { user, token, message } = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      dispatch({
        type: sellerConstanse.sellerSingUpSuccess,
        payload: { user, token, message: "New account create successful" },
      });
    } catch (e) {
      console.log(e.response.data.error);
      dispatch({
        type: sellerConstanse.sellerSingUpFail,
        payload: { error: e.response.data.error },
      });
    }
  };
};
