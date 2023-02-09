import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesMap: {},
};

const categoriesSlice = createSlice({
  name: "categoriesMap",
  initialState: initialState,
  reducers: {
    setCategoriesMap(state, action) {
      return { ...state, categoriesMap: action.payload };
    },
  },
});

export default categoriesSlice.reducer;
export const { setCategoriesMap } = categoriesSlice.actions;
