import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				method: "POST",
				url: "/user",
				body: data,
			}),
            invalidatesTags: ["User"],
		}),
	}),
});

export const { useRegisterMutation } = authApi;
