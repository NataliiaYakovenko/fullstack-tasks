import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getTasks =()=> httpClient.get('/tasks');

export const createTask = (values) => httpClient.post('/users', values);
