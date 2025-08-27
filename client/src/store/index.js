import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice/tasksSlice';

const store = configureStore({reducer: { tasksData: tasksReducer}});

export default store;
