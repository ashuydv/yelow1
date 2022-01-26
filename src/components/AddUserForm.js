import axios from "axios";
import React from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddUserForm = (props) => {
  const [role, setRole] = useState("");
  const initUser = {
    id: null,
    name: "",
    email: "",
    phone_number: "",
    password: "",
    type: "",
  };
  const [user, setUser] = useState([]);
  const [option, setOption] = useState({
    isOption1: false,
    isOption2: false,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name &&
      user.email &&
      user.phone_number &&
      user.password &&
      user.type
    ) {
      handleChange(e, props.addUser(user));
    }
  };

  const api = `https://devapi.yelow.club/v1/manpower/yelow/user?uuid=b500c0ee-1e8e-49fd-8148-bf91da8011f3`


  return (
    <div>
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <div className="card-title">Add User</div>
          <div className="p-2">
            <form action="#" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="name" class="form-label form-label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  value={user.name}
                  onChange={handleChange}
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
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label form-label">
                  Phone no
                </label>
                <input
                  name="phone_number"
                  type="number"
                  class="form-control"
                  value={user.phone_number}
                  onChange={handleChange}
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
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="type" class="form-label form-label">
                  Roles
                </label>
                <select
                name="type"
                  className="form-select"
                  aria-label="Default select example"
                  value={user.type}
                  onChange={handleChange}
                >
                  <option selected>Open this select menu</option>
                  <option value="Admin">Admin</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
              <div class="mt-3 d-grid">
                <button
                  class="btn btn-success btn-block"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
