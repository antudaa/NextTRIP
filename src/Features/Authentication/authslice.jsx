import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import auth from "../../firebase/firebase.config";

// Initial state for authentication 
const initialState = {
    email: "",
    role: "",
    isLoading: true,
    isError: false,
    error: "",
};

// SignUp with Email
// export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
//     const data = await createUserWithEmailAndPassword(auth, email, password);
//     return data.user.email;
// });

// Login with Email
// export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {
//     const data = await signInWithEmailAndPassword(auth, email, password);
//     return data.user.email;
// });

// Google Login 
// export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
//     const provider = new GoogleAuthProvider();
//     const data = await signInWithPopup(auth, provider);
//     // getRedirectResult(auth)
//     return data.user.email;
// });

// Facebook Login 
// export const facebookLogin = createAsyncThunk("auth/facebookLogin", async () => {
//     const provider = new FacebookAuthProvider();
//     const data = await signInWithPopup(auth, provider);
//     return data.user.email;
// });

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Logout Functionality
        // logOut: (state) => {
        //     state.email = "";
        // },
        // // Setting Up User For User Persistency 
        // setUser: (state, { payload }) => {
        //     state.email = payload;
        //     state.isLoading = false;
        // },
    },
    // extraReducers: (builder) => {
    //     builder
    //         // SignUp Functionality 
    //         .addCase(createUser.pending, (state) => {
    //             state.isLoading = true;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(createUser.fulfilled, (state, { payload }) => {
    //             state.isLoading = false;
    //             state.email = payload;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(createUser.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.isError = true;
    //             state.error = action.error.message;
    //         })

    //         // Login Functionality
    //         .addCase(loginUser.pending, (state) => {
    //             state.isLoading = true;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(loginUser.fulfilled, (state, { payload }) => {
    //             state.isLoading = false;
    //             state.email = payload;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(loginUser.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.isError = true;
    //             state.error = action.error.message;
    //         })

    //         // GoogleLogin Functionality
    //         .addCase(googleLogin.pending, (state) => {
    //             state.isLoading = true;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(googleLogin.fulfilled, (state, { payload }) => {
    //             state.isLoading = false;
    //             state.email = payload;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(googleLogin.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.isError = true;
    //             state.error = action.error.message;
    //         })

    //         // FacebookLogin Functionality
    //         .addCase(facebookLogin.pending, (state) => {
    //             state.isLoading = true;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(facebookLogin.fulfilled, (state, { payload }) => {
    //             state.isLoading = false;
    //             state.email = payload;
    //             state.isError = false;
    //             state.error = "";
    //         })
    //         .addCase(facebookLogin.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.isError = true;
    //             state.error = action.error.message;
    //         });

    // }
});

// Importing All data 
export const { logOut, setUser } = authSlice.actions;

export default authSlice.reducer;

