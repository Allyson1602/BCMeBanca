import axios, { AxiosInstance } from 'axios';

const urlMoedas = 'https://economia.awesomeapi.com.br/last';

export const ApiService: AxiosInstance = axios.create({
    baseURL: urlMoedas,
    headers: {
        'Content-Type': 'application/json',
    },
});

const urlConversor = 'https://free.currencyconverterapi.com/api/v5/convert?compact=y&apiKey=441eb89633d0c989a691';

export const ApiServiceConversor: AxiosInstance = axios.create({
    baseURL: urlConversor,
    headers: {
        'Content-Type': 'application/json',
    },
});