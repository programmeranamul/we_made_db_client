import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.css";
import {
  fab,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//<FontAwesomeIcon icon="coffee" />

const footerItems = [
  {
    title: "Company",
    links: [
      {
        text: "About us",
        path: "/about-us",
      },
      {
        text: "Careers",
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
      {
        text: "Affiliate Marketer",
        path: "/affiliate-marketer",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        text: "Imprint",
        path: "/imprint",
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
    social: [
      { icon: faFacebook, link: "https://web.facebook.com/Squarefeetbd.official" },
      { icon: faYoutube, link: "#" },
      { icon: faLinkedin, link: "#" },
      { icon: faInstagram, link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer bg-orange">
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
                      className="fw-700 mb-3 d-inline-block"
                      style={{ borderBottom: "1px solid" }}
                    >
                      {footerItem.title}
                    </h6>
                    {footerItem.links.map((link) => (
                      <p key={link.text} className="mb-2">
                        <Link
                          to={link.path}
                          className="text-dark fw-600 footer-link"
                        >
                          {link.text}
                        </Link>
                      </p>
                    ))}
                    {footerItem.social &&
                      footerItem.social.map((item, index) => (
                        <a href={item.link} target="_blank" rel="noreferrer" className="social-icon" key={index}>
                          <FontAwesomeIcon icon={item.icon} />
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h6 className="text-center ">
            &copy; {new Date().getFullYear()} SQAREFEETBD
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
