import { createSlice } from "@reduxjs/toolkit";
import { setLocalDarkMode } from "../../helpers/darkMode";

// const initialState = { darkMode: localStorage.getItem("theme" || false) };
const initialState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
