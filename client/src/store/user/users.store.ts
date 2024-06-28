import { createSlice } from "@reduxjs/toolkit";
// service
import authService from "@services/auth/auth-service";
import localStorageService from "@services/auth/local.storage-service";

const initialState = localStorageService.getUserId()
  ? {
      entities: [],
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true
    }
  : {
      entities: [],
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false
    };

const usersListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    authRequested: (state) => {
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userLoggedOut: (state) => {
      state.entities = [];
      state.isLoggedIn = false;
      state.auth = null;
    }
  }
});

const { reducer: usersListReducer, actions } = usersListSlice;
const { authRequested, authRequestFailed, authRequestSuccess, userLoggedOut } =
  actions;

export const login = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.login(payload);

    localStorageService.setData(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
  } catch (error) {
    const errorMessage = error.response.data.error.message;
    dispatch(authRequestFailed(errorMessage));
    throw errorMessage;
  }
};

export const logOut = () => (dispatch) => {
  localStorageService.removeData();
  dispatch(userLoggedOut());
};

export const getCurrentUserId = () => (state) => state?.users?.auth?.userId;

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export default usersListReducer;
