import axios from 'axios';

const BASE_URL = 'http://192.168.4.25:8000/api'; // Reemplaza con la URL de tu backend

const api = axios.create({
    baseURL: BASE_URL,
});

const agent = {
    getData: () => api.get('/profile'),
    updateProfile: (data) => api.put('/profile/1', data),
    deleteFramework: (frameworkId) => api.delete(`/profile/1/framework/${frameworkId}`),
    addFramework: (data) => api.post('/profile/1/framework', data),
    updateFramework: (frameworkId, data) => api.put(`/profile/1/framework/${frameworkId}`, data),
};

export default agent;
