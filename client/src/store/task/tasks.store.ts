import { createAction, createSlice } from "@reduxjs/toolkit";
// services
import localStorageService from "@services/auth/local.storage-service";
import tasksService from "@services/task/tasks.service";

const initialState = localStorageService.getUserId()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      isLoggedIn: true,
      dataLoaded: false,
      lastFetch: null
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      isLoggedIn: false,
      dataLoaded: false,
      lastFetch: null
    };

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    tasksRequested: (state) => {
      state.isLoading = true;
    },
    tasksReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    tasksFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    taskCreated: (state, action) => {
      const newTask = action.payload;
      if (!state.entities.some((task) => task._id === newTask._id)) {
        state.entities.push(newTask);
      }
    },
    taskUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((task) => task._id === action.payload._id)
      ] = action.payload;
    },
    taskRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (meet) => meet._id !== action.payload
      );
    }
  }
});

const taskCreateRequested = createAction("tasks/taskCreateRequested");
const createTaskFailed = createAction("tasks/createtaskFailed");
const taskUpdateRequested = createAction("tasks/taskUpdateRequested");
const taskUpdateFailed = createAction("tasks/taskUpdateFailed");
const removeTaskRequested = createAction("tasks/removetaskRequested");
const removeTaskFailed = createAction("tasks/removetaskFailed");

const { reducer: tasksReducer, actions } = tasksSlice;
const {
  tasksRequested,
  tasksReceived,
  tasksFailed,
  taskCreated,
  taskUpdateSuccessed,
  taskRemoved
} = actions;

export const loadTasksList = () => async (dispatch) => {
  dispatch(tasksRequested());
  try {
    const data = await tasksService.get();
    dispatch(tasksReceived(data));
  } catch (error) {
    tasksFailed(error.message);
  }
};

export function createTask(payload) {
  return async function (dispatch) {
    dispatch(taskCreateRequested());
    try {
      const newTask = await tasksService.create(payload);

      dispatch(taskCreated(newTask));
    } catch (error) {
      dispatch(createTaskFailed(error.message));
    }
  };
}

export const updateTask = (payload) => async (dispatch) => {
  dispatch(taskUpdateRequested());
  try {
    const data = await tasksService.update(payload);
    dispatch(taskUpdateSuccessed(data));
  } catch (error) {
    dispatch(taskUpdateFailed(error.message));
  }
};

export const removeTask = (taskId) => async (dispatch) => {
  dispatch(removeTaskRequested());
  try {
    await tasksService.remove(taskId);
    dispatch(taskRemoved(taskId));
  } catch (error) {
    dispatch(removeTaskFailed(error.message));
  }
};

export const getTaskById = (id) => (state) => {
  if (state.tasks.entities) {
    return state.tasks.entities.find((task) => task._id === id);
  }
};

export const getTasksList = () => (state) => state?.tasks?.entities;
export const getTaskLoadingStatus = () => (state) => state.tasks.isLoading;

export default tasksReducer;
