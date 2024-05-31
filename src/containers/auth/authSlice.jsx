import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: '',
  token: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.token = action.payload.token;
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '';
      state.token = '';
      localStorage.clear();
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
