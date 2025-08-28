import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const TASK_SLICE_NAME = 'tasks';

const initialState = {
  tasks: [],
  users: [],
  isFetching: false,
  error: null,
};

export const getTasksThunk = createAsyncThunk(
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
export const getUsersThunk = createAsyncThunk(
  `${TASK_SLICE_NAME}/get/users`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getUsers();
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
      } = await API.createTask(payload);
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
    bulder.addCase(getTasksThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getTasksThunk.fulfilled, (state, { payload }) => {
      state.tasks = [...payload];
      state.error = null;
    });
    bulder.addCase(getTasksThunk.rejected, (state, { payload }) => {
      state.error = payload;
    });

    bulder.addCase(getUsersThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    bulder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = [...payload];
      state.error = null;
    });
    bulder.addCase(getUsersThunk.rejected, (state, { payload }) => {
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
