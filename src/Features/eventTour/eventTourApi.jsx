import apiSlice from "../api/apiSlice";

const eventTourApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getTours : builder.query({
            query :()=>({
                url : "/tours"
            })
        }),
        tourById : builder.query({
            query :(id)=>({
                url : `/tour/${id}`
            })
        }),
        getCategories : builder.query({
            query :()=>({
                url : '/category'
            })
        }),
    })
})

export const {useGetToursQuery, useTourByIdQuery,useGetCategoriesQuery} = eventTourApi;