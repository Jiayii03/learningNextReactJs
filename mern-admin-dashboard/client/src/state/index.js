import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const globalSlice = createSlice({
  name: "global", // name of the slice
  initialState, //sets the initial state defined earlier
  reducers: {
    setMode: (state) => { // this is an action
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

/* Both of these MUST be exported inorder to configure the store */
// export actions
export const { setMode } = globalSlice.actions; 

// export the full reducer
export default globalSlice.reducer;