import axios from "axios";
import {API_BASE_URL} from '../constants';

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
});

export const apiGet = (url, body) => {
    return axiosInstance.get(url, body);
};

export const apiPost = (url, body) => {
    return axiosInstance.post(url, body);
};

export const apiPut = (url, body) => {
    return axiosInstance.put(url, body);
};
