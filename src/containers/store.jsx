import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import authReducer from '../containers/auth/authSlice';
import cartReducer from '../containers/reducer/cartSlice';
import orderReducer from '../containers/reducer/OrderSilce'; // Ensure correct import path
import walletReducer from '../containers/reducer/walletSlice'; // Import the wallet reducer

// Persist config for auth state
const authPersistConfig = {
  key: 'auth',
  storage,
};

// Persist config for cart state
const cartPersistConfig = {
  key: 'cart',
  storage,
};

// Persist config for wallet state
const walletPersistConfig = {
  key: 'wallet',
  storage,
};

// Persist config for orders state
const ordersPersistConfig = {
  key: 'orders',
  storage,
};

// Persisted reducers
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedWalletReducer = persistReducer(walletPersistConfig, walletReducer);
const persistedOrdersReducer = persistReducer(ordersPersistConfig, orderReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
    orders: persistedOrdersReducer,
    wallet: persistedWalletReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
