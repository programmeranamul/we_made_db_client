import { premiumUserConst } from "./../Constanse";
import axios from "axios";

const token = localStorage.getItem("token");

export const getPrimumMember = () => {
  return async (dispatch) => {
    dispatch({ type: premiumUserConst.premiumUserReques });
    try {
      const res = await axios.get(
        "https://ancient-dawn-67469.herokuapp.com/admin/user/upgrate/all",
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
