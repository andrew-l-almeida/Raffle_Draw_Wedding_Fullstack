import axios  from "axios";

axios.defaults.baseURL = 'www.localhost:3001';

const api = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {'X-Custom-Header': 'foobar'}
})

export default api