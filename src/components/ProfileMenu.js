import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
//i18n
import { withTranslation } from "react-i18next";
// Redux
import { connect } from "react-redux";
import { BrowserRouter as withRouter, Link } from "react-router-dom";
import Logout from "./Logout";
import Popup from "reactjs-popup";

// users

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState("Admin");

  useEffect(() => {
 /*
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"));
        setusername(obj.displayName);
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"));
        setusername(obj.username);
      }
    }
    */
  }, [props.success]);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src="https://dummyimage.com/60"
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ms-2 me-1">{username}</span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem>
            <i className="bx bx-user font-size-16 align-middle me-1" />
            Profile
          </DropdownItem>
          <DropdownItem>
            <Popup
              trigger={
                <button className="bg-white border-0 outline-0 p-0" >
                  <i className="bx bx-user font-size-16 align-middle me-1" />
                  Add User
                </button>
              }
              modal
            >
              <div className="card" style={{width: "400px"}}>
                <div className="card-body">
                  <div className="card-title">Add User</div>
                  <div className="p-2">
                  <form action="#">
                    <div class="mb-3">
                      <label for="name" class="form-label form-label">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        value="John Doe"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label form-label">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        value="johndoe@gmail.com"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="phone" class="form-label form-label">
                        Phone no
                      </label>
                      <input
                        name="phone"
                        type="number"
                        class="form-control"
                        value="1234567890"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        value="johndoe@gmail.com"
                      />
                    </div>
                    <div className="mb-3">
                    <label for="roles" class="form-label form-label">
                        Roles
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="Admin">Admin</option>
                        <option value="Executive">Executive</option>
                      </select>
                    </div>
                    <div class="mt-3 d-grid">
                      <Link
                        class="btn btn-success btn-block"
                        type="submit"
                      >
                        Add User
                      </Link>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </Popup>
          </DropdownItem>
          {/* <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1" />
            My Wallet
          </DropdownItem>
          <DropdownItem tag="a" href="#">
            <span className="badge bg-success float-end">11</span>
            <i className="bx bx-wrench font-size-16 align-middle me-1" />
            Settings
          </DropdownItem>
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            Lock screen
          </DropdownItem> */}
          <div className="dropdown-divider" />
          <Link to="/login" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>Logout</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { error, success } = state.Profile;
  return { error, success };
};

export default ProfileMenu;
