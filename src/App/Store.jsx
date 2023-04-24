import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authslice from "../Features/Authentication/authslice";
// import apiSlice from "../Features/api/apiSlice";

const store = configureStore({
    reducer: {
        // [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authslice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authslice.middleware),
});


export default store;