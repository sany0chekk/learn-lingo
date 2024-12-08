import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import teachersReducer from "./teachers/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    teachers: teachersReducer,
  },
});
