

import { createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    balance: 5000, // initial balance
  },
  reducers: {
    addMoney: (state, action) => {
      state.balance += action.payload;
    },
    deductMoney: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { addMoney, deductMoney } = walletSlice.actions;
export default walletSlice.reducer;
