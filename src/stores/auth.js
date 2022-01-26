import createStore from "zustand";
import AuthRep from "../services/authRepo";

const useAuth = createStore((set) => ({
  auth: {
    isAuthenticated: false,
    user: {},
  },
  login: async (auth) => {
    let response = await AuthRep.login({
      phone: auth.phone,
      password: auth.password,
    });

    if (response == null) return;
    set((state) => ({
        auth: {
            isAuthenticated: true,
            user: response.payload.user,
        },
    }));
  },
  logout: () => {
    set((state) => ({
        auth: {
            isAuthenticated: false,
            user: {},
        },
    }));
  }
}));

export default useAuth;