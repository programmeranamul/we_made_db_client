import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import AdminList from "./AdminList";
import AdminSeller from "./AdminSeller";
import { useSelector } from 'react-redux';

const adminMenus = [
  { text: "Home", path: "/admin" },
  { text: "Seller", path: "/admin/v7/seller" },
  { text: "Buyer", path: "/admin/v7/buyer" },
  { text: "Admin List", path: "/admin/v8/lk/mk/list/admin" },
];


const AdminPage = () => {
  const history = useHistory();
const buyerAutyh = useSelector((state) => state.buyerAuthReducer);

if (buyerAutyh.user.type !== "admin") {
  history.replace("/");
}
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-sm-3 bg-light p-3 adminHeight">
            <div className="container">
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
          <div className="col-sm-9 bg-primary p-3 px-3 px-md-4 px-lg-5 text-white" style={{minHeight:"80vh"}}>
            <Switch>
              <Route exact path="/admin">
                <h4 className="text-center">Welcome to admin dashboard</h4>
              </Route>
              <Route path="/admin/seller">
                <AdminSeller />
              </Route>
              <Route path="/admin/v8/lk/mk/list/admin" exact>
                <AdminList />
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
