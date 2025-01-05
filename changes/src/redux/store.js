import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
