import axios from "axios";
import { stringify } from "uuid";
import config from "../config";
import useUsers from "../stores/users";
class AuthRep {
  static async login(data) {
    try {
      let response = await axios.post(
        `https://devapi.yelow.club/v1/manpower/yelow/login`,
        {
          phone_number: data?.phone,
          password: data?.password,
        }
      );
//      if (!response.data.payload.status) return null;
        console.log('====================================');
        console.log(response);
        console.log('====================================');
      localStorage.setItem("token", response.data.payload.token);
      localStorage.setItem("userdata", response.data.payload.user);
      localStorage.setItem(
        "refresh_token",
        response.data.payload.refresh_token
      );

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async createUser(data) {
    console.log(data);
    try {
      let response = await axios({
        method: "post",
        url: `${config.host}/${config.api_version}/manpower/yelow/user`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data,
      });
      console.log(JSON.stringify(response.data));
      if(!response.data.payload.status) return { message : response.data.payload.message };
      return response?.data;
    } catch (error) {
      console.log(error);
      return { message : error.message };
    }
  }

  static async getUser(data) {
    try {
      let response = await axios({
        method: "get",
        url: `${config.host}/${config.api_version}/manpower/yelow/user`,
        params: {
          uuid: data?.uuid,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if(!response.data.payload.status) return { message : response.data.payload.message };
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUser(data) {
    try {
      let response = await axios({
        method: "delete",
        url: `${config.host}/${config.api_version}/manpower/yelow/user`,
        params: {
          uuid: data?.uuid,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if(!response.data.payload.status) return { message : response.data.payload.message };

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async updateUser(data) {
    try {
      let response = await axios({
        method: "put",
        url: `${config.host}/${config.api_version}/manpower/yelow/user`,
        params: {
          uuid: data?.uuid,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          name: data?.name,
          phone_number: data?.phone,
          email: data?.email,
          type: data?.type,
          password: data?.password,
        },
      });
      if(!response.data.payload.status) return { message : response.data.payload.message };
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async getUserList(data={}) {
    try {
      let response = await axios({
        method: "get",
        url: `${config.host}/${config.api_version}/manpower/yelow/user/list`,
        params: {
          type: data?.type,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if(!response?.data?.payload) return { message : response.data.payload.message };
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthRep;
