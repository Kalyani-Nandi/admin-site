import { createSlice } from '@reduxjs/toolkit';

// Get the initial theme from localStorage or fallback to 'light'
const initialTheme = localStorage.getItem('color-theme') || 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: initialTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload; // Update the theme
      localStorage.setItem('color-theme', action.payload); // Persist in localStorage
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
