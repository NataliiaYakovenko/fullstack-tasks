import { createSlice } from '@reduxjs/toolkit';

const TASK_SLICE_NAME = 'tasks';

const initialState = {
  tasks: [],
  users: [],
  isFetching: false,
  error: null,
};

const tasksSlice = createSlice({
  name: TASK_SLICE_NAME,
  initialState,
  extraReducers: () => {},
});

const { reducer } = tasksSlice;

export default reducer;
