import React from "react";
import { Button, Table } from "reactstrap";

const UserTable = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className=" mb-4 card-title">Users</div>
          <div className="table-responsive">
            <div className="react-bootstrap-table">
              <table className="table table align-middle table-nowrap table-check">
                <thead className="table-light">
                  <tr>
                    <th
                      className="selection-cell-header"
                      data-row-selection="true"
                    >
                      <input type="checkbox" className="selection-input-4" />
                    </th>
                    <th
                      tabIndex="0"
                      aria-label="Order ID sort desc"
                      className="sortable"
                    >
                      User ID<span className="caret-4-desc"></span>
                    </th>
                    <th
                      tabIndex="0"
                      aria-label="Name sortable"
                      className="sortable"
                    >
                      Name<span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      aria-label="Email sortable"
                      className="sortable"
                    >
                      Email<span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      aria-label="Password sortable"
                      className="sortable"
                    >
                      Password<span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      aria-label="Phone No. sortable"
                      className="sortable"
                    >
                      Phone No.
                      <span className="order-4"></span>
                    </th>
                    <th
                      tabIndex="0"
                      aria-label="Type sortable"
                      className="sortable"
                    >
                      Type
                      <span className="order-4"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.users.length > 0 ? (
                    props.users.map((user) => {
                      const { id, name, email, password, phone_number, type } =
                        user;
                      return (
                        <tr>
                          <td className="selection-cell">
                            <input
                              type="checkbox"
                              className="selection-input-4"
                            />
                          </td>
                          <td>
                            <a
                              className="text-body fw-bold"
                              href="/ecommerce-orders"
                            >
                              #SK2541
                            </a>
                          </td>
                          <td>{name}</td>
                          <td>{email}</td>
                          <td>{password}</td>
                          <td>
                              {phone_number}
                          </td>
                          <td>{type}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={4}> No user Found </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
