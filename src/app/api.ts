import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://backend.cyberia.studio/api/v1'
});
