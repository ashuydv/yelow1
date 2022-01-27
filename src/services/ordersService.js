import axios from "axios";
import config from "../config";
import Order from "../types/Order";

export default class OrdersService {

    /**@returns {Promise<{message : string, data : Order[]}>} */
    static async getOrders(query) {
        try {
            let response = await axios({
                method: "get",
                url: `${config.host}/${config.api_version}/order/list`,
                params: {
                    ...query,
                },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            
            if (!response.data.payload.status) return { message: response.data.payload.message, data: null };
            return response?.data.map((order) => new Order(...order));
        } catch (error) {
            console.log(error);
            return { message: error.message, data: null };
        }
    }

    /**@returns {Promise<{message : string, data : Order?}>} */
    static async getOrder(uuid) {
        try {
            let response = await axios({
                method: "get",
                url: `${config.host}/${config.api_version}/order/get`,
                params: {
                    uuid,
                },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            if (!response?.data?.payload?.status) return { message: response.data.payload.message, data: null};
            return new Order(...response.data.payload.data);
        } catch (error) {
            console.log(error);
            return { message: error.message, data: null };
        }
    }

}