import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AdminUser = () => {
  const AdminStore = useSelector((state) => state.adminStore);
  const userList = AdminStore?.userList?.filter((item) => item.type !== "admin");
  const [user, setUser] = useState({});

  //pagination
  const [curentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);
  const indexOfLastPost = curentPage * postPerPage;
  const indexOfFristPost = indexOfLastPost - postPerPage;
  const currentPost = userList.slice(indexOfFristPost, indexOfLastPost);

  let pageNumber = [];
  for (let i = 1; i < Math.ceil(userList.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const handelChange = (e) => {
    const email = e.target.value.trim();
    if (email) {
      const sellerEmail = userList?.find((user) => user.email === email);
      setUser(sellerEmail);
    } else {
      setUser({});
    }
  };

  const history = useHistory();

  return (
    <div>
      <h4>Find Seler By Email ID</h4>
      <div>
        <form>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            onChange={handelChange}
          />
        </form>
        {user?.email && (
          <Table
            striped
            bordered
            hover
            className="mt-3"
            onClick={() => history.push(`/admin/v7/user/upgrade/${user.email}`)}
          >
            <tbody>
              <tr className="fw-600 text-white cursor-pointer">
                <td className="text-center">{user.name}</td>
                <td className="fw-600">{user.email}</td>
                <td>{user.type}</td>
              </tr>
            </tbody>
          </Table>
        )}
        {user === undefined && (
          <p className="text-orange fw-600 mt-2">
            User not found. Please try with correct email
          </p>
        )}
      </div>

      <h4 className="mt-5">All User:</h4>
      {currentPost.length > 0 ? (
        <div>
          <Table striped bordered hover className="mt-5 ">
            <thead>
              <tr>
                <th className="bg-primary text-white">Name</th>
                <th className="text-white bg-primary ">Email</th>
                <th className="bg-primary text-white">Type</th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((user, index) => (
                <tr className="fw-600 text-white" key={user.email} onClick={() => history.push(`/admin/v7/user/upgrade/${user.email}`)}>
                  <td className="">{user.name}</td>
                  <td className="fw-600">{user.email}</td>
                  <td>{user.type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : null}
      <div className=" pb-3 pt-3">
        <nav>
          <ul className="pagination flex-wrap d-flex justify-content-center">
            {pageNumber.map((number) => (
              <li
                key={number}
                className={`page-item cursor-pointer ${
                  number == curentPage ? "bg-danger" : ""
                } `}
              >
                <a
                  onClick={() => setCurrentPage(number)}
                  className={`page-link ${
                    number == curentPage ? "bg-danger" : ""
                  } `}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminUser;
