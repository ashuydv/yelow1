import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import userList from "./userList";
import useUsers from "../stores/users";
import UserTable from "./UserTable";

const Users = () => {
  const users = useUsers(state => state.users);
  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <div className="row">
            <div className="col-8">
            <UserTable users={users} />
            </div>
            <div className="col-4">
            <AddUserForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;