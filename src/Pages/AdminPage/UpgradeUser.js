import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  deletUser,
  getAllUser,
  reloadUpgrade,
  upgradeForFree,
  upgradeForOneMonth,
  upgradeForThreeMonth
} from "./../../Redux/Actions/AdminAction";
import { Alert } from "react-bootstrap";

const UpgradeUser = () => {
  const { email } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const AdminStore = useSelector((state) => state.adminStore);
  const userUgradeStore = useSelector((state) => state.userUgradeStore);
  const user = AdminStore?.userList?.find((item) => item.email === email);
  if (!user) {
    history.replace("/admin/v7/user");
  } 

  const upgradeOneMonth = () => {
    dispatch(upgradeForOneMonth(user));
  };
  const upgradeThreeMonth = () => {
    dispatch(upgradeForThreeMonth(user));
  };
  const upgradeFree = () => {
    dispatch(upgradeForFree(user));
  };

  if (AdminStore.success) {
    dispatch(getAllUser());
    history.replace("/admin/v7/user");
  }

  const handelBack = () => {
    dispatch(reloadUpgrade());
    history.push("/admin/v7/user");
  };

  return (
    <div>
      {user && (
        <div>
          <h4>User Details</h4>
          <div className="p-3 bg-white text-black rounded">
            <h6>Name: {user.name}</h6>
            <h6>Email: {user.email}</h6>
            <h6>Type: {user.type}</h6>
            <h6>Membership: Free</h6>
            <h6>Upgrade as:</h6>
            <div>
              <button className="btn btn-primary btn-sm me-3" onClick={upgradeFree}>Free</button>
              <button
                className="btn btn-primary btn-sm me-3"
                onClick={upgradeOneMonth}
              >
                1 Month
              </button>
              <button className="btn btn-primary btn-sm me-3" onClick = {upgradeThreeMonth}>3 Month</button>
              <button
                className="btn btn-primary btn-sm me-3"
                onClick={handelBack}
              >
                Go Back
              </button>
              <button
                className="btn btn-primary btn-sm me-3"
                onClick={() => dispatch(reloadUpgrade())}
              >
                Reload
              </button>
              {userUgradeStore.error && (
                <Alert className="text-center mt-3" variant={"danger"}>
                  {userUgradeStore.error}
                </Alert>
              )}
              {userUgradeStore.success && (
                <Alert className="text-center mt-3" variant={"success"}>
                  {userUgradeStore.success}
                </Alert>
              )}
              {userUgradeStore.loading && (
                <Alert className="text-center mt-3" variant={"primary"}>
                  Loading . . .
                </Alert>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpgradeUser;
