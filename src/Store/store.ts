import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Features/Products/Reducers/ProductSlice";

export const Store = configureStore({
  reducer: {
    Products: ProductReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
