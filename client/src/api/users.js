import Axios from "../config/axios";
import { HOST } from "../config/variables";

export const login = async (username, password) => {
    try {
        const response = await Axios.post(`${HOST}/login`,{
            username,
            password,
        });
        return response.data;
    }catch (error) {
        console.error(error);
        throw error;
    }
};