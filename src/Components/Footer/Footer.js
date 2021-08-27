import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Footer.css";

const footerItems = [
  {
    title: "Company",
    links: [
      {
        text: "About us",
        path: "/about-us",
      },
      {
        text: "Carrers",
        path: "/carrers",
      },
      {
        text: "Contact us",
        path: "/contact-us",
      },
    ],
  },
  {
    title: "Product",
    links: [
      {
        text: "How it works",
        path: "/how-it-work",
      },
      {
        text: "Membership plans",
        path: "/plans",
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        text: "How to get started",
        path: "/how-to-started",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        text: "Imprint",
        path: "/how-to-started",
      },
      {
        text: "Terms & Conditions",
        path: "/terms&condition",
      },
      {
        text: "Privacy Policy",
        path: "/privacy-policy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="pt-5 pb-2">
          <div className="row">
            {footerItems.map((footerItem) => (
              <div
                key={footerItem.title}
                className="col-md-3 col-sm-6 mb-3 mb-md-0 footer-link"
                style={{ justifyContent: "center" }}
              >
                <div>
                  <div>
                    <h6
                      className="fw-700 mb-3 text-white d-inline-block"
                      style={{ borderBottom: "1px solid" }}
                    >
                      {footerItem.title}
                    </h6>
                    {footerItem.links.map((link) => (
                      <p key={link.text} className="mb-2">
                        <Link
                          to={link.path}
                          className="text-white fw-600 footer-link"
                        >
                          {link.text}
                        </Link>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h6 className="text-center text-white">
            &copy; {new Date().getFullYear()} SQAREFEETBD
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
