import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import userList from "./userList";
import UserTable from "./UserTable";

const Users = () => {
  const [users, setUsers] = useState(userList);
  
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  return (
    <div>
      <div className="main-content">
        <div className="page-content">
          <div className="row">
            <div className="col-8">
            <UserTable users={users} />
            </div>
            <div className="col-4">
            <AddUserForm addUser={addUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
