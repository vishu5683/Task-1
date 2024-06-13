// containers/reducer/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const orderToUpdate = state.orders.find(order => order.id === orderId);
      if (orderToUpdate) {
        orderToUpdate.status = newStatus;
      }
    },
  },
});

export const { addOrder, cancelOrder, updateOrderStatus } = orderSlice.actions;

export default orderSlice.reducer;
