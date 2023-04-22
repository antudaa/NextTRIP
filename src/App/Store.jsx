import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../Features/Authentication/authslice";
import apiSlice from "../Features/api/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});


export default store;