import React from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const instracTion = [
  "Location of the property.",
  "Area calculation of net area and carpet area.",
  "Price.",
  "Check the facilities and amenities.",
  "Inspect the property physically.",
  "Verify and check land record.",
  "Ensure the property is legally authorized to be constructed.",
  "Clear estimate of the timeline for possession of apartment.",
  "Check with the banks that are filling to fund the project",
  "Read and understood the agreement paper in detail.",
  "Clear concept of hidden and additional charges.",
];

const list = [
  {
    MembershipNo: "778 / 2010",
    companyName: "7-One Properties Limited",
  },
  {
    MembershipNo: "1117/2011",
    companyName: "A B Developers Ltd",
  },
  {
    MembershipNo: "1547/2018",
    companyName: "A Class Limited",
  },
  {
    MembershipNo: "1443/2016",
    companyName: "A G Green Property Development Limited",
  },
  {
    MembershipNo: "879/2010",
    companyName: "A-Class Holdings Ltd",
  },
  {
    MembershipNo: "577/2009",
    companyName: "A. K. Housing Ltd",
  },
  {
    MembershipNo: "1095/2011",
    companyName: "A. K. Real Estate Ltd",
  },
  {
    MembershipNo: "1505/2017",
    companyName: "AAA Holdings Limited",
  },
  {
    MembershipNo: "1474/2016",
    companyName: "Aakash Developments Ltd",
  },
  {
    MembershipNo: "1512/2017",
    companyName: "Aakash Real Estate Ltd",
  },
];

const AfterBuyerLogin = () => {

  const history = useHistory()
  return (
    <div className="mt-3 mb-5">
      <div className="container">
        <h4>
          No doubt, buying an apartment is a dream. Make sure of check few
          important issues to consider before buy an apartment or flat.</h4>
        <ul className="ps-5">
          {instracTion.map((item) => (
            <li className="item">{item}</li>
          ))}
        </ul>

        <div className="mt-5">
          <p>
            <b>REHAB (Real Estate & Housing Association of Bangladesh)</b> is
            the only trade organization of Real Estate developers in Bangladesh.
            Here you find the Organizations name with REHAB Membership number
          </p>
          {list.length > 0 ? (
            <div className="mb-135">
              <Table striped bordered hover className="mt-5 ">
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>REHAB Membership No</th>
                    <th>Company Name</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((item, index) => (
                    <tr className="fw-600" key={item.MembershipNo}>
                      <td className="text-center">{index + 1}</td>
                      <td className="fw-600">{item.MembershipNo}</td>
                      <td>{item.companyName}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>{" "}
              <div>
                <button className="btn-sm btn btn-primary mt-3" onClick={() => history.push('/buyer/list')}>
                  Show All
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AfterBuyerLogin;
