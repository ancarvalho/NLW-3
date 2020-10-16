import axios from "axios";

const api = axios.create({
    baseURL: "http://172.17.0.2:3333"
})

export default api;