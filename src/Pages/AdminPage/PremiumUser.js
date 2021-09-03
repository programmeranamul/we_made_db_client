import React from "react";
import { Alert, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getPrimumMember } from "./../../Redux/Actions/GetPrimumUserAction";
import { useEffect } from "react";

const PremiumUser = () => {
  const premiumUserStore = useSelector((state) => state.premiumUserStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrimumMember());
  }, [dispatch]);

  return (
    <div>
      <div className="">
        <div className="mt-3">
          <h4>Premium User:</h4>
          <div className="mt-3">
            {premiumUserStore.loading && (
              <Alert variant="primary">Loading . . .</Alert>
            )}
            {premiumUserStore.userList?.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Email</th>
                  </tr>
                </thead>

                <tbody>
                  {premiumUserStore.userList?.map((user, index) => (
                    <tr className="text-white" key={index}>
                      <td>{index + 1}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Alert variant="success">User not found</Alert>
            )}
            {premiumUserStore.error && (
              <Alert variant="danger">{premiumUserStore.error}</Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumUser;
