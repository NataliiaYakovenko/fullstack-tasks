import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getUsers = () => httpClient.get('/users');
export const getTasks = () => httpClient.get('/tasks');

export const createTask = (values) => httpClient.post('/tasks', values);
export const updateTask = (id, values) =>
  httpClient.put(`/tasks/${id}`, values);
export const deleteTask = (id) => httpClient.delete(`/tasks/${id}`);
