import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const borrowApi = createApi({
    reducerPath: "borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://a3-libraryapi.vercel.app/api/" }),
    endpoints: (builder) => ({
        getBorrow: builder.query({
            query: () => "borrow",
        }),
        // Mutation to add a new book
        addBorrow: builder.mutation({
            query: (borrow) => ({
                url: "borrow",
                method: "POST",
                body: borrow,
            }),
        }),
    })
})

export const {
    useGetBorrowQuery,
    useAddBorrowMutation
} = borrowApi