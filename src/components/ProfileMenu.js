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
import AddUserForm from "./AddUserForm";
import userList from "./userList";
import Modal from "./Modal";
// users

const ProfileMenu = (props) => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  const [username, setusername] = useState("Admin");
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

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
                <button className="bg-white border-0 outline-0 p-0">
                  <i className="bx bx-user font-size-16 align-middle me-1" />
                  Add User
                </button>
              }
              modal
            >
              <AddUserForm addUser={addUser} />
            </Popup>
          </DropdownItem>
          <DropdownItem>
            <Modal />
          </DropdownItem>
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
