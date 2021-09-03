import React, { useEffect } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import AdminList from "./AdminList";
import AdminUser from "./AdminUser";
import { useSelector } from "react-redux";
import AddAdmin from "./AddAdmin";
import { useDispatch } from "react-redux";
import { getAllUser } from "./../../Redux/Actions/AdminAction";
import UpgradeUser from "./UpgradeUser";
import PremiumUser from './PremiumUser';

const adminMenus = [
  { text: "Home", path: "/admin" },
  { text: "User", path: "/admin/v7/user" },
  { text: "Admin List", path: "/admin/v8/lk/mk/list/admin" },
  { text: "premium User", path: "/admin/premium/user" },
];

const AdminPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);

  if (buyerAutyh.user.type !== "admin") {
    history.replace("/");
  }

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 bg-light p-3 adminHeight">
            <div className="">
              {adminMenus.map((item, index) => (
                <p key={index}>
                  <Link
                    className="text-black text-decoration-none fw-600"
                    to={item.path}
                  >
                    {item.text}
                  </Link>
                </p>
              ))}
            </div>
          </div>
          <div
            className="col-md-9 bg-primary p-3 px-3 px-md-4 px-lg-5 text-white"
            style={{ minHeight: "80vh" }}
          >
            <Switch>
              <Route exact path="/admin">
                <h4 className="text-center">Welcome to admin dashboard</h4>
              </Route>
              <Route path="/admin/v7/user" exact>
                <AdminUser />
              </Route>
              <Route path="/admin/new" exact>
                <AddAdmin />
              </Route>
              <Route path="/admin/v8/lk/mk/list/admin" exact>
                <AdminList />
              </Route>
              <Route path = "/admin/v7/user/upgrade/:email" >
                <UpgradeUser />
              </Route>
              <Route path = "/admin/premium/user" >
                <PremiumUser/>
              </Route>
              <Route path="*">
                <h4 className="text-center">Page Not Found</h4>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
// email: contact.sqftbd@gmail.com  cripsPass:  support.sqftbd@gmail.com
//support.sqftbd@gmail.com

export default AdminPage;
