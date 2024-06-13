import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  address: null,
  savedAddresses: [], // Add savedAddresses to the initial state
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    saveAddress: (state, action) => {
      state.address = action.payload;
      state.savedAddresses.push(action.payload); // Push the new address to the savedAddresses array
    },
    deleteAddress: (state, action) => {
      state.savedAddresses = state.savedAddresses.filter(address => address.id !== action.payload);
    } // Define deleteAddress action
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart, saveAddress, deleteAddress } = cartSlice.actions;

export default cartSlice.reducer;
