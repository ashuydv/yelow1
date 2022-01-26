import React, { useContext, useState, createContext } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState();

  function addUser(user) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={{ user, setUser: addUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext