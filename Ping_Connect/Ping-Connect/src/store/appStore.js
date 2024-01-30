import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import usersSlice from "./usersSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    post:postSlice
  },
});

export default store;
