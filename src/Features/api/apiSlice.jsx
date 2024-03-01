import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_DEV_URL,
        // baseUrl : 'http://localhost:5000' ,
    }),
    tagTypes: ["User","Image" ],
    endpoints : (builder) =>({})
})


 export default apiSlice;