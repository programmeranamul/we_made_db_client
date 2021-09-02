import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const list = [
  {
    sr: 1,
    MembershipNo: "778 / 2010",
    companyName: "7-One Properties Limited",
  },
  { sr: 2, MembershipNo: "1117/2011", companyName: "A B Developers Ltd" },
  { sr: 3, MembershipNo: "1547/2018", companyName: "A Class Limited" },
  {
    sr: 4,
    MembershipNo: "1443/2016",
    companyName: "A G Green Property Development Limited",
  },
  { sr: 5, MembershipNo: "879/2010", companyName: "A-Class Holdings Ltd" },
  { sr: 6, MembershipNo: "577/2009", companyName: "A. K. Housing Ltd" },
  { sr: 7, MembershipNo: "1095/2011", companyName: "A. K. Real Estate Ltd" },
  { sr: 8, MembershipNo: "1505/2017", companyName: "AAA Holdings Limited" },
  { sr: 9, MembershipNo: "1474/2016", companyName: "Aakash Developments Ltd" },
  { sr: 10, MembershipNo: "1604/2021", companyName: "Aapon Builders Ltd" },
  { sr: 11, MembershipNo: "098/2000", companyName: "ABC Real Estates Limited" },
  { sr: 12, MembershipNo: "271/2005", companyName: "Abed Holdings Ltd" },
  {
    sr: 13,
    MembershipNo: "905/2010",
    companyName: "Abiding Development & Holdings Limited",
  },
  {
    sr: 14,
    MembershipNo: "1244/2012",
    companyName: "Abu Dhabi International Properties Ltd",
  },
  { sr: 15, MembershipNo: "716/2009", companyName: "ABZ Properties Ltd" },
  { sr: 16, MembershipNo: "1311/2013", companyName: "Accord Holdings Ltd" },
  {
    sr: 17,
    MembershipNo: "1225/2012",
    companyName: "Achieve Corporation (Pvt.) Ltd",
  },
  { sr: 18, MembershipNo: "1284/2012", companyName: "Acme Technologies Ltd" },
];

const BuyerCompanyListPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
  const history = useHistory();

  if (buyerAutyh.user.type !== "Buyer") {
    history.replace("/");
  }
  //get current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  //page number
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(list.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className="container">
        <div className="mt-5">
          <p>
            <b>REHAB (Real Estate & Housing Association of Bangladesh)</b> is
            the only trade organization of Real Estate developers in Bangladesh.
            Here you find the Organizations name with REHAB Membership number
          </p>
          {currentPosts.length > 0 ? (
            <div>
              <Table striped bordered hover className="mt-5 ">
                <thead>
                  <tr>
                    <th className="bg-primary text-white">Sr.</th>
                    <th className="text-black bg-orange ">REHAB Membership No</th>
                    <th className="bg-primary text-white">Company Name</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((item, index) => (
                    <tr className="fw-600" key={item.MembershipNo}>
                      <td className="text-center">{item.sr}</td>
                      <td className="fw-600">{item.MembershipNo}</td>
                      <td>{item.companyName}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : null}
        </div>
        <div className=" pb-3 pt-3">
          <nav>
            <ul className="pagination flex-wrap d-flex justify-content-center">
              {pageNumbers.map((number) => (
                <li
                  key={number}
                  className={`page-item cursor-pointer ${
                    number == currentPage ? "active" : ""
                  } `}
                >
                  <a
                    onClick={() => setCurrentPage(number)}
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BuyerCompanyListPage;
