import {configureStore} from '@reduxjs/toolkit';

import {apiSlice} from './slices/apiSlice';
import {tabSlice} from './slices/tabSlice';
import {wishlistSlice} from './slices/wishlistSlice';
import {cartSlice} from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    tab: tabSlice.reducer,
    wishlist: wishlistSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
