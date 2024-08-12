
import axios from 'axios';


const baseURL = 'http://localhost:8080/api/auth';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const SignUp = (name, email,password,role) => axios.post(`${baseURL}/register`, { name, email,password,role });


export { axiosInstance, SignUp }
