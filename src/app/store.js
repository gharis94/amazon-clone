import {
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {
  amazonApi
} from '../features/dataApi';
import cartReducer from '../features/bucketSlice/bucketSlice'

export const store = configureStore({
  reducer: {
    [amazonApi.reducerPath]: amazonApi.reducer,
    bucket: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(amazonApi.middleware),
});