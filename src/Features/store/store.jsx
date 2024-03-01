import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authslice from "../Authentication/authslice";
import apiSlice from "../api/apiSlice";

const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authslice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
