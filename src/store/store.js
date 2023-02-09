import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import categoriesSlice from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    currentUser: userSlice,
    cartDetails: cartSlice,
    categoriesMap: categoriesSlice,
  },
});

export default store;
