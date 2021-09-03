import { premiumUserConst } from "./../Constanse";
import axios from "axios";

const token = localStorage.getItem("token");

export const getPrimumMember = () => {
  return async (dispatch) => {
    dispatch({ type: premiumUserConst.premiumUserReques });
    try {
      const res = await axios.get(
        "http://localhost:8080/admin/user/upgrate/all",
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );      
      dispatch({
        type: premiumUserConst.premiumUserSuccess,
        payload: res.data.upgradeUser,
      });
    } catch (e) {
      dispatch({
        type: premiumUserConst.premiumUserFail,
        payload: e.response.data.error,
      });
    }
  };
};
