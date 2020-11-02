import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //definida lá no insominia também pra teste
});

export default api; 