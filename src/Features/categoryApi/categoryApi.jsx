import apiSlice from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getCategories : builder.query({
            query :()=>({
                url : '/category'
            })
        }),
        
    })
})

export const {useGetCategoriesQuery} = categoryApi