import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import authReducer from '../containers/auth/authSlice';
import cartReducer from '../containers/reducer/cartSlice';
import orderReducer from '../containers/reducer/OrderSilce';
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

// Persisted reducers
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedWalletReducer = persistReducer(walletPersistConfig, walletReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
    orders: orderReducer,
    wallet: persistedWalletReducer, // Add persisted wallet reducer to the store
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
