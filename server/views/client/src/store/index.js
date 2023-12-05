import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import api from '@app/api';
import rtkQueryErrorLogger from '@app/middleware';
import cardSlice from './card/cardSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    card: cardSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, rtkQueryErrorLogger),
});
export default store;
setupListeners(store.dispatch);
