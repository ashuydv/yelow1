import axios from "axios";
import { stringify } from "uuid";

class AuthRep {
    static async login(data) {
        try {
            let response = await axios.post(
                `https://devapi.yelow.club/v1/manpower/yelow/login`, {
                    phone_number: data?.phone,
                    password: data?.password,
                }
            );
            localStorage.setItem("fooo", JSON.stringify(response.data))
            return response?.data
        } catch (error) {
            console.log(error)
        }

    }
}

export default AuthRep