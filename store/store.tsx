import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import newSlice from "./slices/newSlice";

export const store = configureStore({
  reducer: { cartStore: cartSlice, newSlice: newSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
