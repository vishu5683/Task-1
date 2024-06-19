// src/containers/reducer/addressSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedAddresses: [],
  defaultAddressId: null,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    saveAddress: (state, action) => {
      state.savedAddresses.push(action.payload);
    },
    deleteAddress: (state, action) => {
      state.savedAddresses = state.savedAddresses.filter(address => address.id !== action.payload);
      if (state.defaultAddressId === action.payload) {
        state.defaultAddressId = null;
      }
    },
    setDefaultAddress: (state, action) => {
      state.defaultAddressId = action.payload;
    },
  },
});

export const { saveAddress, deleteAddress, setDefaultAddress } = addressSlice.actions;

export default addressSlice.reducer;
