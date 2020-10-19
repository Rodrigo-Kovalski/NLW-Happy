import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.103:3333', //Para o celular, IP da máquina -- Expo
});

export default api;