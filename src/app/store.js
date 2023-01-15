import {  configureStore, } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {
  amazonApi
} from '../features/dataApi';
import cartReducer from '../features/bucketSlice/bucketSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    [amazonApi.reducerPath]: amazonApi.reducer,
    bucket: cartReducer,
    users:userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(amazonApi.middleware),
});