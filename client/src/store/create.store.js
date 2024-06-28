import { combineReducers, configureStore } from "@reduxjs/toolkit";
// reducers
import usersListReducer from "./user/users.store";
import tasksReducer from "./task/tasks.store";

const rootReducer = combineReducers({
  users: usersListReducer,
  tasks: tasksReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
