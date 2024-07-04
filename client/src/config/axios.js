import axios from "axios";
import { HOST } from "./variables";

const Axios = axios.create({
    baseURL: HOST,
    withCredentials: true,
})

export default Axios;