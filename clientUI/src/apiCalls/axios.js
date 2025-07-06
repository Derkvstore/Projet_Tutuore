import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
    // baseURL: 'http://192.168.1.101:4000/',
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})