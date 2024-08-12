import axios from 'axios';


const baseURL = 'http://localhost:7777/api';


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


const signup = (name, email, password) => {
    return axiosInstance.post('/auth/signup', { name, email, password });
};


const login = (email, password) => {
    return axiosInstance.post('/auth/login', { email, password });
};



const getUserDataByEmail = (email) => {
    return axiosInstance.get(`/users/email/${email}`);
};


const updateUserById = (id, data) => {
    return axiosInstance.put(`/users/update/${id}`, data);
};

const deleteUserById = (id) => {
    return axiosInstance.delete(`/users/delete/${id}`);
};

const getAllUsers = () => {
    return axiosInstance.get('/users/all');
};

export { axiosInstance, signup, login, getUserDataByEmail, updateUserById, deleteUserById, getAllUsers };
