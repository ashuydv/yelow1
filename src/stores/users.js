import createStore from "zustand";
import AuthRep from "../services/authRepo";

async function init(){
    let response = await AuthRep.getUserList();
    return response;
}
const useUsers = createStore((set) => ({
  users: [],
  addUser: async (user) => {
    let response = await AuthRep.createUser(user);
    if (!response?.payload) {
        alert("RESPonse", JSON.stringify(response));
        return;
    };
    alert("User created");
    set((state) => ({
      users: [...state.users, response.payload.data],
    }));
  },

  getUsers: async () => {
      console.log("STATE CHANGED")
    let response = await AuthRep.getUserList();
    console.log("RESPONSE", response);
    if (!response.payload.data) return;
    set((state) => ({
      users: response.payload.data,
    }));
  },

  updateUser: async (data) => {
    let response = await AuthRep.updateUser(data);
    if (!response.payload.data) return;
    set((state) => ({
      users: state.users.map((user) =>
        user.uuid === data.uuid ? response.payload.data : user
      ),
    }));
  },

  deleteUser: async (data) => {
    let response = await AuthRep.deleteUser(data);
    if (!response.payload.data) return;
    set((state) => ({
      users: state.users.filter((user) => user.uuid !== data.uuid),
    }));
  },
}));

export default useUsers;