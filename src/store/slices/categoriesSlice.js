import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const initialState = {
  categoriesMap: {},
  status: "idle", // 'idle' | 'loading' | 'success' || 'failed'
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categoriesMap/fetchCategories",
  async () => {
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      return categoriesArray;
    } catch (e) {
      return e.message;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categoriesMap",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        return { ...state, status: "success", categoriesMap: action.payload };
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        return { ...state, status: "failed", error: action.error.message };
      });
  },
});

export default categoriesSlice.reducer;
export const { setCategoriesMap } = categoriesSlice.actions;
