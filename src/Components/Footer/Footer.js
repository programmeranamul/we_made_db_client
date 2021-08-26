import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        text: "How it work",
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
        text: "How to get start",
        path: "/how-to-start",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        text: "How to get start",
        path: "/how-to-start",
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
              <div key={footerItem.title} className="col-md-3">
                <h6 className="fw-700 mb-3 text-white">{footerItem.title}</h6>
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
            ))}
          </div>
          <h6 className="text-center text-white">
            {new Date().getFullYear()} SQAREFEETBD
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
