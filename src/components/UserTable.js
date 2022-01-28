import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Button, Table } from "reactstrap";
import { useInput } from "../hooks/useInput";
import useUsers from "../stores/users";
import queryParser from "../utils/queryParser";

const UserTable = (props) => {
  const users = useMemo(() => useUsers.getState().getUsers(), []);
  // const [query, setQuery] = useState({});
  const searchText = useInput("");

  const columns = useMemo(
    () => [
      {
        Header: "User Id",
        accessor: "id",
        className: "sortable",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone_number",
      },
      {
        Header: "Role",
        accessor: "type",
      },
    ],
    []
  );

  const { getTableBodyProps, headerGroups } = useTable({
    columns,
    data: props.users,
  });

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className=" mb-4 card-title">Users</div>
          <div className="mb-2 row">
            <div className="col-sm-4">
              <div className="search-box me-2 mb-2 d-inline-block">
                <div className="position-relative">
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    useUsers.getState().getUsers(queryParser(searchText.value));
                    console.log(queryParser(searchText.value));
                  }}>
                  <label htmlFor="search-bar-0" className="search-label">
                    <span id="search-bar-0-label" className="sr-only">
                      Search this table
                    </span>
                    <input
                    onSubmit={(e) => {console.log("SUBMITTED")}}
                      {...searchText}
                      onBlur={(e) => {
                      }}
                      id="search-bar-0"
                      type="text"
                      name="search"
                      aria-labelledby="search-bar-0-label"
                      className="form-control "
                      placeholder="Search"
                    />
                  </label>
                  </form>
                  <i className="bx bx-search-alt search-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="text-sm-end">
                <Button
                  type="button"
                  className="btn-rounded mb-2 me-2 btn btn-success"
                >
                  <i className="mdi mdi-plus me-1"></i> Add New Order
                </Button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <div className="react-bootstrap-table">
              <table className="table table align-middle table-nowrap table-check">
              <thead className="table-light">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      <th
                        className="selection-cell-header"
                        data-row-selection="true"
                      >
                        <input type="checkbox" className="selection-input-4" />
                      </th>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {props.users.length > 0 ? (
                    props.users.map((user) => {
                      const { uuid, name, email, password, phone_number, type } =
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
                              {uuid}
                            </a>
                          </td>
                          <td>{name}</td>
                          <td>{email}</td>
                          {/* <td>{password}</td> */}
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
