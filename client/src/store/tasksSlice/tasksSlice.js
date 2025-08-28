import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const TASK_SLICE_NAME = 'tasks';

const initialState = {
  tasks: [],
  users: [],
  isFetching: false,
  error: null,
};

export const getTaskThunk = createAsyncThunk(
  `${TASK_SLICE_NAME}/get/tasks`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getTasks();
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

export const createTaskThunk = createAsyncThunk(
  `${TASK_SLICE_NAME}/create`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.createTask();
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.response.data });
    }
  }
);

const tasksSlice = createSlice({
  name: TASK_SLICE_NAME,
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(getTaskThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getTaskThunk.fulfilled, (state, { payload }) => {
      state.tasks = [...payload];
      state.error = null;
    });
    bulder.addCase(getTaskThunk.rejected, (state, { payload }) => {
      state.error = payload;
    });
    bulder.addCase(createTaskThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(createTaskThunk.fulfilled, (state, { payload }) => {
      state.tasks.push(payload);
      state.isFetching = false;
      state.error = null;
    });
    bulder.addCase(createTaskThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer } = tasksSlice;

export default reducer;
