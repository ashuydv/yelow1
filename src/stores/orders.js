import createStore from "zustand";
import OrdersService from "../services/ordersService";

const useOrders = createStore((set) => ({
  orders: [],
  getOrders: async (query) => {
    let response = await OrdersService.getOrders(query);
    if (!response?.data || response?.data.length == 0) return;
    console.log("GOT ORDERS LIST", response);
    set((state) => ({ orders: response.data }));
  },
}));

export default useOrders;
