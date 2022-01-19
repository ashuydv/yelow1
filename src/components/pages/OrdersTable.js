import React, { useState } from "react";
import Popup from "reactjs-popup";
import { Button } from "reactstrap";
import Cart from "./Cart";
import Chat from "./Chat";
import PopupModal from "./PopupModal";

const OrdersTable = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="mb-4 h4 card-title">Orders</div>
            <div className="mb-2 row">
              <div className="col-sm-4">
                <div className="search-box me-2 mb-2 d-inline-block">
                  <div className="position-relative">
                    <label htmlFor="search-bar-0" className="search-label">
                      <span id="search-bar-0-label" className="sr-only">
                        Search this table
                      </span>
                      <input
                        id="search-bar-0"
                        type="text"
                        aria-labelledby="search-bar-0-label"
                        className="form-control "
                        placeholder="Search"
                      />
                    </label>
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
                        Order ID<span className="caret-4-desc"></span>
                      </th>
                      <th
                        tabIndex="0"
                        aria-label="Billing Name sortable"
                        className="sortable"
                      >
                        Billing Name<span className="order-4"></span>
                      </th>
                      <th
                        tabIndex="0"
                        aria-label="Date sortable"
                        className="sortable"
                      >
                        Date<span className="order-4"></span>
                      </th>
                      <th
                        tabIndex="0"
                        aria-label="Total sortable"
                        className="sortable"
                      >
                        Total<span className="order-4"></span>
                      </th>
                      <th
                        tabIndex="0"
                        aria-label="Payment Status sortable"
                        className="sortable"
                      >
                        Payment Status
                        <span className="order-4"></span>
                      </th>
                      <th
                        tabIndex="0"
                        aria-label="Payment Method sortable"
                        className="sortable"
                      >
                        Payment Method
                        <span className="order-4"></span>
                      </th>
                      <th
                        tabIndex="0"
                        aria-label="View Details sortable"
                        className="sortable"
                      >
                        View Details<span className="order-4"></span>
                      </th>
                      <th tabIndex="0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2547
                        </a>
                      </td>
                      <td>Dustin Moser</td>
                      <td>02 Oct 2019</td>
                      <td>$350</td>
                      <td>
                        <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                          onClick={() => setOpen((o) => !o)}
                        >
                          View Details
                        </button>
                        <Popup
                          open={open}
                          closeOnDocumentClick
                          onClose={closeModal}
                        >
                          <div id="modal" className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="btn-close"
                                onClick={closeModal}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                <div className="col-8">
                                  <h5 className="mb-4">Order Details</h5>
                                  <div className="row mb-3">
                                    <div className="col">
                                      <div className="d-flex align-items-center justify-content-center flex-column">
                                        <div
                                          className="rounded-circle bg-primary"
                                          style={{
                                            background: "red",
                                            color: "white",
                                            padding: "1rem",
                                            width: "60px",
                                            height: "60px",
                                            position: "relative",
                                            boxShadow:
                                              "0 0.75rem 1.5rem rgb(18 38 63 / 10%)",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "26px",
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                              fontWeight: "bold",
                                              fontFamily: "sans-serif",
                                            }}
                                          >
                                            1
                                          </span>
                                        </div>
                                        <span
                                          className="bg-primary"
                                          style={{
                                            width: "60px",
                                            height: "2px",
                                            background: "red",
                                            position: "absolute",
                                            top: "30%",
                                            left: "98%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: "0",
                                          }}
                                        ></span>
                                        <p className="my-2">Processing</p>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="d-flex align-items-center justify-content-center flex-column">
                                        <div
                                          className="rounded-circle bg-primary"
                                          style={{
                                            background: "red",
                                            color: "white",
                                            padding: "1rem",
                                            width: "60px",
                                            height: "60px",
                                            position: "relative",
                                            boxShadow:
                                              "0 0.75rem 1.5rem rgb(18 38 63 / 10%)",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "26px",
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                              fontWeight: "bold",
                                              fontFamily: "sans-serif",
                                            }}
                                          >
                                            2
                                          </span>
                                        </div>
                                        <span
                                          className="bg-primary"
                                          style={{
                                            width: "60px",
                                            height: "2px",
                                            background: "red",
                                            position: "absolute",
                                            top: "30%",
                                            left: "98%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: "0",
                                          }}
                                        ></span>
                                        <p className="my-2">Processing</p>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="d-flex align-items-center justify-content-center flex-column">
                                        <div
                                          className="rounded-circle bg-primary"
                                          style={{
                                            background: "red",
                                            color: "white",
                                            padding: "1rem",
                                            width: "60px",
                                            height: "60px",
                                            position: "relative",
                                            boxShadow:
                                              "0 0.75rem 1.5rem rgb(18 38 63 / 10%)",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "26px",
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                              fontWeight: "bold",
                                              fontFamily: "sans-serif",
                                            }}
                                          >
                                            3
                                          </span>
                                        </div>
                                        <span
                                          className="bg-primary"
                                          style={{
                                            width: "60px",
                                            height: "2px",
                                            background: "red",
                                            position: "absolute",
                                            top: "30%",
                                            left: "98%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: "0",
                                          }}
                                        ></span>
                                        <p className="my-2">Processing</p>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="d-flex align-items-center justify-content-center flex-column">
                                        <div
                                          className="rounded-circle bg-primary"
                                          style={{
                                            color: "white",
                                            padding: "1rem",
                                            width: "60px",
                                            height: "60px",
                                            position: "relative",
                                            boxShadow:
                                              "0 0.75rem 1.5rem rgb(18 38 63 / 10%)",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "26px",
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                              fontWeight: "bold",
                                              fontFamily: "sans-serif",
                                            }}
                                          >
                                            4
                                          </span>
                                        </div>
                                        <span
                                          style={{
                                            width: "60px",
                                            height: "2px",
                                            background: "gray",
                                            position: "absolute",
                                            top: "30%",
                                            left: "98%",
                                            transform: "translate(-50%, -50%)",
                                          }}
                                        ></span>
                                        <p className="my-2">Processing</p>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="d-flex align-items-center justify-content-center flex-column">
                                        <div
                                          className="rounded-circle"
                                          style={{
                                            background: "gray",
                                            color: "white",
                                            padding: "1rem",
                                            width: "60px",
                                            height: "60px",
                                            position: "relative",
                                            boxShadow:
                                              "0 0.75rem 1.5rem rgb(18 38 63 / 10%)",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "26px",
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                              fontWeight: "bold",
                                              fontFamily: "sans-serif",
                                            }}
                                          >
                                            5
                                          </span>
                                        </div>
                                        <span
                                          style={{
                                            width: "60px",
                                            height: "2px",
                                            background: "gray",
                                            position: "absolute",
                                            top: "30%",
                                            left: "98%",
                                            transform: "translate(-50%, -50%)",
                                          }}
                                        ></span>
                                        <p className="my-2">Processing</p>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="d-flex align-items-center justify-content-center flex-column">
                                        <div
                                          className="rounded-circle"
                                          style={{
                                            background: "gray",
                                            color: "white",
                                            padding: "1rem",
                                            width: "60px",
                                            height: "60px",
                                            position: "relative",
                                            boxShadow:
                                              "0 0.75rem 1.5rem rgb(18 38 63 / 10%)",
                                          }}
                                        >
                                          <span
                                            style={{
                                              fontSize: "26px",
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                              transform:
                                                "translate(-50%, -50%)",
                                              fontWeight: "bold",
                                              fontFamily: "sans-serif",
                                            }}
                                          >
                                            6
                                          </span>
                                        </div>
                                        <p className="my-2">Processing</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mb-2">
                                    <div className="col">
                                      <div
                                        className="d-flex align-items-center justify-content-start rounded px-0 p-2 shadow bg-white"
                                        
                                      >
                                        <div
                                          style={{
                                            width: "100px",
                                            height: "100px",
                                          }}
                                        >
                                          <img
                                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaGhkcHBwcGhwYHB4dGRwcGhoYHBwcIS4lHh4rIRocJjgmLS8xNjU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzYrJCs0NDY0NDQ2NDQ/NjU3NDQ0NjQ0NDE1NDE0NDQ2NDQ0NDQ2NDQ0NjQ0NDQ0NDQ0NjE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABIEAACAQIEAgYFBwkHAwUAAAABAgADEQQSITEFQQYiUWFxgQcTQpGhIzJSkrHB0RQkYnKCssLh8BUzRFR0ovE0k9IWF1Nzo//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACoRAAIBAwMDAwMFAAAAAAAAAAABAgMRMQQSIUFRYQUyoRMicYGRwdHh/9oADAMBAAIRAxEAPwDs0REAREQBERAEREAw+I8Qp0ENSq4RRzPbyAA1J7hNB4l6V6KEilRd+9yEHuF/ukD6WOMF8T6kHq0gBblnYBmPuKjyM53uYJSOi1vSninPUp008ix+JlodN+JPtURfCmv3iahgU1E2TApAMw8f4k3+JYeCoP4ZYq8c4iP8U/wH3SQRO6Y+JQQQRdTpRxBf8S/w/CWf/XfEF/xDHxVT90pxyyCxIgk2ej6Tceu7o3ii/cJM4L0qYjTOlNvIj7DOZmVI0A7fw/0jI1s9O3erfwn8ZuHDOJ0sQmekwYXseRB7GG4M+baFYibj6POMmljEUt1Kvybjlc/3Z8Q2ng5gg7fERAEREAREQBERAEREAREQBERAEREASkm2plUjOkWIyYXEON1pVCPHKbfGAfO/HcaatepUPtu7/WYkD3GRyyusdTKFkFiUwM2TBNNXwjybw1SSQTyvpMfEvMcVtJYxFWAYWNeQeJMksW8ia7QDHMCDEEl1Gmbgq5VwymzKQQewg3B98jgZfwzawQfT+DxAqIjjZ1Vh4MAR9syJAdB6+fAYc9iZfqMU/hk/BAiIgCIiAIiIAiIgCIiAIiIAiIgCa/03VjgcQFBY5NgCTa4voO65mwTD4mpNFwpscjWOvZ3EH4wD5jxFF1JDCxG4OhHcRuD3GYpD8l87GbHi6wBugCAG91Fjrfnv3f1eYK3Y30vpcX1N+3s01vKykkXjFsifXVR3eUvUMRVLKDUZFLAMwXNlBIzNYC5sLm3O0zsSLtoTpYC9jceRsRLaJl12vflpY/SP9c5TeafS7m0J0ZUfP4g3kET95zKW4BhufEH/AO5R8vamsMo6wB225Cw7tuc9RgOwXGttAbW0HLv/ABje+xH013JDi3CKSU2anjGquLWQGkd+ZyuTbwBmtkPzYyQYkgWBNrDly7D5yod9wNTY73G4PvjcxsXcwqNN25n/AGmZBwb/AEvev4GZOGp9b3ayQb+u2XUrlJRsROFwLPe7ogHtMr5feit38uUu4bBMzhUZHJNhkcanuD5Try0+MsviWV7oSrA7g2I7xYyW4Tj2d1WqFqKdCXRHcd4dgTcd5IkpkNWOz+jfMMBTzKy9apYMpU2ztrY62m1yO4NTK0gpN7M4v4MQdyed+ckZJUREQBERAEREAREQBERAEREAREQBLdVbqw7QR8JciAfOHHKZp13QC2VmHkGNvDSxmCji9rgaEm4F72OhJFiNTNt9KvDTSxYcDqVUvtpmSwI9xX4zTqak2sBrc7jl2fhMpLk6IP7St35XDct73Gnfpr908AsLWup35a8jp/WglRfKBpYXFttL73Bvpy8++eAsNiNT7WoB7j75QueOBbkbctNiBaOYOhHadAu9tRC0+dztpYW23GhtPbC7WIHceelye7f4ySDHvm5eO5U22B5SsgXJ005d3Z3f8yq53uOWm4Gump13J90pqLuTv22/CCC5hEJa/wDVte2ZOIqZQf8AiWsGNfs3J85b4ieqJdYKPJHLqdjf+cn+i2Hz4mknIugPhmAPwvIWks3X0b4AvXap9ABVP6VTqL7gWb9mWiZyO18OHyan6V2+sS33zLlCKAABsBYeUrlioiIgCIiAIiIAiIgCIiAIiIAiIgCIiAaX6TeGCthSbHPT66kb9X5w+qW905HRpgIzEbbW33UT6A4psh5ByT4ZH+8icY6W1UDlKSrlIRQF2KqgN+/dRfulZdy8W8Gu12VgcgUA2uNjp1rkX3uO8TDLjQcxawJuBtoPCX6yh972tuRlsbXBAIvLL2U2tYkDlpcaEaaWNuznMXk6FgqD3vmu1vorY9lzrrsDCVCRa2mm9wbk7gShmFje4J2Nx29XS/2y2O0XvqSe4X5baXtzi4sXmqEHYNsLajUdpO8s3Pw23+BF9PCeMwy3vcXuBewvcG5IF/fDE6Xsu/zSSPHbbTbvghmZgW1I5feddD/xLuLQEfjMLDNZgOZ528re4STcXHlNI4M5ZLeH4U7JmVWJAZmAF7KDbN4be+da9HPB2pU1zrlbrVGB3DOSqDyRSbfpzUOguMGfrW0DI1/osuYX86dvMTqvB3GeqARY+rdbbZGQKtu69Nj5y6MmS8REkgREQBERAEREAREQBERAEREAREQBETwmAad6QuJGlQyKbPVPq1I3GbV28lA17SJxriTh3trYaLbuvppqAdR5TbenvGPWYlyDdKANNP12/vD5fN/YmmJc3Gu/hrta+8pN8GlNc3LRN7XueZBF9DcG1zfaWywW6iyjTcdW/cV2NrHWbhwPoY7gPW6i6WUaue8kjq37Dc9wm3YPgWGoglaSA6ks3XbvOZr2GnKw0nlaj1KjTe1cvwdKi8s5CKbsOqGY31ABYbbjLfTTn2yv+zq7bYesQLW+Taw56aX3tt2bzspx1PMEDrc6AA/DTT+u6RzcdpWJu2gJ2AOis2WxN83UIt22E54+pVJe2n8/4W2LqzlJwNcD/p6y/S6j2052IvLDU3X56sAB7QI8L3tOt/2ohF7MFAYk9XQIuYkgNcad2vLQgm0+OS9i4B7Guvb26HY37LTVa+fWHyWVGL6nLaO1xrufDuv5yUpnSbjjOGUaguyKb+0vVP1lkFieBlNaZzL9E/O9/P4Tro66nJ2fD8lKmmkldcmPwHEerxK30Wp1TfYNcFCe7MB5XnT+hOJtamSb0maib7mm3XoMfDrJ5zkOJS403HwIm89HuJkvSqggeuX1TnkKqnMjn9sA+DzuRxyR16JYw9UOoYaZgDbmL8j3iX5YqIiIAiIgCIiAIiIAiIgCIiAIiIAkN0p4qMNhqlU7hbKO1joo95HleTM5r6U8ZnehhgdAfWP8VT7G+EA5njqhUKrG51dydSSx1Pja/vm39FuCLSRa9e2c/NDewG2IB9s325bb3kFwHAricSGOqIczCwseSIfcO7qmdHC5iFy5m3Atfuvrtz1ni+oVpykqNNNt5tm3Y7aUVCO6RaGJZgci9lmbRTrra2u1iPGYmKsyE1D1BqWchMtj84AarcEjUjQ98xelHSOng+obVMQQPk1JCoDsajjXvCixPcDecu4rxatiWzVXLWN1UdVF/VUaDx3PMmUoelNc1HbwsmU69/b8m84rpRhKQKoXc9X+7UAdW9us3ztTe4O+u5N8F+m6E6UGt31Gvvfl4zR56J6MdFRj0v8Almf1JdzeaXTKgdGSom2oYtt+13yRwmJw1f5joWOmV1VSdLW1AJ2Gl+7ac0tPAZL0lHtb9SyrSXU6bW4e6ZiMyE9mouWzMwXQ67c+UsvinT56lh9JddcwAFh3Hc28JrvAel1WhZH+Up80fX3E7ToGEpUcUnrMM1jbrI247r9k56ujeY8+HwzppapL3ceehq2PwoqLnTfwIzAdx5zE4A1xVoXtmAdD2MttR7w37E2CrRKHKVy25Wt7u6a5jx6nEJUA6pOo7jo48wT740lWSk6U+mLl9TRjKP1Idc2Oy9DeKevoAnRtGI7C1w//AOiv5ETY5zToNjPV4l6ROj9cdnXsrn66Lb/7J0uemeaIiIAiIgCIiAIiIAiIgCIiAIiIB5OFdK8f6zFYqrfQMaa+CfJ/+Rna+J4oUqNSodkRm+qpP3T58w9Nn9Wl7vUe97X1Jy3+JMhlo5Nv6E8NIpEjTOxdiRsNlUdpsL/tST6V8eGCpLToLmxNY5aYtmOpC5yPaNyAo5k9gMmsJQCIqKAqKLeQG5nHxxU4nidGsScrYnDhB2ItVQg7tNT3sZEaEKd2vc8sq6kpu7wsIh8ZhKy1clVKgquQcrqwdmc6HrasWPPmZnjolj/8pX+oZ03jtBMfWIQAYnAYqmSOb0WZWP2X8UP0oxWFR34hVfKzU8RTRPW4mpQpKrU6NwWRrLqxtpqSBzk2BzT/ANH4/wDylf6kqXofj/8AKVvq/wA5uHBPUVHxK3w/5SHRaNJ8VWbDsuVczI97uxObkbG2wlOH4caK8QxOJoWeh6vJh/XVGpDMq3cENdlYm+u2o0ixJqLdDsf/AJSt9X+coPQ/H/5St9SbD0ZZcTUxOKqUn9TRpqfUUnqkM79VQgzX9lja+hYSbwvR9E4piKT53oHDGvSVqtRVW7otiwa9gcw7gRIsDmnEOE16DKtak9NnBKhxYkDS4HiZJcJ4g2DqoyMT9McrdlvfNx4TwjDV8S4ejhjbDu96OKqVlZgyKpd7grYXG+zHsmpdKKFNXRadKgnVLH1GIbEq1zYZmb5rDKdOxpDTvc1jKKi4tXb69jrGSniqKuNmFwRuD2TS+k/C2RGB1y9ZSOYG/na+ky/RrxEkNRY96zbMdQV1KMND8JE6KqpS6rD/AIZEarpNx6PKNE4NjCrYWsNw3qz2XOieQamh/anb6ThgCNiAR4HUTgSYVqaYmjqGpNmB/VObMPHInvnbejuJFTDUnGxQW8BoPhaXRSWSUiIklRERAEREAREQBERAEREAREQDVvSPicnD6/awVPrMoPwvOa9EcLmxak/NpU7/ALVgB++T5TdfS3V/N6NMe3XW/gqt97CQno/wgIr1DuamTyQE/Y490mNtyuH7WS/TDG5MDiGFwShQHaxqEJcd/XnEcJiGpulRbZkdXW4uMyMGW4Fri4E7P6QqRPDq9uXqj5LVQn4TikTyRHBN4XpJiVxjYtCi1qhOYBTkYMFBUqSTl6qne9wDeTlPjWMvWfJh6i4l1DpVVBRd1VQFQVHW7ABbgMeRPKa/0apg1DfkpI8Zf4zjUqU6dNg6vRWoi5QpRxUdnDNdgyNdrGwbNlG0pcvbgvVON1aRzPhMCBVVKiq2HRlVQCisgDXQHKdzra/OSb8X4gtZ2bJUfEUFqVqVWmopLSVSVLBmAUBL3uRvY5jaYOMx9FqoxCo5FNESnTdVCL6pESmGyuS63BcjS5sNiTL9Ljweth8Qy1FekgR8pDrUUOxKN6xiSrI5VixJ7jpZcWLf9qY7I60USklWsi/moVPlPVqUSmaTklSgDG1/nG5F7TIp9IOIZkNqTutGrRzZkqXQBGqNVdahAK5UbMxUdY73lnCcdppkVKRVAcUXVWAIOKGQGmbbogVVJ3sdrzFwOIpotemA5SrTVM+VQ6lHWoOpmsVJWxXNrvflDZZRbKeE1MTgn9agRT6v2ijo9Nzb2Ws65l3U6FbaaiUYviPrNsPhafVZbUqQQdYqcxux6wy6Hlc9su4+v6z1aKpVKSZEB1Y9ZnZ2I0zMzE2Gg0HK5YbCEzOU7GsYEn0KumJQ+U6dXp6zR+jOBtVQ9hm/1WAlqEr3KaiKVjnXShBSxYf2a1MKx70NvsCTffRlXLYFFO6Myn9k5R8BNR9IND5JKgGqVLX7Aylj8UUecm/RRW6uJTsqBx4Ot5o+JMy6I6HERBAiIgCIiAIiIAiIgCIiAIiIBzb0pvevgk5Xqsf9gH3x0MS2FVubu7H62X+GWfSY355hh2U3Pvb+Ului9EjCUBb2L+8k/fLQyRL2l3ieF9fRqUToKlN0v2FlIB8jY+U4AyFSVYWYEhgdwQbEHvBn0kKc5L6TejrUq35Si/J1T17D5tTnfuffxDdoifPJEbmocLxXq6ity2PgZI8Tw/WzDUHUGQgEneAYerXPqURntzGyX5sx0UeJmTNUZmBwHrUCjtF5TxfCZH9WOQF/EzfejfRlcN1q1VST7K6KPF2+d5ATI4xxHh+HqXdaOdhe5T1jEbaE3lG+xolyc2w+BvM9OFnsm2Dp1gAbdX/s6fZJDB8Y4fXNlNK5+j1D7pR3ZopJGnUuFd0lMNw23Kbc/BltmQ5h5X/Azyq9HDIXcgkbcxfsUcz3/ZM3GTzgvGV+Iq7MPgWFGa45Sdq0xeczxXEXet+UKxo69UjQm2wt7XmCJ0fA1jUpI5tdlBNtr7G3nebadpXQ1mndNKTefh9jXem9LNg6o7Mje51v8LzH9E1X84rj6VKm31SVkv0noZsLX0v8m5t25VJ+6a36Kn/O7duF+x/5zoeTiWDsMREggREQBERAEREAREQBERAEREA5X6SauXHUT9HDk/73/Ce8E4zU9TTANgEW2g7PCWfSkfz2n/pj+88x+BIDRQ/oL9k5dTOUEmjq00IybuiXx3HayoCpNzpy38LTHwPEnxKvRrXdSAHRgNjsRpfcb8iJG8cwTllZM56huq77jUcxy1t2bTL6OcIGc12LhKdgEY2Y1Gs1nK2zIAQ1jvcXHbzQk3zd/ubzoRhHcub8WIR+glOk7PiK1sMLFANKj39htLKO8XJ5W5Z2G4w1RfVYJEw+HUkZ8u555F9o9rE++SmLwH5S5evcpsi5iLjmSO/uMzDw1FQBOrYaLYCwHYBsJ200pcy/Y5ZfbwiGo8NS+aqz1W7XYsPqiy/CTbY2kUCtlW2x0E5/0h43Vp1GpAZSOZ7DsR3TWcRjHc3ZyfOb3S4SM85Z0fifHcOl1ez91gwM0TjOKw7m9KnkPdoPdtIxqhO5lJMhtscHQPRbxuv+Ufk5YvTZWbrG5QrzBPI7W8JsOI4ScTiajFiaSOVXmARbOFH62bw9wMD0HwLYYMzdWvUAUDnSQ2JLdlRtLL7IsTqcs3/o5hAlEDvv5znnaT2o66TlRi54b4X9nJMfmFdw5JKOyC/YrFdBsNpu/B8dVFBMrkAXFtO2/wB8t9MeBKC1VRa7EnxNzeecCHyBHY7W9yzmlJxxwdkpRqUL+Ue8V4pVahVGckFHUiw2ykHlML0Wf9an+mb98T3GNlpVb9lQ/A6zz0Wj8+T/AEz/AL4m+nm5XuedXio2sdmiInUcwiIgCIiAIiIAiIgCIiAIiIByb0rD87pd9Bh7mf8AGY3R6qPUIe63uJEzvSylsRhW+klRfcV/8prvRir8nlJ2J+Iv+M5dUrw/U7NJ7mvBJcaxyjKOtobko+VxcWuNNtbSV6J4pGpPRDPndiwL6FmsFOp30A901zjmHRgGCMzgaZSVPv7JHYeo5VVdKmZdAAhC6bG9/nd5PhOaCW3g7JK/2s3PD4Z6WVcubKWzZixIuL3GYnc9p7JlpiLEgoQLDUm9y17i29h2n+c1/D9JK9L5Osq1goFsxs4BHJ13t3g+MzaPSrDEkstZL2utkZQeZBAzEnTfsG01TvymZy0810uvBXxngVDFWL5g4Fg6aEAm9iDe415g78pB/wDt4m/5Q2XloPttaTT9I8EPaqsf1bbd+WRuJ6VjahSC/pVDnPiBt8JqqskubGa0kpuyVvyWKnQCgqF2xLqo9o5Qvhcrqe4XMj6GEw9Fr0AzuNqtS1x300sAp/TIzdgWU4nFvVbNUZnb9I7dyjZR3ACXcCgZ1U7EgHwmcq0pcI9Sh6dTprdPl/BncKq2bzv+Jm98IxwuU7dR9v2GajRw1IEHqLpr1mbUgcg2mp2OvVMz6OIVXRwyBgBfVjqMtx879JhzHV3lYNxdzHVQjVwmS/S3FAYd79gA8SQB9s1zhr5aYHaSffoPsmbjHXEEJUZVAysNWAJzlG2cXsNezfaUPQpgEKyE5lAAOuuXQdc3IzHUAr1DrrFVOXKMYRUKex5uRPGqlqbn9Ej36TI9FKfng7sI3xqLIbjuK+S/WKj+Ll4TZPRNT/Oap+jh0X6zZvummlX2tnHq+JJeDrERE6zjEREAREQBERAEREAREQBERAOb+l+n1cLU+jUdfrhT/BOe8IxOR3W+/wDCzKfgROqelfD5sAXG9OrTf3nIf35xem5Vr87789QL/EXmVaO6LR0aaW2aZ0XCV7omg2I3IuesL7b/AISqpiinzl0BNrHe+vZ3Wmn0eJuBYORrffut95mQ3EmYdZiba6n+uycbukevZMkeMYkOFIFihbTfRuXwkBik5iXf7UUbAt4beZ85hPimbS6qB2i58L3tLRhJu7JeppQjtbv+Cgy5TaUZKezVKhNr9RQJ4tSha49YdPpAffNtnGTmWsUZXSZnIZl4JyroQLkMNL2vrtfl4yAeons+sU2B1qaa27p4uKI2dh42blfmZR0X0Z1L1OLVpRZ0wU30FhoB7Q2Atrr1h3c7e+mmSyqQAMwXLrbRdR7V9AbeU57Sx7foP/tPLtmfQ4gl7MCviNPfIcZLoUjUoz4UrPyrG5k9UHXrgHcAnMSbHXX5/wBkoxDOqs2XRRe1wB1btfmbdWa3jHBpKw1ytbTscX+1T9aRDVB2CVTv0JcEnyyri9cFVW53J9/V+/4zo3olo9bFP30k+qpJ+2ctrklkHawHxvf4TsXooo2w1Spa3rKzn3aTqox2xseTqpbqjaN7iImpzCIiAIiIAiIgCIiAIiIAiIgEbx7Aivh6tIi+ZDYd41X4gT5xRTz3vY9xUEm/ncWn0/ONdKuiFdK9R6dD1lN2Zlylgy5tbdW1wDfS50IHKVkrqxaMrO5oVerkA6wv2W1/lAqucvV0Oup0tfW3bpJB+HVhp+SP50qn3iVVOFE/Nw+JQ2GyG1+drna/dKqCRq6snnBhvTYNa405AHz8tpQyDrE6gbgjn5f1pM4cHq/QxP1Sf4Z4uDqgm1HE66H5O+226SNrG+JGkkWJ+GmhGun9cp7sM2hta2nI6CSlPhdQj+7ri22anf7pUeEPySpbb+7Nv3ZKiyN6IqovW3tbTu12/rvnnq/Z577d+9/KSo4K9tVqb/8Axtvrr83+tJafhTqNEqm3ZT/ESNrJU0YGXrAW1sM3K/cezmJU9Ui1tAVOW+29vPS3fMkYOpt6rEctcmuhuNck8fhTndK/1SAO4dSwjaw5opp1iEJBtmJBGwNjcX9wMtlwRcHlqOf85dTh4HzqVZiNrqbX8uUqTCVDp+TMR3U6h+wE3k7F1CqyWMFp1zOhG+a1/wBUlT90+g+iuGVMMgW2VizC21mYlSO4ix85x7gHRjE1aqAYZ6aXF2emcoB+cxFQEeQndqNMKqqosqgADsAFgJaKsjKUtzuXYiJYqIiIAiIgCIiAIiIAiIgCIiAIiIB5ERAPYiIAiIgCeT2IB5PYiAeREQD2IiAIiIAiIgCIiAIiIB//2Q=="
                                            className="img-fluid"
                                            alt=""
                                          />
                                        </div>
                                        <div>
                                          <p
                                            className="mb-1"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Nescafe
                                          </p>
                                          <p className="mb-1">
                                            Lorem, ipsum...
                                          </p>
                                          <a
                                            className="mb-1"
                                            href="https://nescafe.com"
                                          >
                                            https://nescafe.com
                                          </a>
                                          <p className="mb-1">
                                            {" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              Price:
                                            </span>{" "}
                                            $25
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div
                                        className="d-flex align-items-center justify-content-start rounded px-0 p-2 shadow bg-white"
                                      >
                                        <div
                                          style={{
                                            width: "100px",
                                            height: "100px",
                                          }}
                                        >
                                          <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iD6awG7ugwALMWGiwNVjjIPGu58gfRKhEg&usqp=CAU"
                                            className="img-fluid rounded-circle mx-1"
                                            alt=""
                                          />
                                        </div>
                                        <div className="mx-3">
                                          <p
                                            className="mb-1"
                                            style={{ fontWeight: "bold" }}
                                          >
                                            Customer Name
                                          </p>
                                          <p
                                            className="mb-1"
                                            style={{ width: "100%" }}
                                          >
                                            1234567890, lorem@gmail.com
                                          </p>
                                          <p className="mb-1">Since 2002</p>
                                          <p className="mb-1">Address</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row px-2 pt-3">
                                    <div className="col-lg-5 rounded px-1">
                                      <Cart />
                                    </div>
                                    <div className="col-lg-7">
                                      <div className="p-3 rounded shadow bg-white">
                                        <div className="row mb-1 align-items-center">
                                          <div className="col-lg-3">
                                            <img
                                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAwFBMVEX///8SEhIAAADtOj4LCwstLS3CwsKpqalhYWHq6up3d3elpaVNTU1mZmZcXFwHBwfb29tAQECbm5smJibz8/PW1tbIyMg3NzfQ0NBISEgfHx9/f3+UlJTtMje/v79tbW2KiorpfoDl5eUyMjLrc3O0tLQbGxs9PT2GhoZycnJFRUXtJSrv7++Xl5f44+Lto6Lqd3vtiYntJy/pTlHwurrnQUXtkZLyxcn119frW1/tmpvvMDvramzqGhzx0dHtsK+Ou8Q+AAAKN0lEQVR4nO2ceZvaOBLGjdpA0xhMuK8GDz10c/SVTmaT3cnsfv9vtTa2pSqpJAydAdJT7x/zZBJZVv2QVIcEnsdisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisY7X88tvuV675x7Mhevz9u1W6tyDuXC9vl0pfTn3aC5bX7eA1e2Pcw/nsvXHFYT1r3MP56L1DU6sq7eXc4/novXbLYL19dzjuWhdIW2/n3s8l6znLYb1eO4BXbK+vSFYb+cez0XrBcG6/fe5x3PRekX7++3nc4/nooX3d3aGLj3jLWv7fO4BXbLwlsWZoVNf8Jb1n3OP55L1fVtgFXZn0bq5+RSso9k/utj1+ieaWHTJoSlihWHyX9FY2LpqdMofRw+Egfr2Tuc616IkJUTdAqsp/A8jERAG/kAT689XGgOEFeOKbLBKH0ZiZtr3Fe9YV5YdCcMqWebWB4IlGqZ5j5jVX/+lWemwSqL3oWH5Yk6Yh8OG7f8srAxYfucDw/KFvySs+wFZ3dpZGbDobesjwPKF6LQJ27qI1faLo+hnwCoJIoBQsMQvq7vJkALwDNbg7duVfVrRsIgdUMISzX7ll9TQ4uBe/pLHqtvt799cqChYJWF+AgrWjbu7X0zfX3/8nunzi80HKhGwwoHR6qPCOlAErJIwXAbD2omC5Qu9FcPaiYJVElOtFcPaiYRVEjXc6v2wFpXqdHJzczOJ6jObZ0rUHc7q0a5he0YmE+eUBZaWFLwT1vJai3k6jWrNbNZdzju4XdAmmp1PNCw9RTRgPdarDtX78OGnUAhf3xWFaGoRymItjHbx3xCR5AK+vE40mLkGV60v9hpQrRwEa+SG1XJHy2D+9cY6gbwrnIWuBD3HEfd8NFDjfQ0MVfYbQKXbEJYfokEu8dsNWCSAvNVEPrm0oNLDuQdLhwSsoVZVMnPjhnt0/f0GrN2wwibKlv3ST4E1tLdDsDa2dgQsLasP704PSwQLXDSFGfrRsO5CayMIa2rtzoTVM+okRpMTwPLmmBZw8MfC6uNmSQlc/g+AVdN782OfECrL6BHLtxlF9VPAehS2B46FtVbNkm3zvlMeZzsoghWhDSAJLUZBMEgb6rAMsERR6RSwtNUgWu+G1ZETSYwq+UzttmbTIMag9hroBERHhWCL2UToTnxFwJpobU4CyytB1wWmtxOWPXRQsyDc6C9utZv5H6EXMJy2Hu2T6Zkdlm8NHZwGEDU9A9YSTy35qbpgicpjTVd2xVBtWaJKvj0VmND+vaOdZ4ww712LHhQsf2AOrtbVDFhaDXDC8h6g9wrLhWDZUzhlGRVbSm3US40UXpcaIFy62havYIWfLP1AA8hyMyUNFo6L5CnikbDqxWDBFbEneVbvFQNIC2/xB8JyjQ1Jg6VFfHn4cCSstjLNMWNgfCf23E6RfjMM0K6Duz8VLOyZcz/zbliuEYFgzC9bW6W6z6dTvE2BLUN77lSwNNecze8jYVXhh69XGahWIXVpAwh4jK43sy7fk8HqYlipfz8SFjSnlJxxkneagDO0ZPtSN3IcSSAE0gGxgs1OBgvsyqqnI2HhbDOJeR7qZjVvAvpaEb0ASTw7DwZDDh82Ox0sr4zCh12cfSQsb6zXZ+Kcb1TVNnGQku6JHOQqTG9kIM8AF/mJQodEMzy1knDSCauvx3Sq9xs8tdL2QswRX+CABXUZgeguu5AxAk/ClAcEpQ9GwNk1DJjZDdgLywtQXut3D013VO9GOSV/YgNSvhGISd2w1CpMaSMHQsIqhZZUrKAB+2HhJDP5FA9JpH1Y57WltEIEMqP4VBSWRJ8nRTXLOnQl0tkUdCXSB8GClZXkX2rHw/IGtoaq+PJQFFakrUK0BqBvOCksLXy4fgeseOCWYqmfe4bCM6ujrUK0DuFrTwrLKGxdHw/L69/R5zalMGu4KQhLLTppDfKHqvx2Wli4sBUG17k9R8CK3evIOBBMO0vzdOgNnxyw5DQCpbk7EvSJYeGyUagKnsfAimdAZB60yoyuURCWGqq6nA2WAKgvnhgWLmyBfg4LHYCGq5J54LxLf2AEHzlgwbwwF4xN1AUNZ6X0J4cOO9ssERIRlEbVOpK1KNqb3OPtK61wguMKS+0bjwiVqIXeG4bll7XB1bOrBdCAldbGunHaYNlujBCwWmavVvWb0DmmEwkko+RXRTI9yZFCY+D5kczCT5jupFoUhnXYzaDeINR6A/Us4oamlMptOkBjNTZ1iF4AFjDvXYl0JuLMScFaHPPBpAKnk3EE5yHw+NIAEoz9wNeW0ODyj60ALDgK4ss8tOyw6EMn45DrgA8mk/Id2YkT3Hes3+Jz3JqQD+e+tAAswJ64WWKRA1adGJ68TATeZfvenU0qYs96uwNFPKt3sF+HUA/nJhSAdZQBDljgPNmEpaJW4zx4n8rq0Wj3FyB2sBsX7IclA6QisO6M2HG/XLAq5vhkxypHcR0yLOrmsmoZCwC+x/oxF2Ald4QisFTeQH+3i5ILFvFpSlirQjv8MI7w1nV04XYICrF5GAlfI9aQ76LaXGQ9Sdu0CBIeH0bpU0VgFTMAywnLzAkkLJAPEbfJJBmRxsd+MJ9M29V21ICXJuWDqKAqRLmxarfb08l8pMJpuYH6D/U2VP3OvMVUBBYwwB/bTyt7zc5YfnfcCQvuJhosVHfrIOdb60fXABaeDejmSR5dah+KbB1Kh6nsN8r0cIxZIlQEFjJgjAx47Ef5xZBZEo5U8pjEDcszsjm5GcLd3xelYPKUfM7Tm1FyAytPSNz+XuV4VK0eA1UVZT0qgjl/tmkVgYWyXz+e+6vUgPUouV4uzwVr082mN/QLwdKu7gFYOLBQUyepUIT5XWcnLLiXj20Ns/0E1LJ0l4FqWlFxWFWHATmMZdOLUd17970isPClPORmHRwKwUIHqjXf0jLbsuT08UNjiKD2Fqa/2TAvAstYNfCtGYzpyguaft8LZoVgaSsEwKraQRSAJbS9pxuQ5efMeuW7zFtxsNKarexpIVjkVS8MYxnEM6u9VjPL9dsQ6ZvhPAcBnLH7m7BqA0ExiCf73AjAlmWiPpjXbGTUT4TAMIlNV+2wECyHARKGqK0Wj41+dpokZ5ZvrY60sp9g2R3BwbXTthTXFazY9UZ3+VaQKD3GC4hD/MTGidG0mdV/5C+WEEFrFfycSeYP5LV6Jyy7ARJWP3EZy4OqUI/LqDEaDIL5aonuDy4CsrjuC/RzL91hNVoHg3G8t5Q382jpKunUKk+r64dO3LSzWU/7ubvsKVhm2t6CsNKLLLWcghuWt2haDJCPLRpC3PykH5ZsrTq5B0lfk8wHf332L791r9MwbQ+sGAZlQDj/uwxYLKPmp/vM7443c+prWmfQot0cxIbvux3npQY85PfzO6cwoJvq737NYTpkRBdpAIvFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFutX1f8B5g6/Akdll+4AAAAASUVORK5CYII="
                                              className="img-fluid"
                                              alt=""
                                            />
                                          </div>
                                          <div className="col-lg-9">
                                            <select
                                              class="form-select"
                                              aria-label="Default select example"
                                            >
                                              <option selected >
                                                Open this select menu
                                              </option>
                                              <option value="1">One</option>
                                              <option value="2">Two</option>
                                              <option value="3">Three</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-12">
                                          <select
                                            class="form-select"
                                            aria-label="Default select example"
                                          >
                                            <option selected>
                                              Open this select menu
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                          </div>
                                          <div className="col-lg-12">
                                          <select
                                            class="form-select"
                                            aria-label="Default select example"
                                          >
                                            <option selected>
                                              Open this select menu
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                          </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <h5 className="mb-2">Chat With Executive</h5>
                                  <Chat/>
                                  {/* <div className="card chat-box shadow bg-white">
                                    <div className="card-body rounded px-2 py-0 pt-4 h-20">
                                      <div className="chat-conversation">
                                        <ul className="list-unstyled mb-0">
                                          <li className="">
                                            <div className="conversation-list">
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Steven Franklin
                                                </div>
                                                <p>Hello!</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="right">
                                            <div className="conversation-list">
                                              <div className="dropdown">
                                                <a
                                                  href="#"
                                                  aria-haspopup="true"
                                                  className="dropdown-toggle"
                                                  aria-expanded="false"
                                                >
                                                  <i className="bx bx-dots-vertical-rounded"></i>
                                                </a>
                                                <div
                                                  tabIndex="-1"
                                                  role="menu"
                                                  aria-hidden="true"
                                                  className="dropdown-menu-end dropdown-menu"
                                                >
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Copy
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Save
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Forward
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Delete
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Henry Wells
                                                </div>
                                                <p>Wow that's great</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="">
                                            <div className="conversation-list">
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Steven Franklin
                                                </div>
                                                <p>Hello!</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="right">
                                            <div className="conversation-list">
                                              <div className="dropdown">
                                                <a
                                                  href="#"
                                                  aria-haspopup="true"
                                                  className="dropdown-toggle"
                                                  aria-expanded="false"
                                                >
                                                  <i className="bx bx-dots-vertical-rounded"></i>
                                                </a>
                                                <div
                                                  tabIndex="-1"
                                                  role="menu"
                                                  aria-hidden="true"
                                                  className="dropdown-menu-end dropdown-menu"
                                                >
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Copy
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Save
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Forward
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Delete
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Henry Wells
                                                </div>
                                                <p>Wow that's great</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="">
                                            <div className="conversation-list">
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Steven Franklin
                                                </div>
                                                <p>Hello!</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="right">
                                            <div className="conversation-list">
                                              <div className="dropdown">
                                                <a
                                                  href="#"
                                                  aria-haspopup="true"
                                                  className="dropdown-toggle"
                                                  aria-expanded="false"
                                                >
                                                  <i className="bx bx-dots-vertical-rounded"></i>
                                                </a>
                                                <div
                                                  tabIndex="-1"
                                                  role="menu"
                                                  aria-hidden="true"
                                                  className="dropdown-menu-end dropdown-menu"
                                                >
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Copy
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Save
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Forward
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Delete
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Henry Wells
                                                </div>
                                                <p>Wow that's great</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="">
                                            <div className="conversation-list">
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Steven Franklin
                                                </div>
                                                <p>Hello!</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="right">
                                            <div className="conversation-list">
                                              <div className="dropdown">
                                                <a
                                                  href="#"
                                                  aria-haspopup="true"
                                                  className="dropdown-toggle"
                                                  aria-expanded="false"
                                                >
                                                  <i className="bx bx-dots-vertical-rounded"></i>
                                                </a>
                                                <div
                                                  tabIndex="-1"
                                                  role="menu"
                                                  aria-hidden="true"
                                                  className="dropdown-menu-end dropdown-menu"
                                                >
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Copy
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Save
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Forward
                                                  </a>
                                                  <a
                                                    href="#"
                                                    tabIndex="0"
                                                    role="menuitem"
                                                    className="dropdown-item"
                                                  >
                                                    Delete
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="ctext-wrap">
                                                <div className="conversation-name">
                                                  Henry Wells
                                                </div>
                                                <p>Wow that's great</p>
                                                <p className="chat-time mb-0">
                                                  <i className="bx bx-time-five align-middle me-1"></i>{" "}
                                                  10:37
                                                </p>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="p-2 chat-input-section mt-2">
                                        <div className="row">
                                          <div className="col">
                                            <div className="position-relative">
                                              <input
                                                type="text"
                                                className="form-control chat-input"
                                                placeholder="Enter Message..."
                                              />
                                              {/* <div className="chat-input-links">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="/chat">
                                <i
                                  className="mdi mdi-emoticon-happy-outline"
                                  id="Emojitooltip"
                                ></i>
                              </a>
                            </li>{" "}
                            <li className="list-inline-item">
                              <a href="/chat">
                                <i
                                  className="mdi mdi-file-image-outline"
                                  id="Imagetooltip"
                                ></i>
                              </a>
                            </li>{" "}
                            <li className="list-inline-item">
                              <a href="/chat">
                                <i
                                  className="mdi mdi-file-document-outline"
                                  id="Filetooltip"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div> 
                                            </div>
                                          </div>
                                          <div className="col-auto col">
                                            <button
                                              type="button"
                                              className="btn-rounded chat-send btn btn-primary"
                                            >
                                              <i className="mdi mdi-send"></i>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={closeModal}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2546
                        </a>
                      </td>
                      <td>William Cruz</td>
                      <td>03 Oct 2019</td>
                      <td>$374</td>
                      <td>
                        <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fas fa-money-bill-alt me-1"></i> COD
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2545
                        </a>
                      </td>
                      <td>Jacob Hunter</td>
                      <td>04 Oct 2019</td>
                      <td>$392</td>
                      <td>
                        <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-paypal me-1"></i> Paypal
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2544
                        </a>
                      </td>
                      <td>Ronald Taylor</td>
                      <td>04 Oct 2019</td>
                      <td>$404</td>
                      <td>
                        <span className="font-size-12 badge-soft-warning badge bg-warning rounded-pill">
                          Refund
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1"></i> Visa
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2543
                        </a>
                      </td>
                      <td>Barry Dick</td>
                      <td>05 Oct 2019</td>
                      <td>$412</td>
                      <td>
                        <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2543
                        </a>
                      </td>
                      <td>Barry Dick</td>
                      <td>05 Oct 2019</td>
                      <td>$412</td>
                      <td>
                        <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1"></i> Mastercard
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2542
                        </a>
                      </td>
                      <td>Juan Mitchell</td>
                      <td>06 Oct 2019</td>
                      <td>$384</td>
                      <td>
                        <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-paypal me-1"></i> Paypal
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2542
                        </a>
                      </td>
                      <td>Juan Mitchell</td>
                      <td>06 Oct 2019</td>
                      <td>$384</td>
                      <td>
                        <span className="font-size-12 badge-soft-success badge bg-success rounded-pill">
                          Paid
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-paypal me-1"></i> Paypal
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2541
                        </a>
                      </td>
                      <td>Jamal Burnett</td>
                      <td>07 Oct 2019</td>
                      <td>$380</td>
                      <td>
                        <span className="font-size-12 badge-soft-danger badge bg-danger rounded-pill">
                          Chargeback
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1"></i> Visa
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a
                          className="text-body fw-bold"
                          href="/ecommerce-orders"
                        >
                          #SK2541
                        </a>
                      </td>
                      <td>Jamal Burnett</td>
                      <td>07 Oct 2019</td>
                      <td>$380</td>
                      <td>
                        <span className="font-size-12 badge-soft-danger badge bg-danger rounded-pill">
                          Chargeback
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1"></i> Visa
                      </td>
                      <td>
                        <Button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </Button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a className="text-success" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-pencil font-size-18"
                              id="edittooltip"
                            ></i>
                          </a>
                          <a className="text-danger" href="/ecommerce-orders">
                            <i
                              className="mdi mdi-delete font-size-18"
                              id="deletetooltip"
                            ></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pagination pagination-rounded justify-content-end mb-2">
              <ul className="pagination react-bootstrap-table-page-btns-ul">
                <li className="active page-item" title="1">
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
