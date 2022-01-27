import axios from "axios";
import React from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUsers from "../stores/users";
import { useInput } from "../hooks/useInput";

const InputComponent = (props) => {
  const { value, onChange, name } = props;
  return (
    <div class="mb-3">
      <label for={name.toLowerCase()} class="form-label form-label">
        {name}
      </label>
      {props.children ? (
        <select
          className="form-select"
          onChange={onChange}
          value={value}
        >{props.children}</select>
      ) : (
        <input
          name={props.name}
          type={props.type}
          class="form-control"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

const AddUserForm = (props) => {
  const role = useInput("");
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const phone_number = useInput("");
  const id = useInput(null);

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

  const addUser = useUsers(state => state.addUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name.value === "" ||
      email.value === "" ||
      password.value === "" ||
      phone_number.value === "" ||
      role.value === ""
    ) {
      console.log(name, email, password, phone_number, role);
      alert("Please fill all the fields");
      return;
    }

    await addUser({
      name: name.value,
      email: email.value,
      password: password.value,
      phone_number: phone_number.value,
      type: role.value,
    });
  
  
  };

  const api = `https://devapi.yelow.club/v1/manpower/yelow/user?uuid=b500c0ee-1e8e-49fd-8148-bf91da8011f3`;

  return (
    <div>
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <div className="card-title">Add User</div>
          <div className="p-2">
            <form action="#" onSubmit={handleSubmit}>
              <InputComponent
                name="Name"
                type="text"
                {...name}
              ></InputComponent>
              <InputComponent
                name="Email"
                type="email"
                {...email}
              ></InputComponent>
              <InputComponent
                name="Phone Number"
                type="number"
                {...phone_number}
              ></InputComponent>
              <InputComponent
                name="Password"
                type="password"
                {...password}
              ></InputComponent>
              <InputComponent name="Role" {...role}>
                <option selected>Open this select menu</option>
                <option value="admin">Admin</option>
                <option value="executive">Executive</option>
              </InputComponent>

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
