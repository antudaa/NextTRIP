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
        
    })
})

export const {useGetToursQuery, useTourByIdQuery} = eventTourApi;