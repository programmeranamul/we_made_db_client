import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


const PrivetPage = ({ children, ...rest }) => {
const token = localStorage.getItem("token")

  return (
    <Route
      {...rest}
      render={({ location }) =>
      token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetPage;
