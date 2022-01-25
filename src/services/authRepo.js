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
            return response?.data
        } catch (error) {
            console.log(error)
        }

    }
}

export default AuthRep