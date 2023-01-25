import {  configureStore, } from '@reduxjs/toolkit';
import {
  amazonApi
} from '../features/dataApi';
import cartReducer from '../features/bucketSlice/bucketSlice';
import userReducer from '../features/user/userSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    [amazonApi.reducerPath]: amazonApi.reducer,
    bucket: cartReducer,
    users:userReducer,
    searchField:searchReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(amazonApi.middleware),
});