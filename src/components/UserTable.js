import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Button, Table } from "reactstrap";
import { useInput } from "../hooks/useInput";
import { useInputTransformer, useSearch } from "../hooks/useInputTransfromed";
import useUsers from "../stores/users";
import queryParser from "../utils/queryParser";

const UserTable = (props) => {
  const users = useMemo(() => useUsers.getState().getUsers(), []);
  // const [query, setQuery] = useState({});
  const query = useSearch({});
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

  const totalPages = useUsers((state) => state.numberOfPages);
  const currentPage = useUsers((state) => state.pageNumber);
  const pagination = [];
  console.countReset();
  for (let i = 1; i <= totalPages; i++) {
    console.count("AAA")
    pagination.push(
      <li className={"page-item " + (currentPage == i ? "active" : "") } title={i}>
        <a href="#" className="page-link" onClick={()=>{
          useUsers.getState().getUsers({page : i, ...query});
        }}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className=" mb-4 card-title">Users</div>
          <div className="mb-2 row">
            <div className="col-sm-4">
              <div className="search-box me-2 mb-2 d-inline-block">
                <div className="position-relative">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      useUsers
                        .getState()
                        .getUsers(queryParser(e.target.search));
                      console.log(queryParser(e.target));
                    }}
                  >
                    <label htmlFor="search-bar-0" className="search-label">
                      <span id="search-bar-0-label" className="sr-only">
                        Search this table
                      </span>
                      <input
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
                  className="btn-rounded mb-2 me-2 btn btn-danger"
                >
                  <i className="mdi mdi-minus me-1"></i> Delete Users
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
                      const {
                        uuid,
                        name,
                        email,
                        password,
                        phone_number,
                        type,
                      } = user;
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
                          <td>{phone_number}</td>
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
        <div className="pagination pagination-rounded justify-content-end mb-2">
          <ul className="pagination react-bootstrap-table-page-btns-ul">
            {pagination}

            {/* <li className="active page-item" title="1">
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li className="page-item" title="2">
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li className="page-item" title="next page">
              <a href="#" className="page-link">
                &gt;
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
