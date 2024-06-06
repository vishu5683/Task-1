import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: '',
  token: '',
  phoneNumber: '', // Add phoneNumber field to initial state
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.phoneNumber = action.payload.phoneNumber; // Store phoneNumber from payload
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('phoneNumber', action.payload.phoneNumber); // Store phoneNumber in local storage
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '';
      state.token = '';
      state.phoneNumber = ''; // Clear phoneNumber on logout
      localStorage.clear();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
