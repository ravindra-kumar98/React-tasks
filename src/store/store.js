import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice/CounterSlice";
import todoListerSlice from "./slice/TodoSlice";

const store = configureStore({
  reducer: {
    Counter: CounterSlice,
    Todo: todoListerSlice,
  },
});
export default store;
