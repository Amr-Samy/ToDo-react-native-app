import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/Todo.sclice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
});
