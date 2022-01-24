import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import Popup from "reactjs-popup";

const NotificationDropdown = (props) => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <React.Fragment>
        <Dropdown
          isOpen={menu}
          toggle={() => setMenu(!menu)}
          className="dropdown d-inline-block"
          tag="li"
        >
          <DropdownToggle
            className="btn header-item noti-icon"
            tag="button"
            id="page-header-notifications-dropdown"
          >
            <i className="fas fa-bell" />
            <span className="badge bg-danger rounded-pill">3</span>
          </DropdownToggle>

          <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
            <div className="p-3">
              <Row className="align-items-center">
                <Col>
                  <h6 className="m-0"> Notifications </h6>
                </Col>
                <div className="col-auto">
                  <a href="#" className="small">
                    {" "}
                    View All
                  </a>
                </div>
              </Row>
            </div>

            <SimpleBar style={{ height: "230px" }}>
              {/* <Link>
              </Link> */}
              <Popup
                  className="text-reset notification-item"
                  style={{cursor: "pointer"}}
                  trigger={
                    <div className="d-flex px-3">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="bx bx-cart" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-2 mb-1">
                          Janta wants to delete this order{" "}
                        </h6>
                      </div>
                    </div>
                  }
                  modal
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        Order Cancellation
                      </div>
                      <p>Janta wants to delete the order named as Nescafe Gold, with order id 23231424, </p>
                      <div className="card-footer">
                      <div className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-success mx-2">
                          Accept
                        </button>
                        <button className="btn btn-danger" >
                          Decline
                        </button>
                      </div>
                      </div>
                    </div>
                  </div>
                </Popup>
            </SimpleBar>
            <div className="p-2 border-top d-grid">
              <Link
                className="btn btn-sm btn-link font-size-14 text-center"
                to="#"
              >
                <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                <span key="t-view-more">View More..</span>
              </Link>
            </div>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    </div>
  );
};

export default NotificationDropdown;
