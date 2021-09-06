import { adminConstanse } from "../Constanse";
import axios from "axios";
import { adminUserDelet, userUpgrafeConst } from "./../Constanse";

const token = localStorage.getItem("token");

export const getAllUser = () => {
  return async (dispath) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://ancient-dawn-67469.herokuapp.com/admin/allUser",
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );

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
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/admin/new",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
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

//delet a user

export const deletUser = (email) => {
  return async (dispath) => {
    dispath({ type: adminUserDelet.userDeletRequest });
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/admin/user/delet",
        email,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      console.log(res);
      dispath({
        type: adminUserDelet.userDeletSuccess,
        payload: res?.data?.message,
      });
    } catch (e) {
      console.log(e);
      dispath({
        type: adminUserDelet.userDeletFail,
        payload: { error: "e.response.data.error" },
      });
    }
  };
};

//upgradeForOneMonth
export const upgradeForOneMonth = (email) => {
  return async (dispath) => {
    dispath({ type: userUpgrafeConst.userUpgradeRequest });
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/admin/user/upgrate/1",
        email,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      dispath({
        type: userUpgrafeConst.userUpgradeSuccess,
        payload: res.data.message,
      });
    } catch (e) {
      console.log(e.response.data.error);
      dispath({
        type: userUpgrafeConst.userUpgradeFail,
        payload: e.response.data.error,
      });
    }
  };
};
//upgradeForOneMonth
export const upgradeForThreeMonth = (email) => {
  return async (dispath) => {
    dispath({ type: userUpgrafeConst.userUpgradeRequest });
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/admin/user/upgrate/3",
        email,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      dispath({
        type: userUpgrafeConst.userUpgradeSuccess,
        payload: res.data.message,
      });
    } catch (e) {
      console.log(e.response.data.error);
      dispath({
        type: userUpgrafeConst.userUpgradeFail,
        payload: e.response.data.error,
      });
    }
  };
};
//upgradeForOneMonth
export const upgradeForFree = (email) => {
  return async (dispath) => {
    dispath({ type: userUpgrafeConst.userUpgradeRequest });
    try {
      const res = await axios.post(
        "https://ancient-dawn-67469.herokuapp.com/admin/user/upgrate/free",
        email,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      );
      dispath({
        type: userUpgrafeConst.userUpgradeSuccess,
        payload: res.data.message,
      });
    } catch (e) {
      console.log(e.response.data.error);
      dispath({
        type: userUpgrafeConst.userUpgradeFail,
        payload: e.response.data.error,
      });
    }
  };
};

export const reloadUpgrade = () => {
  return (dispath) => {
    dispath({ type: userUpgrafeConst.clearUpgarde });
  };
};



