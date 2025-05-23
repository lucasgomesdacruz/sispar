import axios from "axios";

const Api = axios.create({
    baseURL: "https://backendsispar.onrender.com",
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    
})

export default Api;