import React from "react";
import '../style.css'

const LatestTransaction = () => {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="mb-4 h4 card-title">Latest Transaction</div>
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
                        tabindex="0"
                        aria-label="Order ID sort desc"
                        className="sortable"
                      >
                        Order ID
                        <span className="caret-4-desc"></span>
                      </th>
                      <th
                        tabindex="0"
                        aria-label="Billing Name sortable"
                        className="sortable"
                      >
                        Billing Name
                        <span className="order-4"></span>
                      </th>
                      <th
                        tabindex="0"
                        aria-label="Date sortable"
                        className="sortable"
                      >
                        Date<span className="order-4"></span>
                      </th>
                      <th
                        tabindex="0"
                        aria-label="Total sortable"
                        className="sortable"
                      >
                        Total<span className="order-4"></span>
                      </th>
                      <th
                        tabindex="0"
                        aria-label="Payment Status sortable"
                        className="sortable"
                      >
                        Payment Status
                        <span className="order-4"></span>
                      </th>
                      <th
                        tabindex="0"
                        aria-label="Payment Method sortable"
                        className="sortable"
                      >
                        Payment Method
                        <span className="order-4"></span>
                      </th>
                      <th
                        tabindex="0"
                        aria-label="View Details sortable"
                        className="sortable"
                      >
                        View Details
                        <span className="order-4"></span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a className="text-body fw-bold" href="/dashboard">
                          #SK2548
                        </a>
                      </td>
                      <td>Clark Benson</td>
                      <td>2019-10-01</td>
                      <td>$345</td>
                      <td>
                        <span className="font-size-12 badge-soft-warning badge bg-warning rounded-pill">
                          Refund
                        </span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1"></i> Visa
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a className="text-body fw-bold" href="/dashboard">
                          #SK2547
                        </a>
                      </td>
                      <td>Dustin Moser</td>
                      <td>2019-10-02</td>
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
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a className="text-body fw-bold" href="/dashboard">
                          #SK2546
                        </a>
                      </td>
                      <td>William Cruz</td>
                      <td>2019-10-03</td>
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
                        <button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a className="text-body fw-bold" href="/dashboard">
                          #SK2545
                        </a>
                      </td>
                      <td>Jacob Hunter</td>
                      <td>2019-10-04</td>
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
                        <button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a className="text-body fw-bold" href="/dashboard">
                          #SK2544
                        </a>
                      </td>
                      <td>Ronald Taylor</td>
                      <td>2019-10-04</td>
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
                        <button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="selection-cell">
                        <input type="checkbox" className="selection-input-4" />
                      </td>
                      <td>
                        <a className="text-body fw-bold" href="/dashboard">
                          #SK2543
                        </a>
                      </td>
                      <td>Barry Dick</td>
                      <td>2019-10-05</td>
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
                        <button
                          type="button"
                          className="btn-sm btn-rounded btn btn-primary"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pagination pagination-rounded justify-content-end">
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
                <li className="page-item" title="3">
                  <a href="#" className="page-link">
                    3
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

export default LatestTransaction;
