import apiSlice from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: '/category'
            })
        }),
        getToursByCategory: builder.query({
            query: (category) => ({
                url: `/tours/${category}`
            })
        }),
        postBook : builder.mutation({
            query : (data) =>({
                url : "/booking",
                method : "POST",
                body : data,
            }),
            // invalidatesTags : ["Booking"]
        }),
    })
})

export const { useGetCategoriesQuery, useGetToursByCategoryQuery,usePostBookMutation } = categoryApi;