import { configureStore } from "@reduxjs/toolkit";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import categoriesSlice from "./slices/categoriesSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["currentUser"],
};

const presistedReducer = persistCombineReducers(persistConfig, {
  currentUser: userSlice,
  cartDetails: cartSlice,
  categoriesMap: categoriesSlice,
});

const store = configureStore({
  reducer: presistedReducer,
});

export const persistedStore = persistStore(store);
export default store;
