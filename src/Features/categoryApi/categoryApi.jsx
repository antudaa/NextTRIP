import apiSlice from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints : (builder) => ({
        getCategories : builder.query({
            query :()=>({
                url : '/category'
            })
        }),
        getToursByCategory : builder.query({
            
            query :(category)=>({
                url : `/tours/${category}`
                
            })
            
        }),
        
        
    })
    
})

// console.log(query)
export const {useGetCategoriesQuery,useGetToursByCategoryQuery} = categoryApi;