import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "./GrocerySlice";
export const store = configureStore({
  reducer: {
    grocery: groceryReducer,
  },
});

export default store;
