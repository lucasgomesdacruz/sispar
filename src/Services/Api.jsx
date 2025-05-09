import axios from "axios";

const Api = axios.create({
    baseURL: "https://backendsispar.onrender.com",
    withCredentials: true
    
})

export default Api;