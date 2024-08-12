import axios from 'axios';

const baseURL = 'http://localhost:8080';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
const SignUp = (name, email, password) => axiosInstance.post('api/auth/register', { name, email, password });
const UserData = (email) => axiosInstance.get(`/users/email/${email}`);
const UpdateUserByID = (id, data) => axiosInstance.put(`/users/update/${id}`, data)
const DeleteUserByID = (id) => axiosInstance.delete(`/users/delete/${id}`)

//Admin
const getAllUsers = () => axiosInstance.get('/users/all')

export { axiosInstance, SignUp, WebData, UserData, UpdateUserByID, getAllUsers, DeleteUserByID }

