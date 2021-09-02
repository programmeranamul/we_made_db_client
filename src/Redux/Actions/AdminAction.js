import { adminConstanse } from "../Constanse";
import axios from "axios";

export const getAllUser = () => {
  return async (dispath) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://ancient-dawn-67469.herokuapp.com/admin/allUser", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      dispath({
        type: adminConstanse.getAllUserSuccess,
        payload: res.data,
      });
    } catch (e) {
      dispath({
        type: adminConstanse.getAllUserFail,
        payload: { error: "Please reload this page" },
      });
    }
  };
};

export const addNewAdmin = (data) => {
  return async (dispath) => {
    dispath({ type: adminConstanse.addNewAdminRequest });
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("https://ancient-dawn-67469.herokuapp.com/admin/new", data, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      dispath({
        type: adminConstanse.addNewAdminSuccess,
        payload: res.data,
      });      
    } catch (e) {
      console.log(e);
      dispath({
        type: adminConstanse.addNewAdminFail,
        payload: { error: e.response.data.error },
      });
    }
  };
};
