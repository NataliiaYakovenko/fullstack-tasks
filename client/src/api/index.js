import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getTasks =()=> httpClient.get('/tasks');
export const getUsers =()=> httpClient.get('/users');

export const createTask = (values) => httpClient.post('/tasks', values);
