import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userDetails",
  initialState: null,
  reducers: {
    setCurrentUser(state, action) {
      if (action.payload === null) {
        return null;
      } else {
        state = {
          ...action.payload,
        };
        return state;
      }
    },
  },
});

export default userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
