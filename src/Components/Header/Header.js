import React from "react";
import logo from "../../Images/SQFT Logo.jpeg";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./../../Redux/Actions/BuyerAuthAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const menuItem = [
  {
    text: "About us",
    path: "/about-us",
  },
  {
    text: "How to get started",
    path: "/how-to-started",
  },
  {
    text: "Why join with us",
    path: "/why-join-us",
  },
  {
    text: "Benefits of member",
    path: "/benefite-of-member",
  },  
];

const Header = () => {
  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const handelLogOut = () => {
    dispatch(logOut());
  };
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} className="logo" alt="Logo Here" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {menuItem.map((item) => (
                <Nav.Link
                  as={Link}
                  to={item.path}
                  key={item.text}
                  className="menu bg-orange ms-3 rounded mb-3 mb-md-0"
                >
                  {item.text}
                </Nav.Link>
              ))}
              {buyerAutyh.authenticate && buyerAutyh.user.type === "Buyer" ? (
                <Nav.Link
                  as={Link}
                  to={"/buyer/1"}
                  className="menu bg-orange ms-3 rounded mb-3 mb-md-0"
                >
                  Buyer
                </Nav.Link>
              ) : null}
              {buyerAutyh.authenticate && buyerAutyh.user.type === "Seller" ? (
                <Nav.Link
                  as={Link}
                  to={"/seller/1"}
                  className="menu bg-orange ms-3 rounded mb-3 mb-md-0"
                >
                  Seller
                </Nav.Link>
              ) : null}
              {buyerAutyh.authenticate && buyerAutyh.user.type === "admin" ? (
                <Nav.Link
                  as={Link}
                  to={"/admin"}
                  className="menu bg-orange ms-3 rounded mb-3 mb-md-0"
                >
                  Admin
                </Nav.Link>
              ) : null}
              {buyerAutyh.authenticate ? (
                <Nav.Link
                  onClick={handelLogOut}
                  className="menu bg-orange ms-3 rounded mb-3 mb-md-0"
                >
                  Log Out{" "}
                  {buyerAutyh.loading && (
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                  )}
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    to={"/join-us"}
                    className="menu bg-orange ms-3 rounded mb-3 mb-md-0"
                  >
                    Join now
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={"/login"}
                    className="menu bg-orange ms-3 rounded mb-3 mb-md-0"
                  >
                    Log in
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

// safidev96@gmail.com
// safidev1234

// codershero5@gmail.com
// C0ders@her0_5$#
