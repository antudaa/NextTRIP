import apiSlice from "../api/apiSlice";

const worldTourApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getWorldTour : builder.query({
            query :()=>({
                url : "/worldtour"
            })
        }),
        
    })
})

export const {useGetWorldTourQuery} = worldTourApi;