import axios from "axios";

const api = axios.create({
    baseURL: "https://therapy-appointment-system.onrender.com",
    });

export default api;