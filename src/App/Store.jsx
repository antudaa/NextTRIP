import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Authentication/authslice";

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});


export default store;