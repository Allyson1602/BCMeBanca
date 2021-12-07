import axios, { AxiosInstance } from 'axios';

const url = 'https://economia.awesomeapi.com.br/last';

export const ApiService: AxiosInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});