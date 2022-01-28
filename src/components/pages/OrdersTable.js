import React, { useState } from "react";
import Popup from "reactjs-popup";
import { Button } from "reactstrap";
import Cart from "./Cart";
import Chat from "./Chat";
import OrderDetails from "./OrderDetails";
import CustomerDetails from "./CustomerDetails";
import ProductSelect from "./ProductSelect";
import PopupModal from "./PopupModal";

const OrdersTable = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [process, setProcess] = useState("Processing");
  const [option, setOption] = useState({
    isOption1: false,
    isOption2: false,
    isOption3: false,
    isOption4: false,
    isOption5: false,
    isOption6: false,
  });

  const santa = (e) => {
    if (e.target.value === "1") {
      setOption((option) => {
        return {
          ...option,
          isOption1: !option.isOption1,
          isOption5: false,
          isOption6: false,
        };
      });
    } else if (e.target.value === "2") {
      setOption((option) => {
        return {
          ...option,
          isOption2: !option.isOption2,
          isOption5: false,
          isOption6: false,
        };
      });
    } else if (e.target.value === "3") {
      setOption((option) => {
        return {
          ...option,
          isOption3: !option.isOption3,
          isOption5: false,
          isOption6: false,
        };
      });
    } else if (e.target.value === "4") {
      setOption((option) => {
        return {
          ...option,
          isOption4: !option.isOption4,
          isOption5: false,
          isOption6: false,
        };
      });
    } else if (e.target.value === "5") {
      setOption((option) => {
        return {
          ...option,
          isOption1: false,
          isOption2: false,
          isOption3: false,
          isOption4: false,
          isOption6: false,
          isOption5: true,
        };
      });
    } else if (e.target.value === "6") {
      setOption((option) => {
        return {
          ...option,
          isOption1: false,
          isOption2: false,
          isOption3: false,
          isOption4: false,
          isOption5: false,
          isOption6: true,
        };
      });
    }
  };

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
                          <PopupModal />
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
