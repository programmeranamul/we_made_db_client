import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

const UpgradeUser = () => {
  const { email } = useParams();
  const history = useHistory();
  const AdminStore = useSelector((state) => state.adminStore);
  const user = AdminStore.userList.find((item) => item.email === email);
  if (!user) {
    history.replace();
  }
  return (
    <div>
      <div>
        <h4>User Details</h4>
        <div className="p-3 bg-white text-black rounded">
          <h6>Name: {user.name}</h6>
          <h6>Email: {user.email}</h6>
          <h6>Type: {user.type}</h6>
          <h6>Membership: Free</h6>
          <h6>Upgrade as:</h6>
          <div>
            <button className="btn btn-primary btn-sm me-3">Free</button>
            <button className="btn btn-primary btn-sm me-3">1 Month</button>
            <button className="btn btn-primary btn-sm me-3">3 Month</button>
            <button className="btn btn-primary btn-sm">Delet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeUser;
