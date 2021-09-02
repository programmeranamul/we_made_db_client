import React from "react";
import AddAdmin from "./AddAdmin";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const AdminList = () => {
  const history = useHistory();
  const adminStore = useSelector((state) => state.adminStore);
  console.log(adminStore);
  return (
    <div>
      <button
        className="btn btn-danger btn-small"
        onClick={() => history.push("/admin/new")}
      >
        Add New Admin
      </button>
      <div className="pt-4">
        <h4>Admin List:</h4>

        <Table striped bordered hover>
          <thead className="text-white">
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody >
            {adminStore.userList.filter(user => user.type === "admin").map((item, index) => (
              <tr className="text-white" key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminList;
